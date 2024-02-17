class IframeFullscreen extends HTMLElement {
	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: 'open' });
	}
	render() {
		this._shadow.innerHTML =
			`<style include="ha-style">
        iframe {
          border: 0;
          width: 100%;
          height: calc(100% - 8px);
          background-color: var(--primary-background-color);
        }
      </style>
      <iframe
        src="` +
			this._config.url +
			`"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>`;
	}
	set panel(panel) {
		this._config = panel.config;
		this.render();
	}
}
customElements.define('iframe-fullscreen', IframeFullscreen);
