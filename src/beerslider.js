export class BeerSlider {

    constructor (element, {start = '50', prefix = 'beer'} = {}) {
        this.start = parseInt(start) ? Math.min(100, Math.max(0, parseInt(start))) : 50
        this.prefix = prefix
        if (!element || element.children.length !== 2) {
            return
        }
        this.element = element
        this.revealContainer = this.element.children[1]
        if (this.revealContainer.children.length < 1) {
            return
        }
        this.revealElement = this.revealContainer.children[0]
        this.range = this.addElement('input', {
            type: 'range',
            class: `${this.prefix}-range`,
            'aria-label': 'Percent of revealed content',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            'aria-valuenow': this.start,
            value: this.start,
            min: '0',
            max: '100'
        })
        this.handle = this.addElement('span', {
            class: `${this.prefix}-handle`
        })
        this.onImagesLoad()
    }
    init () {
        this.element.classList.add(`${this.prefix}-ready`)
        this.setImgWidth()
        this.move()
        this.addListeners()
    }
    loadingImg (src) {
        return new Promise( (resolve, reject) => {
            if (!src) {
                resolve()
            }
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => reject()
            img.src = src
        })
    }
    loadedBoth () {
        const mainImageSrc = this.element.children[0].src || this.element.children[0].getAttribute(`data-${this.prefix}-src`)
        const revealImageSrc = this.revealElement.src || this.revealElement.getAttribute(`data-${this.prefix}-src`)
        return Promise.all([this.loadingImg(mainImageSrc), this.loadingImg(revealImageSrc)])
    }
    onImagesLoad () {
        if ( !this.revealElement ) {
            return
        }
        this.loadedBoth().then( 
            () => {
                this.init()
            },
            () => {
                console.error('Some errors occurred and images are not loaded.')
            }
        )
    } 
    addElement (tag, attributes) {
        const el = document.createElement(tag)
        Object.keys(attributes).forEach( (key) => {
            el.setAttribute(key, attributes[key])
        })
        this.element.appendChild(el)
        return el
    }
    setImgWidth () {
        this.revealElement.style.width = getComputedStyle(this.element)['width']
    }
    addListeners () {
        const eventTypes = ['input', 'change']
        eventTypes.forEach( (i) => {
            this.range.addEventListener( i, () => {this.move()} )
        })
        window.addEventListener('resize', () => {this.setImgWidth()})
    }
    move () {
        this.revealContainer.style.width = `${this.range.value}%`
        this.handle.style.left = `${this.range.value}%`
        this.range.setAttribute('aria-valuenow', this.range.value)
    }
}
