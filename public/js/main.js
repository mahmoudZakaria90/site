(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function headerTextSlider() {
	let el = document.querySelector('#headerTextSlider');
	let data = [
		'Talented, Innovater and a Seeker in the web industry',
		'Making noises in user interfaces',
		'All came by &hearts;'
	];

	function init(){
		el.innerHTML = `<span class="show">${data[0]}</span>`
		for (let i = 1; i < data.length; i++) {
			var temp = `<span>${data[i]}</span>`;
			el.innerHTML += temp;
		}

	};

	function slide() {
		init();
		let i = 0;
		let slider = setInterval(function(){
			i++;
			if(i == data.length){
				i = 0;
			}
			for (let i = 0; i < data.length; i++) {
				document.querySelectorAll('#headerTextSlider span')[i].className = '';	
			}
			document.querySelectorAll('#headerTextSlider span')[i].className = 'show';
		}, 5000)
	}
	slide();
};

module.exports = headerTextSlider;
},{}],2:[function(require,module,exports){
var stars = require('./stars.js');
var headerTextSlider = require('./header.js');

window.addEventListener('load', stars)
window.addEventListener('load', headerTextSlider)
},{"./header.js":1,"./stars.js":3}],3:[function(require,module,exports){
module.exports = function stars() {
	let len = Math.floor(window.innerWidth / 15) 
	console.log(len)
	for (let i = 0; i < len ; i++) {
		let star = document.createElement('div');
		star.className = 'star';
		document.querySelector('#starWrap').appendChild(star);
		let rand = Math.floor(Math.random() * window.innerWidth)
		let rand2 = Math.floor(Math.random() * window.innerWidth)
		star.style.top = rand + 'px'
		star.style.left = rand2 + 'px'
		star.style.animationDelay = (rand / i) / 15 + 's'
	}
}
},{}]},{},[2]);
