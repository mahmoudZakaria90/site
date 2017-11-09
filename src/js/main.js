var header = require('./header.js');
var stars = require('./stars.js');
var scroll = require('./scroll.js');
var showPotter = require('./potter.js');

window.addEventListener('DOMContentLoaded', function(){
	stars();
	scroll()
	header.headerTextSlider();
	header.headerNav();
	document.getElementById('showPotter').onclick = showPotter
});
