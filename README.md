[![NPM][npm]][npm-url]
[![Tests][build]][build-url]
[![Deps][deps]][deps-url]
[![Coverage][cover]][cover-url]
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/vuejs/awesome-vue#component-collections)

<div align="center">
  <a href="https://github.com/nicholaslee119/carbon-components-vue">
    <img  src="https://github.com/nicholaslee119/carbon-components-vue/blob/master/CarvueLogo.png">
  </a>
</div>  

# Introduction

> Carvue is a UI components library which is based on [Carbon-Design](http://www.carbondesignsystem.com/) and [VueJS](https://vuejs.org/) with ❤️ and Proud to be a [vue-awesome](https://github.com/vuejs/awesome-vue#component-collections)  🎉

## Installation

``` bash
# npm
npm install carvue
```

``` bash
# yarn
yarn add carvue
```

## Usage

### webpack
```javascript
import Vue from 'vue'
import Carvue from 'carvue'
import 'carvue/dist/carvue.min.css'

Vue.use(Carvue)
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/carvue/dist/build.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/carvue/dist/carvue.min.css"></link>
```

You could view available Vue Components in this [Demo](https://nicholaslee119.github.io/carbon-components-vue/storybook-static/). 

And you could view usage detail in the bottom panel


## Development

### Using the server

We recommend the use of Stroybook for developing components

1. Start the server

```bash
npm run storybook
```

2. Open your browser to `http://localhost:6006`

3. Develop compponents in their respective folders (`/components`)

4. Write stories for your components in `/stories`

5. Build

```bash
npm run build
```



[npm]: https://img.shields.io/npm/v/carvue.svg
[npm-url]: https://www.npmjs.com/package/carvue

[deps]: https://david-dm.org/nicholaslee119/carbon-components-vue/dev-status.svg
[deps-url]: https://david-dm.org/nicholaslee119/carbon-components-vue?type=dev

[cover]: https://coveralls.io/repos/github/nicholaslee119/carbon-components-vue/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/nicholaslee119/carbon-components-vue?branch=master


[build]: https://travis-ci.org/nicholaslee119/carbon-components-vue.svg?branch=master
[build-url]: https://travis-ci.org/nicholaslee119/carbon-components-vue
