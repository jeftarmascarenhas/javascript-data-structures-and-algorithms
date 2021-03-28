const {createImage, Image} = require('../advanced-image-factory')


describe('Advanced Test Factory', () => {
	it('shoult create an instance of Image given the type is not supported', () => {
		const ImagaInstance = createImage('bmp')
		expect(ImagaInstance).toBeInstanceOf(Image)
	})

	it('shoult create an instance of JPG given the type is jpg', () => {
		const ImagaInstance = createImage('jpg')
		expect(ImagaInstance).toBeInstanceOf(Image)
	})

	it('shoult create an instance of Image given the type is png', () => {
		const ImagaInstance = createImage('png')
		expect(ImagaInstance).toBeInstanceOf(Image)
	})


	it('shoult create an instance of Image given the type is gif', () => {
		const ImagaInstance = createImage('gif')
		expect(ImagaInstance).toBeInstanceOf(Image)
	})

})
