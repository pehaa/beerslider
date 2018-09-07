![Travis (.org)](https://img.shields.io/travis/pehaa/beerslider.svg?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/pehaa/beerslider.svg?style=for-the-badge)
![Github file size](https://img.shields.io/github/size/pehaa/beerslider/dist/BeerSlider.js.svg?style=for-the-badge)

# BeerSlider

## A vanilla JavaScript accessible before-after slider


### Demo
You can find [the demo here](https://pepsized.com/wp-content/uploads/2018/09/index.html).

## How?


## Installation

The ```dist``` folder contains the ready for production minified files: ```BeerSlider.js``` and ```BeerSlider.css```
```html
<head>
  ...
  <link rel="stylesheet" href="dist/BeerSlider.css">
  <style>
    /* override styles here */
  </style>
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
  <style>
    /* override styles here */
  </style>
</head>
<body>
  <p class="notification" data-close="self">Self-closing notification</p>
  <p class="notification">
    This one needs user's action.
    <button class="delete" type="button">Close</button>
  </p>
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

The recommended markups for a notification are like that:

```html
<!-- self closing notification -->
<p class="notification" data-close="self">Self-closing notification</p>
<!-- or -->
<div class="notification" data-close="self">Self-closing notification</div>
<!-- notification with close button -->
<p class="notification">
  This one needs user's action.
  <button class="delete" type="button" >Close</button>
</p>
<!-- or -->
<div class="notification">
  This one needs user's action.
  <button class="delete"  type="button" aria-label="Close">Close</button>
</div>
```
You have to use the ```notification``` class since it's used in the .css file.
You need to add the ```data-close="self"``` attribute to your notification if you want it to close automatically.

To activate the slider add the following:
```js
new BeerSlider(document.getElementById('slider'));
```
You can check it on Codepen [here.](https://codepen.io/pehaa/pen/zzzzxxxxxxF)

### Customization

You can initiate BeerSlider with some options, the available options are:
```js
{
  // start value
  startValue: '50',
  // prefix 
  prefix: 'beer'
}
```
#### Example:

A Codepen demo is available [here.](https://codepen.io/pehaa/pen/xxxxxxxx)
