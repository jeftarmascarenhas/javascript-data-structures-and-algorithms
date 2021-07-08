class Image {}


class PNGImage extends Image {}

class JPGImage extends Image {}

class GIFImage extends Image {}

/*
 * More complext Factory example where a class is created based on a dynamic value
 */

function createImage(type) {
	const supoortedImageTypes = {
		jpg: JPGImage,
		png: PNGImage,
		gif: GIFImage,
	}

	return new (supoortedImageTypes[type] || Image)()
}

module.exports = {
	createImage,
	Image,
}
