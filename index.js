var events = require('event');
var classes = require('classes');
var hasTouch = 'ontouchend' in window;

function create(tag, className) {
  var el = document.createElement(tag);
  el.className = className;
  return el;
}
var body = document.body;

var el = create('div', 'overlay');
el._class = classes(el);

var close = create('a', 'overlay-close');
close.innerHTML = '×';
close.setAttribute('href', '#');
el.appendChild(close);

var container = create('div', 'overlay-container');
el.appendChild(container);

events.bind(document, 'DOMContentLoaded', function () {
  body.appendChild(el);
  if (hasTouch) {
    events.bind(close, 'touchend', hide);
  } else {
    events.bind(close, 'click', hide);
  }
})

events.bind(document, 'keyup', function (e) {
  if (e.which === 27) {
    hide(e);
  }
})

function hide(e) {
  e.preventDefault();
  classes(body).remove('overlay-active');
}

function show() {
  classes(body).add('overlay-active');
}

function clean(node) {
  var el;
  while(node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

module.exports = function Overlay(el) {
  if (!(this instanceof Overlay)) return new Overlay(el);
  clean(container);
  container.appendChild(el);
  this.show = show;
  this.hide = hide;
}

