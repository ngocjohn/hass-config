var LitElement = LitElement || Object.getPrototypeOf(customElements.get('ha-panel-lovelace'));
var html = LitElement.prototype.html;
var css = LitElement.prototype.css;

import styles from './src/styles.css' assert { type: 'css' };
import { extractColorsFromImage } from './src/vibrant-utils.js';
import { prevBtn, nextBtn, volumeBtn, volumeMinus, volumePlus } from './src/icons.js';

// Defining the custom element class
class MyMediaPlayerCard extends LitElement {
	// Properties definition
	static get properties() {
		return {
			hass: {}, // Home Assistant instance
			_config: {}, // Configuration object
			progress: { type: Number }, // Current media progress
			mediaPosition: { type: Number }, // Current media position
			mediaDuration: { type: Number }, // Total media duration
			volume: { type: Number },
		};
	}

	static styles = [styles];
	// Constructor
	constructor() {
		super();
		// Initial values for progress, mediaPosition, and mediaDuration
		this.progress = 0;
		this.mediaPosition = 0;
		this.mediaDuration = 0;
		this._animationFrameId = null; // Animation frame ID for progress update
		// Bind the toggleVolumeControl method to the class instance
		this.toggleVolumeControl = this.toggleVolumeControl.bind(this);
	}
	// Callback when the element is added to the DOM
	connectedCallback() {
		super.connectedCallback();
		this._startProgressUpdate(); // Start updating progress
	}

	// Callback when the element is removed from the DOM
	disconnectedCallback() {
		if (this._animationFrameId) {
			cancelAnimationFrame(this._animationFrameId); // Cancel progress update animation frame
		}
		super.disconnectedCallback();
	}

	// Method to start updating progress
	_startProgressUpdate() {
		const updateProgress = () => {
			const stateObj = this.hass.states[this._config.entity];
			if (stateObj) {
				// Extracting media information from Home Assistant state
				const { media_position_updated_at, media_position, media_duration } = stateObj.attributes;
				let percentage = 0;
				let updatedPosition = media_position;
				if (stateObj.state === 'playing') {
					// Calculating progress percentage when media is playing
					const updatedAt = new Date(media_position_updated_at).getTime() / 1000;
					const now = Date.now() / 1000;
					const elapsedTime = now - updatedAt;
					updatedPosition = media_position + elapsedTime;
					percentage = (updatedPosition / media_duration) * 100;
				} else if (stateObj.state === 'paused') {
					// Calculating progress percentage when media is paused
					percentage = (media_position / media_duration) * 100;
				}
				// Updating properties
				this.progress = Math.min(percentage.toFixed(1), 100);
				this.mediaPosition = updatedPosition;
				this.mediaDuration = media_duration;
				this.requestUpdate(); // Requesting update to render changes
			}
			this._animationFrameId = requestAnimationFrame(updateProgress); // Scheduling next frame update
		};
		this._animationFrameId = requestAnimationFrame(updateProgress); // Starting the update loop
	}
	// Method to format time in MM:SS format
	_formatTime(seconds) {
		const pad = (num) => num.toString().padStart(2, '0');
		const minutes = pad(Math.floor(seconds / 60));
		const secondsLeft = pad(Math.floor(seconds % 60));
		return `${minutes}:${secondsLeft}`;
	}

	_renderMediaInfo() {
		const stateObj = this.hass.states[this._config.entity];
		const mediaTitle = stateObj ? stateObj.attributes.media_title : 'Unknown';
		const mediaArtist = stateObj ? stateObj.attributes.media_artist : 'Unknown';
		const isPlaying = stateObj && stateObj.state === 'playing';

		return html`
			<div id="mediaInfo" class="metadata">
				<h2 id="mediaTitle" style="text-wrap:${!isPlaying ? 'pretty' : ''};" class="media-title">
					<span>${mediaTitle}</span>
				</h2>
				<p>${mediaArtist}</p>
			</div>
		`;
	}

	_renderControls() {
		const stateObj = this.hass.states[this._config.entity];
		const isPlaying = stateObj && stateObj.state === 'playing';

		return html`
			<div class="controls">
				<button
					id="prevBtn"
					class="control-btn"
					@click=${() => {
						this._serviceCmd('media_previous_track');
					}}
				>
					${prevBtn}
				</button>
				<button
					id="playPauseBtn"
					class=" control-btn ${isPlaying ? 'playing' : ''}"
					@click=${() => this._serviceCmd('media_play_pause')}
				>
					<span class="play"></span>
					<span class="pause"></span>
				</button>
				<button
					id="nextBtn"
					class="control-btn"
					@click=${() => this._serviceCmd('media_next_track')}
				>
					${nextBtn}
				</button>
			</div>
		`;
	}

