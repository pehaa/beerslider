![Travis (.org)](https://img.shields.io/travis/pehaa/beerslider.svg?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/pehaa/beerslider.svg?style=for-the-badge)
![Github file size](https://img.shields.io/github/size/pehaa/beerslider/dist/BeerSlider.js.svg?style=for-the-badge)

# BeerSlider

## A vanilla JavaScript accessible before-after slider


### Demo
You can find [the demo here](https://pepsized.com/wp-content/uploads/2018/09/beerslider/demo/index.html).

## How?


## Installation

The ```dist``` folder contains the ready for production minified files: ```BeerSlider.js``` and ```BeerSlider.css```
```html
<head>
  ...
  <link rel="stylesheet" href="dist/BeerSlider.css">
</head>
<body>
  
  <!-- Bottom of body -->
  <script src="dist/BeerSlider.js"></script>
  <script>
    new BeerSlider(document.getElementById('slider'));
  </script>
</body>
```

You can also use the cdn solution
```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/beerslider/dist/BeerSlider.css">
</head>
<body>
  
  <!-- Bottom of body -->
  <script src="https://unpkg.com/beerslider/dist/BeerSlider.js"></script>
  <script>
    new BeerSlider(document.getElementById('slider'));
  </script>
</body>
```


#### npm:
```bash
npm install beerslider
```

## Usage:

The basic markup is:

```html
<div id="slider" class="beer-slider" data-beer-label="before">
  <img src="../demo-assets/images/dogs-before.jpg" alt="">
  <div class="beer-reveal" data-beer-label="after">
    <img src="../demo-assets/images/dogs-after.jpg" alt="">
  </div>
</div>
```
The data-beer-labels are optional, you can leave them empty or do not add them at all.

To activate the slider add the following:
```js
new BeerSlider(document.getElementById('slider'));
```

### Customization

You can initiate BeerSlider with some options, the available options are:
```js
{
  // start value
  start: '50',
  // prefix 
  prefix: 'beer'
}
```
### Use with jQuery or Zepto

If you use jQuery or Zepto in your project and have a few before-after sliders on your page, you can do something like that:
```html
<script>
  $.fn.BeerSlider = function ( options ) {
    options = options || {};
    return this.each(function() {
      new BeerSlider(this, options);
    });
  };
  $('.beer-slider').BeerSlider({start: 25});
</script>
```
or:
```html
<script>
  $.fn.BeerSlider = function ( options ) {
    options = options || {};
    return this.each(function() {
      new BeerSlider(this, options);
    });
  };
  $('.beer-slider').each( (function( index, el ) {
    $(el).BeerSlider({start: $(el).data('beer-start')})
  });
</script>
```
with:
```html
<div id="beer-slider" class="beer-slider" data-beer-label="before" data-beer-start="25">
  <img src="man-hold-beer.jpg" alt="Original - Man holding beer">
  <div class="beer-reveal" data-beer-label="after">
    <img src="man-hold-beer-after.jpg" alt="Processed - Man holding beer">
  </div>
</div>
<div id="beer-slider2" class="beer-slider" data-beer-label="before" data-beer-start="75">
  <img src="man-hold-beer.jpg" alt="Original - Man holding beer">
  <div class="beer-reveal" data-beer-label="after">
    <img src="man-hold-beer-after.jpg" alt="Processed - Man holding beer">
  </div>
</div>
``` 
A Codepen demo using jQuery is available [here,](https://codepen.io/pehaa/pen/PdJqPE)
and Zepto [here.](https://codepen.io/pehaa/pen/EebMgg)
