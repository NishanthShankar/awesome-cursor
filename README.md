
# Awesome Cursor

<!-- ![npm bundle size][minsize-url] -->
![GitHub file size in bytes][filesize-url]
![jsDelivr hits (npm)][jsdelivr-url]

> Change your website cursor to a modern circle cursor. Make it snap to elements

## Installation


### `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/awesome-cursor/dist.min.js"></script>
```
 
 or

```
npm install awesome-cursor --save
yarn add awesome-cursor
bower install awesome-cursor --save
```

### Node

```javascript
require('aweomse-cursor')
import 'awesome-cursor'
```

## Why?

This lightweight module allows you to change the cursor to a circular cursor. It also snaps to elements defined by you on hover. Making a snappable element is as simple as adding a class. The cursor understands height, width and border-radius properties. Other property mappings and customizations coming soon. 

## Usage

* `.ac-button` Add this class to your div to make the cursor snap around it
* `.ac-text` Add this class to your span or input to make the cursor change into a text cursor
* `ac-text` nested inside `ac-button` does not work well
* `cursor: default values` You can still use default cursor values. Like show pointer to show pointer cursor over this

Examples:

```html
<div class="btn ac-button">
  <span>Click Me</span>
</div>
```

```html
<span class="title ac-text">This the is selectable</span>
```
```html
<input class="input ac-text">Click here to enter text</span>
```

## License

MIT

[filesize-url]: https://img.shields.io/github/size/NIshanthShankar/awesome-cursor/dist.min.js?style=for-the-badge
[minsize-url]: https://img.shields.io/bundlephobia/min/awesome-cursor?style=for-the-badge
[jsdelivr-url]: https://img.shields.io/jsdelivr/npm/hm/awesome-cursor?style=for-the-badge