	_renderProgresBar() {
		const stateObj = this.hass.states[this._config.entity];
		this.volume =
			stateObj && stateObj.attributes.volume_level ? stateObj.attributes.volume_level * 100 : 50;
		// Extracting media position and duration
		const mediaPosition = stateObj ? stateObj.attributes.media_position : 0;
		const mediaDuration = stateObj ? stateObj.attributes.media_duration : 0;
		const formattedPosition = this._formatTime(this.mediaPosition); // Format media position
		const formattedDuration = this._formatTime(mediaDuration); // Format media duration

		return html`
			<div class="progress-info">
				<span>${formattedPosition}</span>
				<div class="progress-bar">
					<div id="progress" style="width: ${this.progress}%;"></div>
				</div>
				<span>${formattedDuration}</span>
			</div>
		`;
	}

	_renderVolumeSlider() {
		const stateObj = this.hass.states[this._config.entity];
		this.volume =
			stateObj && stateObj.attributes.volume_level ? stateObj.attributes.volume_level * 100 : 50;

		return html`
			<div class="volume-input">
				<button id="volumeMinus" @click=${() => this._serviceCmd('volume_down')}>
					${volumeMinus}
				</button>
				<input
					class="slider"
					type="range"
					min="0"
					max="100"
					.value="${Math.round(this.volume)}"
					@input="${this.handleVolumeChange}"
					style="--value: ${Math.round(this.volume)}%;"
				/>
				<button id="volumePlus" @click=${() => this._serviceCmd('volume_up')}>${volumePlus}</button>
				<p>${Math.round(this.volume)}</p>
			</div>
		`;
	}
	// Rendering method
	render() {
		if (!this._config) {
			return html``; // If Home Assistant instance or configuration is not available, render nothing
		}
		const stateObj = this.hass.states[this._config.entity];
		// If state object is not available, render an unknown entity message
		if (!stateObj) {
			return html` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
		}

		const isPlaying = stateObj && stateObj.state === 'playing';
		const entityImage = stateObj.attributes.entity_picture;
		let entityPicture = entityImage ? entityImage : '/local/img/idle_art.png';

		// Determine if media is playing
		this._setBackgroundVibrantColor();
		this._getAndLogMediaInfoWidth();

		// Rendering the media player card
		return html`
			<ha-card>
				<div id="my-media-player-card" class="music-player ${isPlaying ? 'music-active' : ''}">
					<div
						class="cover ${isPlaying ? 'cover-active' : ''}"
						style="background-image: url('${entityPicture}');"
					></div>
					<div class="content">${this._renderMediaInfo()} ${this._renderControls()}</div>
					<div class="bottom-bar progress-visible">
						${this._renderProgresBar()} ${this._renderVolumeSlider()}
						<div class="volumeBtn">
							<button id="volumeBtn" @click=${this.toggleVolumeControl}>${volumeBtn}</button>
						</div>
					</div>
				</div>
			</ha-card>
		`;
	}

	// Method to set configuration
	setConfig(config) {
		this._config = config;
	}

	// Method to get the size of the card
	getCardSize() {
		return 3;
	}

	toggleVolumeControl() {
		const bottomBar = this.shadowRoot.querySelector('.bottom-bar');
		bottomBar.classList.toggle('volume-visible');
		bottomBar.classList.toggle('progress-visible');
	}
	// Event handler to update the volume property when the slider value changes
	handleVolumeChange(event) {
		this.volume = event.target.value;
		this.updateVolume();
		console.log(this.volume);
	}
	// Method to handle updating the volume_level attribute of the media player
	updateVolume() {
		let level_input = this.volume / 100;
		this.hass.callService('media_player', 'volume_set', {
			entity_id: this._config.entity,
			volume_level: this.volume / 100, // Volume level should be between 0 and 1
		});
	}

	// Method to get the width of the mediaInfo div and log it to the console
	_getAndLogMediaInfoWidth() {
		const stateObj = this.hass.states[this._config.entity];
		// Determine if media is playing
		const isPlaying = stateObj && stateObj.state === 'playing';
		const mediaInfoDiv = this.shadowRoot.getElementById('mediaInfo');
		const mediaTitle = this.shadowRoot.getElementById('mediaTitle');
		if (mediaInfoDiv && mediaTitle) {
			const mediaInfoWidth = mediaInfoDiv.clientWidth;
			const mediaTitleWidth = mediaTitle.clientWidth;
			if (mediaInfoWidth < mediaTitleWidth) {
				mediaTitle.classList.add('marquee', 'span');
				// Calculate animation speed
				const animationSpeed = (mediaTitleWidth / mediaInfoWidth) * 10;
				// Set animation speed as a CSS variable
				mediaTitle.style.setProperty('--speed', animationSpeed + 's');
			} else {
				mediaTitle.classList.remove('marquee', 'span');
				// Reset animation speed
				mediaTitle.style.removeProperty('--speed');
			}
		}
	}

	_setBackgroundVibrantColor() {
		const stateObj = this.hass.states[this._config.entity];
		// Determine if media is playing
		const isPlaying = stateObj && stateObj.state === 'playing';
		const entityImage = stateObj.attributes.entity_picture;
		const entityPicture = entityImage ? entityImage : '/local/img/idle_art.png';
		// Check if entityPicture has changed
		if (entityPicture !== this._lastEntityPicture) {
			this._lastEntityPicture = entityPicture; // Update the last entityPicture
			if (isPlaying && entityPicture) {
				extractColorsFromImage(entityPicture).then((colors) => {
					// Assign individual colors to constants
					const vibrantColorHex = colors.vibrant ? colors.vibrant.hex : '';
					const vibrantColorRgb = colors.vibrant ? colors.vibrant.rgb.join(', ') : '';
					const mutedColorHex = colors.muted ? colors.muted.hex : '';
					const mutedColorRgb = colors.muted ? colors.muted.rgb.join(', ') : '';
					const darkVibrantColorHex = colors.darkVibrant ? colors.darkVibrant.hex : '';
					const darkVibrantColorRgb = colors.darkVibrant ? colors.darkVibrant.rgb.join(', ') : '';
					const darkMutedColorHex = colors.darkMuted ? colors.darkMuted.hex : '';
					const darkMutedColorRgb = colors.darkMuted ? colors.darkMuted.rgb.join(', ') : '';
					const lightVibrantColorHex = colors.lightVibrant ? colors.lightVibrant.hex : '';
					const lightVibrantColorRgb = colors.lightVibrant
						? colors.lightVibrant.rgb.join(', ')
						: '';
					const lightMutedColorHex = colors.lightMuted ? colors.lightMuted.hex : '';
					const lightMutedColorRgb = colors.lightMuted ? colors.lightMuted.rgb.join(', ') : '';

					// Update the style attribute with the extracted colors
					const playerCard = this.shadowRoot.querySelector('.music-player');
					playerCard.style.setProperty('--vibrantColorHex', vibrantColorHex);
					playerCard.style.setProperty('--vibrantColorRgb', vibrantColorRgb);
					playerCard.style.setProperty('--mutedColorHex', mutedColorHex);
					playerCard.style.setProperty('--mutedColorRgb', mutedColorRgb);
					playerCard.style.setProperty('--darkVibrantColorHex', darkVibrantColorHex);
					playerCard.style.setProperty('--darkVibrantColorRgb', darkVibrantColorRgb);
					playerCard.style.setProperty('--darkMutedColorHex', darkMutedColorHex);
					playerCard.style.setProperty('--darkMutedColorRgb', darkMutedColorRgb);
					playerCard.style.setProperty('--lightVibrantColorHex', lightVibrantColorHex);
					playerCard.style.setProperty('--lightVibrantColorRgb', lightVibrantColorRgb);
					playerCard.style.setProperty('--lightMutedColorHex', lightMutedColorHex);
					playerCard.style.setProperty('--lightMutedColorRgb', lightMutedColorRgb);
				});
			}
		}
	}
	// Method to handle media control commands
	_serviceCmd(service_type) {
		console.log(service_type);
		this.hass.callService('media_player', service_type, { entity_id: this._config.entity });
		setTimeout(() => {
			const mediaTitle = this.shadowRoot.getElementById('mediaTitle');
			const mediaInfoWidth = this.shadowRoot.getElementById('mediaInfo').clientWidth;
			const mediaTitleWidth = this.shadowRoot.getElementById('mediaTitle').clientWidth;
			console.log('title:', mediaTitleWidth, 'info:', mediaInfoWidth);
		}, 1000);
	}
}

// Registering the custom element
customElements.define('my-media-player-card', MyMediaPlayerCard);
console.info('My Media Player loaded');
