var header = require('./header.js');
var stars = require('./stars.js');

window.addEventListener('load', function(){
	stars();
	header.headerTextSlider();
	header.headerNav()
});