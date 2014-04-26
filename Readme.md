# Overlay

A simple overlay for Yuehu.

Showcase at <http://yuehu.github.io/overlay/>.

## Installation

Install with [component(1)](http://component.io):

    $ component install yuehu/overlay

## API

```js
var Overlay = require('overlay');
var el = document.getElementById('overlay-html');
var o = new Overlay(el);
```
### new Overlay(el)

Init Overlay with `el` as body.

### .show()

Show overlay.

### .hide()

Hide overlay.


## License

MIT
