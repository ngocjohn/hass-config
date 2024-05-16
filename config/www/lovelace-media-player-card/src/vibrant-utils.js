// Function to extract colors from an image URL
export const extractColorsFromImage = async (imageUrl) => {
	try {
		// Create a Vibrant object from the image URL
		const vibrant = await Vibrant.from(imageUrl).getPalette();

		// Return the extracted colors with RGB values
		const colors = {
			vibrant: {
				hex: vibrant.Vibrant.getHex(),
				rgb: vibrant.Vibrant.getRgb(),
			},
			muted: {
				hex: vibrant.Muted.getHex(),
				rgb: vibrant.Muted.getRgb(),
			},
			darkVibrant: {
				hex: vibrant.DarkVibrant.getHex(),
				rgb: vibrant.DarkVibrant.getRgb(),
			},
			darkMuted: {
				hex: vibrant.DarkMuted.getHex(),
				rgb: vibrant.DarkMuted.getRgb(),
			},
			lightVibrant: {
				hex: vibrant.LightVibrant.getHex(),
				rgb: vibrant.LightVibrant.getRgb(),
			},
			lightMuted: {
				hex: vibrant.LightMuted.getHex(),
				rgb: vibrant.LightMuted.getRgb(),
			},
		};

		return colors;
	} catch (error) {
		return '';
	}
};
