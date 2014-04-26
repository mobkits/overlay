# Overlay

A simple overlay forked from [Yuehu](http:s//yuehu.github.com).

Showcase at <http://chemzqm.github.io/overlay/>.

## Installation

Install with [component(1)](http://component.io):

    $ component install chemzqm/overlay

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
