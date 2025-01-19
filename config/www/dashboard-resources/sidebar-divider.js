customElements.whenDefined('ha-sidebar').then(() => {
	const Sidebar = customElements.get('ha-sidebar');

	// Extend the `firstUpdated` method
	const originalFirstUpdated = Sidebar.prototype.firstUpdated;
	Sidebar.prototype.firstUpdated = function () {
		// Call the original `firstUpdated` if it exists
		if (originalFirstUpdated) {
			originalFirstUpdated.call(this);
		}

		const sidebar = this.shadowRoot.querySelector('paper-listbox.ha-scrollbar');
		const spacer = sidebar.querySelector('.spacer');
		const logs = sidebar.querySelector('a[data-panel="config/logs"]');
		const supervisor = sidebar.querySelector('a[data-panel="hassio/system/info"]');

		if (spacer && logs && supervisor) {
			// Insert logs after spacer
			if (spacer.nextSibling) {
				sidebar.insertBefore(logs, spacer.nextSibling);
			} else {
				sidebar.appendChild(logs); // If no nextSibling, append it to the end
			}

			// Insert supervisor after logs
			if (logs.nextSibling) {
				sidebar.insertBefore(supervisor, logs.nextSibling);
			} else {
				sidebar.appendChild(supervisor); // If no nextSibling, append it to the end
			}
		}

		const divider = this.shadowRoot.querySelector('div.divider');
		const media = sidebar.querySelector('a[data-panel="media-browser"]');
		const addons = sidebar.querySelector('a[data-panel="hassio/dashboard"]');
		if (divider && media && addons) {
			const style = document.createElement('style');
			style.textContent = `
						div.divider::before {
							background-color: rgba(138, 140, 153, 0.2);
						}
					`;
			let dividerCopy = divider.cloneNode(true);
			dividerCopy.appendChild(style);
			sidebar.insertBefore(dividerCopy.cloneNode(true), addons);
			sidebar.insertBefore(dividerCopy.cloneNode(true), media);
		}

		console.info('Sidebar divider added successfully');
	};
});
