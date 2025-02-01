// Description: This file is used to modify css of Home Assistant UI.

// CHANGE SCROLLBAR COLOR
function changeScrollbarColor() {
	// Define your CSS as a string
	const css = `
		html {
				scrollbar-color: #7080908E #FFFFFF00;
		}
		::-webkit-scrollbar-track {
				background: #FFFFFF00;
		}
		::-webkit-scrollbar {
				width: 10px;
		}
		::-webkit-scrollbar-thumb {
				background: #7080908E;
				width: 5px;
		}
	`;

	// Create a new style element
	const style = document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
	console.log('Scrollbar color changed');
}

changeScrollbarColor();

// TEMPLATE EDITOR MODIFICATION EXPANDED WIDTH
customElements.whenDefined('developer-tools-template').then(() => {
	const TemplatePanel = customElements.get('developer-tools-template');
	const { html, css } = TemplatePanel.prototype;

	// defined added style
	const newStyle = css`
		.content.horizontal {
			--code-mirror-max-height: calc(100vh - 410px);
			max-height: calc(var(--code-mirror-max-height) + 150px);
		}
		.content.horizontal > * {
			width: 50%;
			margin-bottom: 0px;
		}
		.rendered {
			overflow: auto;
			max-height: calc(var(--code-mirror-max-height) - 30px);
		}
	`;

	const newStyles = [].concat(TemplatePanel.styles, newStyle);
	Object.defineProperty(TemplatePanel, 'styles', {
		value: newStyles,
		configurable: true,
		enumerable: false,
	});
	Object.defineProperty(TemplatePanel, 'elementStyles', {
		value: newStyles,
		configurable: true,
		enumerable: false,
	});
});

// DEVICE PAGE MODIFICATION EXPANDED WIDTH
customElements.whenDefined('ha-config-device-page').then(() => {
	const DevicePage = customElements.get('ha-config-device-page');
	const { html, css } = DevicePage.prototype;

	const newStyle = css`
		hass-subpage > .container {
			max-width: fit-content;
		}
	`;

	const newStyles = [].concat(DevicePage.styles, newStyle);
	Object.defineProperty(DevicePage, 'styles', {
		value: newStyles,
		configurable: true,
		enumerable: false,
	});
	Object.defineProperty(DevicePage, 'elementStyles', {
		value: newStyles,
		configurable: true,
		enumerable: false,
	});
});

// QUICK BAR MODIFICATION VERTICAL CENTER
customElements.whenDefined('ha-quick-bar').then(() => {
	const TemplatePanel = customElements.get('ha-quick-bar');
	const { html, css } = TemplatePanel.prototype;

	// defined added style
	const newStyle = css`
		@media (min-width: 800px) {
			ha-dialog {
				--mdc-dialog-max-width: 800px;
				--mdc-dialog-min-width: 500px;
				--dialog-surface-position: relative;
				--dialog-surface-top: 0;
				--mdc-dialog-max-height: calc(100% - 72px);
				--mdc-text-field-fill-color: rgba(34, 38, 39, 0.6);
				--mdc-theme-surface: rgba(34, 38, 39, 0.6);
			}
		}
	`;

	const newStyles = [].concat(TemplatePanel.styles, newStyle);
	Object.defineProperty(TemplatePanel, 'styles', {
		value: newStyles,
		configurable: true,
		enumerable: false,
	});
	Object.defineProperty(TemplatePanel, 'elementStyles', {
		value: newStyles,
		configurable: true,
		enumerable: false,
	});
});
