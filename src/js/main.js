var header = require('./header');
var stars = require('./stars');
var scroll = require('./scroll');
var showPotter = require('./potter');

window.addEventListener('DOMContentLoaded', function(){
	stars();
	scroll.scroll()
	header.headerTextSlider();
	header.headerNav();
	document.getElementById('showPotter').onclick = showPotter
});

window.addEventListener('scroll', scroll.up)
