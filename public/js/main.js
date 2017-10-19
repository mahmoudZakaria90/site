(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
	headerTextSlider: function headerTextSlider() {
		var el = document.querySelector('#headerTextSlider');
		var data = ['Talented, Innovator and a Seeker in the web industry', 'Making noises in user interfaces', 'Knowledge has no limit', 'If you can believe, you can achieve'];

		function init() {
			el.innerHTML = '<span class="show">' + data[0] + '</span>';
			for (var i = 1; i < data.length; i++) {
				var temp = '<span>' + data[i] + '</span>';
				el.innerHTML += temp;
			}
		}

		function slide() {
			init();
			var i = 0;
			var slider = setInterval(function () {
				i++;
				if (i == data.length) {
					i = 0;
				}
				for (var _i = 0; _i < data.length; _i++) {
					document.getElementById('headerTextSlider').children[_i].className = '';
				}
				document.getElementById('headerTextSlider').children[i].className = 'show';
			}, 5000);
		}
		slide();
	},
	headerNav: function headerNav() {
		var el = document.getElementById('headerNavWrap');
		function fixedBar() {
			if (window.pageYOffset >= el.offsetHeight) {
				el.classList.add('is-fixed');
			} else if (window.pageYOffset <= 0) {
				el.classList.remove('is-fixed');
			}
		}

		window.addEventListener('scroll', fixedBar);
	}
};

},{}],2:[function(require,module,exports){
'use strict';

var header = require('./header.js');
var stars = require('./stars.js');

window.addEventListener('load', function () {
	stars();
	header.headerTextSlider();
	header.headerNav();
});

},{"./header.js":1,"./stars.js":3}],3:[function(require,module,exports){
'use strict';

module.exports = function stars() {
	for (var i = 0; i < 50; i++) {
		var star = document.createElement('div');
		star.className = 'star';
		document.getElementById('starWrap').appendChild(star);
		var rand = Math.floor(Math.random() * window.innerWidth);
		var rand2 = Math.floor(Math.random() * window.innerWidth);
		star.style.top = rand + 'px';
		star.style.left = rand2 + 'px';
		star.style.animationDelay = rand / i / 20 + 's';
	}
};

},{}]},{},[2]);
