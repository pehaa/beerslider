import BeerSlider from './../../src/index.js'

const htmlToTest = document.querySelector('body')
const innerHTML = `<div id="slider1" class="beer-slider beer-slider-wlabels" data-beer-label="before">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          <div class="beer-reveal" data-beer-label="after">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          </div>
      </div>
    <div id="slider2" class="beer-slider beer-slider-wlabels" data-beer-label="before">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
        <div class="beer-reveal" data-beer-label="after">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/after.jpg">
        </div>
    </div>
    <div id="slider3" class="beer-slider beer-slider-wlabels" data-beer-label="before">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
        <div class="beer-reveal" data-beer-label="after">
        </div>
    </div>
    <div id="slider4" class="beer-slider beer-slider-wlabels" data-beer-label="before">
            <div data-beer-src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ></div>
        <div class="beer-reveal" data-beer-label="after">
            <div data-beer-src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></div>
        </div>
    </div>
    <div id="slider5" class="beer-slider beer-slider-wlabels" data-beer-label="before">
            <div></div>
        <div class="beer-reveal" data-beer-label="after">
            <div></div>
        </div>
    </div>`
describe( 'The Beerslider', () => {
    it('can be instatiated via constructor', () => {
        expect(
            () => { new BeerSlider() }).not.toThrow()
        expect(
            () => { new BeerSlider( document.getElementById('slider123')) }).not.toThrow()
        expect(
            () => { new BeerSlider( document.getElementById('slider1')) }).not.toThrow()
    })
    it('has a start property', () => {
        const beerslider = new BeerSlider()
        expect(beerslider.start).toBeDefined()
    })
    it('has a default value for start property equal to 50', () => {
        const beerslider = new BeerSlider()
        expect(beerslider.start).toEqual(50)
    })
    it('has a prefix property', () => {
        const beerslider = new BeerSlider()
        expect(beerslider.prefix).toBeDefined()
    })
    it('has a default value for prefix property equal "beer"', () => {
        const beerslider = new BeerSlider()
        expect(beerslider.prefix).toEqual('beer')
    })
    it('start and prefix can be overriden', () => {
        const beerslider = new BeerSlider(null, {prefix: 'ba', start: 25})
        expect(beerslider.prefix).toEqual('ba')
        expect(beerslider.start).toEqual(25)
    })
    it('min possible start property is 0', () => {
        const beerslider = new BeerSlider(null, {start: -59})
        expect(beerslider.start).toEqual(0)
    })
    it('max possible start property is 100', () => {
        const beerslider = new BeerSlider(null, {start: '120%'})
        expect(beerslider.start).toEqual(100)
    })
    it('should not accept invalid start option', () => {
        const beerslider = new BeerSlider(null, {start: 'left'})
        expect(beerslider.start).toEqual(50)
    })
})
describe( 'The Beerslider constructor on non specified or non existing element', () => {  
    it('should not have specified element property', () => {
        const beerslider = new BeerSlider()
        expect(beerslider.element).not.toBeDefined()
        const beerslider1 = new BeerSlider(document.getElementById('slider123'))
        expect(beerslider1.element).not.toBeDefined()
    })
})
describe( 'The Beerslider constructor on an existing element', () => {
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('should have specified element, revealContainer and revealElement properties', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        expect(beerslider.element).toBeDefined()
        expect(beerslider.revealContainer).toBeDefined()
        expect(beerslider.revealElement).toBeDefined()
        expect(beerslider.range).toBeDefined()
        expect(beerslider.handle).toBeDefined()
    })
    it('should not have revealElement property if revealContainer has no child', () => {
        const el = document.getElementById('slider3')
        const beerslider = new BeerSlider(el)
        expect(beerslider.element).toBeDefined()
        expect(beerslider.revealContainer).toBeDefined()
        expect(beerslider.revealElement).not.toBeDefined()
        expect(beerslider.range).not.toBeDefined()
        expect(beerslider.handle).not.toBeDefined()
    })
    it('have proper markup for range slider', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        expect(beerslider.range.tagName).toEqual('INPUT')
        expect(beerslider.range.type).toEqual('range')
        expect(beerslider.range.min).toEqual('0')
        expect(beerslider.range.max).toEqual('100')
        expect(beerslider.range.value).toEqual('50')
        expect(beerslider.range.getAttribute('aria-valuemin')).toEqual('0')
        expect(beerslider.range.getAttribute('aria-valuemax')).toEqual('100')
        expect(beerslider.range.getAttribute('aria-valuenow')).toEqual('50')

        expect(beerslider.range.getAttribute('class')).toContain('beer-range')
    })
    it('have proper markup for range slider if called with options', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el, {prefix: 'ba', start: 42})
        expect(beerslider.range.tagName).toEqual('INPUT')
        expect(beerslider.range.type).toEqual('range')
        expect(beerslider.range.min).toEqual('0')
        expect(beerslider.range.max).toEqual('100')
        expect(beerslider.range.value).toEqual('42')
        expect(beerslider.range.getAttribute('aria-valuemin')).toEqual('0')
        expect(beerslider.range.getAttribute('aria-valuemax')).toEqual('100')
        expect(beerslider.range.getAttribute('aria-valuenow')).toEqual('42')
        expect(beerslider.range.getAttribute('class')).toContain('ba-range')
    })
    it('have proper markup for handle', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        expect(beerslider.handle.tagName).toEqual('SPAN')
        expect(beerslider.handle.getAttribute('class')).toContain('beer-handle')
    })
    it('have proper markup for range slider if called with options', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el, {prefix: 'ba', start: 42})
        expect(beerslider.handle.getAttribute('class')).toContain('ba-handle')
    })
    it('should call the init method when images loaded', (done) => {
        spyOn(BeerSlider.prototype,'init')
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        beerslider.loadedBoth().then(() => {
            expect(beerslider.init).toHaveBeenCalled()
            done()
        })    
    })
    it('should call the init method when data-beer-src is found (slider does not use images)', (done) => {
        spyOn(BeerSlider.prototype,'init')
        const el = document.getElementById('slider4')
        const beerslider = new BeerSlider(el)
        beerslider.loadedBoth().then(() => {
            expect(beerslider.init).toHaveBeenCalled()
            done()
        })    
    })
    it('should call the init method when no src is found (slider does not use images)', (done) => {
        spyOn(BeerSlider.prototype,'init')
        const el = document.getElementById('slider5')
        const beerslider = new BeerSlider(el)
        beerslider.loadedBoth().then(() => {
            expect(beerslider.init).toHaveBeenCalled()
            done()
        })    
    })
    it('should not call the init method if images not loaded', (done) => {
        spyOn(BeerSlider.prototype,'init')
        spyOn(BeerSlider.prototype,'loadedBoth').and.returnValue(Promise.reject())
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        beerslider.loadedBoth().then(() => {
        },
        () => {
            expect(beerslider.init).not.toHaveBeenCalled()
            done()
        })    
    })
    it('should not call the init method if no element', () => {
        spyOn(BeerSlider.prototype,'init')
        const beerslider = new BeerSlider()
        expect(beerslider.init).not.toHaveBeenCalled()
    })
})
describe('', () => {
    it( '', () => {
        spyOn(BeerSlider.prototype,'loadedBoth')
        htmlToTest.innerHTML = innerHTML
        const el = document.getElementById('slider3')
        const beerslider = new BeerSlider(el)
        beerslider.onImagesLoad()
        expect(beerslider.revealElement).toBeFalsy()
        expect(beerslider.loadedBoth).not.toHaveBeenCalled()
    })  
})
describe('the loadingImg method', () => {
    it('should return a promise', () => {
        const beerslider = new BeerSlider()
        expect(beerslider.loadingImg()).toEqual(jasmine.any(Promise))
    })
})
describe('on init', () => {
    let el, beerslider
    beforeAll( () => {
        spyOn(BeerSlider.prototype,'setImgWidth')
        spyOn(BeerSlider.prototype,'move')
        spyOn(BeerSlider.prototype,'addListeners')
        spyOn(BeerSlider.prototype, 'loadingImg')
    })
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
        el = document.getElementById('slider1')
        beerslider = new BeerSlider(el)
        beerslider.init()
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('el should have beer-ready class', () => {
        expect(el.classList).toContain('beer-ready')
    })
    it('the setImgWidth method should be called', () => {
        expect(beerslider.setImgWidth).toHaveBeenCalled()
    })
    it('the move method should be called', () => {
        expect(beerslider.move).toHaveBeenCalled()
    })
    it('addListeners method should be called', () => {
        expect(beerslider.addListeners).toHaveBeenCalled()
    })
})
describe('The move method', () => {
    let beerslider
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
        const el = document.getElementById('slider1')
        beerslider = new BeerSlider(el)
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('should be defined', () => {
        expect(BeerSlider.prototype.move).toBeDefined()
    })
    it('should modify the revealContainer style property width', () => {        
        beerslider.range.value = 17
        beerslider.move()
        expect(beerslider.revealContainer.getAttribute('style')).toContain('width: 17%')
    })
    it('should modify the handle style property left', () => {
        beerslider.range.value = 17
        beerslider.move()
        expect(beerslider.handle.getAttribute('style')).toContain('left: 17%')
    })
    it('should modify the aria-valuenow attribure', () => {
        beerslider.range.value = 17
        beerslider.move()
        expect(beerslider.range.getAttribute('aria-valuenow')).toEqual('17')
    })
})
describe('The setImgWidth method', () => {
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('should be defined', () => {
        expect(BeerSlider.prototype.setImgWidth).toBeDefined()
    })
    it('should modify the revealElemet style property width', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        beerslider.element.style.width = '340px'
        beerslider.setImgWidth()
        expect(beerslider.revealElement.getAttribute('style')).toContain('width: 340px')
    })
})

describe('the window resize', () => {
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
        spyOn(BeerSlider.prototype, 'setImgWidth')
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('should call the setImgWidth method', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        beerslider.addListeners()
        window.dispatchEvent(new Event('resize'))
        expect(beerslider.setImgWidth).toHaveBeenCalled()
    })
})
describe('the change event on range slider', () => {
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
        spyOn(BeerSlider.prototype, 'move')
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('should call the move method', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        beerslider.addListeners()
        beerslider.range.dispatchEvent(new Event('change'))
        expect(beerslider.move).toHaveBeenCalled()
    })
})
describe('the input event on range slider', () => {
    beforeEach( () => {
        htmlToTest.innerHTML = innerHTML
        spyOn(BeerSlider.prototype, 'move')
    })
    afterEach( () => {
        htmlToTest.innerHTML = ''
    })
    it('should call the move method', () => {
        const el = document.getElementById('slider1')
        const beerslider = new BeerSlider(el)
        beerslider.addListeners()
        beerslider.range.dispatchEvent(new Event('input'))
        expect(beerslider.move).toHaveBeenCalled()
    })
})