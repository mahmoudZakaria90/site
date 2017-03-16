(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Big object for all js work
var slider = require('./slider.js')
slider.sliderInit()
module.exports = {
	direction: function(){
	var doc = document.documentElement;
		var docLang = doc.getAttribute('lang');
		if (docLang == 'en'){
			doc.setAttribute('dir','ltr');
		}else{
			doc.setAttribute('dir','rtl');
		}
	},
	//burger
	burger: function(){
		var trigger = document.getElementsByClassName('header-burger');
		var triggerWrap = [];
		
		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i]);
		}

		triggerWrap.forEach(function(item){
			var parentTrigger = item.parentNode;
			var NextOfTrigger = parentTrigger.nextElementSibling;
			var state = false;
			item.onclick = function(){
				
				if(!state){
					state = true;
					NextOfTrigger.style.height = NextOfTrigger.scrollHeight + 'px';
					parentTrigger.classList.add('active');
				}else{
					state = false;
					NextOfTrigger.style.height = 0 + 'px';
					parentTrigger.classList.remove('active');
				}
			}
		})
	},
	
	//slider
	

	dropdown: function(type){
		var trigger = document.getElementsByClassName('header-dropdown');
		var triggerWrap = [];

		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i]);
		}
		triggerWrap.forEach(function(item){
			console.log(item)
			item.children[0].addEventListener(type, function(e){
				e.preventDefault()
			})
			item.addEventListener(type,function(e){
				
				if(item.className == "header-dropdown"){
					item.classList.add('active');
				}else if (item.className == "header-dropdown active"){
					item.classList.remove('active');
				}
				item.parentNode.parentNode.style.height = 'auto';// for responsive
			})
			document.body.addEventListener(type,function(){
					item.classList.remove('active');
			},true)
			
		})
	},

	//Dom Manipulation
	addClass: function(item,className){
		var el = document.querySelector(item);
		el.className += ' ' + className;
	},
	removeClass: function(item,className){
		var el = document.querySelector(item);
		el.classList.remove(className);
	},
	append: function(item,txt){
		var el = document.querySelector(item);
		el.innerHTML += txt;
	},
	before: function(item,target){
		var el = document.querySelector(item);
		var parentEl = el.parentNode;
		var tgt = document.querySelector(target);
		parentEl.insertBefore(el,tgt);
	},
	create: function(item,parent){
		var parentEl = document.querySelector(parent);
		var newEl = document.createElement(item);
		parentEl.appendChild(newEl);
	}
}


},{"./slider.js":3}],2:[function(require,module,exports){
//Custom .js

var gv = require("./give.js");


//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger();
	gv.sliderInit();
	gv.dropdown('click');
})



},{"./give.js":1}],3:[function(require,module,exports){
module.exports = {
	sliderInit: function(){
		//ingradients
		var sliderNext = document.getElementsByClassName('slider-next');
		var sliderPrev = document.getElementsByClassName('slider-prev');
		var sliderAuto = document.querySelectorAll('[slider-auto]');
		var sliderIndicator = document.getElementsByClassName('slider-indicator-wrap')
		var sliderNextWrap = [];
		var sliderPrevWrap = [];
		var sliderIndexWrap = [];
		var sliderAutoWrap = [];
		var sliderIndicatorWrap = [];
		var autoSlideState ;

		
	
	
		//instructions

		//Pushing
		for(var i = 0; i < sliderNext.length; i++){
			sliderNextWrap.push(sliderNext[i]);
			sliderPrevWrap.push(sliderPrev[i]);
			sliderAutoWrap.push(sliderAuto[i]);
			sliderIndexWrap.push(0);
			sliderIndicatorWrap.push(sliderIndicator[i])
		}



		var autoSlideInterval = function(item,index,array){

			var interval = 5000;
			autoSlideState = true

			if(item){
				var parent = item.children[1];
				var slides = parent.children;
				var indicators = parent.nextElementSibling
				item.onmouseover = function(){
				  autoSlideState = false
				}
				item.onmouseout = function(){
				  autoSlideState = true
				}
			}

			
			
			cc()
			
			function cc(){
				
				var timer = setInterval(function(){
					if(autoSlideState && item){
						if(sliderIndexWrap[index] === slides.length - 1){
							sliderIndexWrap[index] = 0
							parent.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
							if(indicators){
								for (var i = 0; i < indicators.children.length; i++) {
									indicators.children[i].classList.remove('active')
								}
								indicators.children[sliderIndexWrap[index]].classList.add('active')
							}
						}else{
							sliderIndexWrap[index] ++
							parent.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
							if(indicators){
								for (var i = 0; i < indicators.children.length; i++) {
									indicators.children[i].classList.remove('active')
								}
								indicators.children[sliderIndexWrap[index]].classList.add('active')
							}
						}	
					 }
					}, interval)
				
			}
		
			
		}

		var nextCallback = function(item,index,array){
			var parent = item.parentNode;
			var sibling = parent.nextElementSibling;
			var slides = parent.nextElementSibling.children;
			var indicators = sibling.nextElementSibling
			item.addEventListener('click',function(){
				if(sliderIndexWrap[index] === slides.length - 1){
					sliderIndexWrap[index] = 0
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
					if(indicators){
						for (var i = 0; i < indicators.children.length; i++) {
							indicators.children[i].classList.remove('active')
						}
						indicators.children[sliderIndexWrap[index]].classList.add('active')
					}
				}else{
					sliderIndexWrap[index] ++
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
					if(indicators){
						for (var i = 0; i < indicators.children.length; i++) {
							indicators.children[i].classList.remove('active')
						}
						indicators.children[sliderIndexWrap[index]].classList.add('active')
					}
				}

			})
				
		}

		var prevCallback = function(item,index,array){
			var parent = item.parentNode
			var sibling = parent.nextElementSibling
			var slides = parent.nextElementSibling.children
			var indicators = sibling.nextElementSibling
			item.addEventListener('click',function(){
				if(sliderIndexWrap[index] === 0){
					sliderIndexWrap[index] = slides.length - 1;
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%'
					if(indicators){
						for (var i = 0; i < indicators.children.length; i++) {
							indicators.children[i].classList.remove('active')
						}
						indicators.children[sliderIndexWrap[index]].classList.add('active')
					}
					
				}else{
					sliderIndexWrap[index] --;
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
					if(indicators){
						for (var i = 0; i < indicators.children.length; i++) {
							indicators.children[i].classList.remove('active')
						}
						indicators.children[sliderIndexWrap[index]].classList.add('active')
					}
				}
			})
			
		}

		var itemChildrenCallback = function(e,c,d){
			if(e){
				var sibling = e.parentNode.previousElementSibling
				var slides = sibling.children.length
			}
			e.onclick = function(){
				for (var i = 0; i < d.length; i++) {
					d[i].classList.remove('active')
					
				}
				e.classList.add('active')
			
				sibling.style.left = '-' + (c * 100) + '%';
			}
		}

		var indiCallback = function(item,index,array){
			var itemChildrenWrap = []
			if(item){
			
			for (var i = 0; i < item.children.length; i++) {
				itemChildrenWrap.push(item.children[i])
			}
			
				itemChildrenWrap.forEach(itemChildrenCallback)
			}
		
		}
				

		sliderNextWrap.forEach(nextCallback)
		sliderPrevWrap.forEach(prevCallback)
		sliderAutoWrap.forEach(autoSlideInterval)
		sliderIndicatorWrap.forEach(indiCallback)

		
	}
}

},{}]},{},[2]);
