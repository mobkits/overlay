require('../overlay.css')
var Overlay = require('..');
var el = document.getElementById('overlay-html');
document.getElementById('trigger').onclick = function() {
  var o = new Overlay(el);
}
