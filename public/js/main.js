'use strict';

var zekas = 'zekas';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
	_classCallCheck(this, Person);

	this.name = name;
};

var obj = {
	name: 'zekas',
	age: 27
};

var name = obj.name;


function go() {
	for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
		vals[_key] = arguments[_key];
	}

	console.log(typeof vals === 'undefined' ? 'undefined' : _typeof(vals));
}

go(1, 2, 3);
console.log(new Person(), zekas, name);
