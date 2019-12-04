(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function experience() {
  var startDate = 2014;
  var currentDate = new Date().getFullYear();
  return currentDate - startDate;
}

module.exports = function () {
  var el = document.querySelector("#heroTextSlider");
  var data = ["A Front-end developer with <strong>+" + experience() + "</strong> years of experience building websites and web apps.", "Thinking out of the box and seeking for knowledge is my vision.", 'For hiring, <a href="mailto:m.zakria90@gmail.com">m.zakria90@gmail.com</a>'];

  function init() {
    el.innerHTML = "<span class=\"show\">" + data[0] + "</span>";
    for (var i = 1; i < data.length; i++) {
      var temp = "<span>" + data[i] + "</span>";
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
        document.getElementById("heroTextSlider").children[_i].className = "";
      }
      document.getElementById("heroTextSlider").children[i].className = "show";
    }, 5000);
  }
  slide();
};

},{}],2:[function(require,module,exports){
"use strict";

var header = require("./header");

function updateDate() {
  document.getElementById("date").innerHTML = new Date().getFullYear();
}

window.addEventListener("DOMContentLoaded", function () {
  header();
  updateDate();
});

},{"./header":1}]},{},[2]);
