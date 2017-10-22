var header = require('./header.js');
var stars = require('./stars.js');
var scroll = require('./scroll.js')

window.addEventListener('load', function(){
	// stars();
	scroll()
	header.headerTextSlider();
	header.headerNav()
});