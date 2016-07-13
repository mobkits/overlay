var classes = require('classes')
var events = require('events')
var body = document.body

function create(tag, className) {
  var el = document.createElement(tag)
  el.className = className
  return el
}

function Overlay(el) {
  if (!(this instanceof Overlay)) return new Overlay(el)
  var root = this.el = create('div', 'overlay')
  body.appendChild(root)
  var close = create('a', 'overlay-close')
  close.innerHTML = '×'
  close.setAttribute('href', '#')
  root.appendChild(close)
  var container = create('div', 'overlay-container')
  container.appendChild(el)
  root.appendChild(container)
  this.events = events(root, this)
  this.events.bind('click a.overlay-close', 'hide')
  this.docEvents = events(document, this)
  this.docEvents.bind('keyup')
  classes(body).add('overlay-active')
}

Overlay.prototype.onkeyup = function (e) {
  if (e.which === 27) {
    e.preventDefault()
    this.hide()
  }
}

Overlay.prototype.hide = function (e) {
  if (this._removed) return
  if (e) {
    e.preventDefault()
  }
  this._removed = true
  this.events.unbind()
  this.docEvents.unbind()
  classes(body).remove('overlay-active')
  var el = this.el
  setTimeout(function () {
    el.parentNode.removeChild(el)
  }, 200)
}

module.exports = Overlay
