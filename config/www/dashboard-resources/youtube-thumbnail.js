class YouTubeThumbnailUpdater {
	constructor(imageId) {
		this.imageId = imageId;
		this.imageElement = document.getElementById(this.imageId);

		// Initialize the image href
		this.updateImageHref();

		// Subscribe to changes in the 'data-url' attribute
		this.observeDataUrlAttribute();
	}

	updateImageHref() {
		const dataUrl = this.imageElement.getAttribute('data-url');
		if (dataUrl && this.isValidUrl(dataUrl)) {
			this.imageElement.setAttribute('href', dataUrl);
		}
	}

	observeDataUrlAttribute() {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'data-url') {
					this.updateImageHref();
				}
			});
		});

		observer.observe(this.imageElement, {
			attributes: true,
			attributeFilter: ['data-url'],
		});
	}

	isValidUrl(url) {
		// A simple check to validate if the URL starts with "http://" or "https://"
		return /^https?:\/\//.test(url);
	}
}

// Usage: Create an instance of YouTubeThumbnailUpdater
const youtubeThumbnailUpdater = new YouTubeThumbnailUpdater('atv_youtube_img');
