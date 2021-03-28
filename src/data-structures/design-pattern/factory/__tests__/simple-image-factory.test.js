const {createImage, Image} = require('../simple-factory')

describe('Image Factory', () => {
	it('should create a new instance of Image', () => {
		const ImageInstance = createImage('jpg')

		expect(ImageInstance).toBeInstanceOf(Image)
	})
})
