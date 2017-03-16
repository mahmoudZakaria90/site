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

