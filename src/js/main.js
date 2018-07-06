var header = require('./header');
var stars = require('./stars');
var scroll = require('./scroll');
var showPotter = require('./potter');


function updateDate() {
	document.getElementById('date').innerHTML = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', function(){
	stars();
	scroll.scroll()
	header.headerTextSlider();
	header.headerBurgerInit();
	updateDate();
	document.getElementById('showPotter').onclick = showPotter
});

window.addEventListener('scroll', scroll.up)
window.addEventListener('scroll', header.headerNav)
window.addEventListener('DOMContentLoaded', header.headerNav)
