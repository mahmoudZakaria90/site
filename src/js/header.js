module.exports = {
	headerTextSlider() {
		let el = document.querySelector('#headerTextSlider');
		let data = [
		'Talented, Innovator and a Seeker in the web industry',
		'Someone who makes noises in user interfaces',
		'For hiring, <a href="mailto:me@the-zek.com">me@the-zek.com</a>'
		]

		function init(){
			el.innerHTML = `<span class="show">${data[0]}</span>`
			for (let i = 1; i < data.length; i++) {
				let temp = `<span>${data[i]}</span>`;
				el.innerHTML += temp;
			}
		}

		function slide() {
			init();
			let i = 0;
			let slider = setInterval(function(){
				i++;
				if(i == data.length){
					i = 0;
				}
				for (let i = 0; i < data.length; i++) {
					document.getElementById('headerTextSlider').children[i].className = '';	
				}
				document.getElementById('headerTextSlider').children[i].className = 'show';
			}, 5000)
		}
		slide();
	},
	headerNav() {
		let header = document.getElementById('home');
		let headerNav = document.getElementById('headerNavWrap');
		if(window.pageYOffset >= header.offsetHeight){
			headerNav.classList.add('fixed');
		} else {
			headerNav.classList.remove('fixed');
		}
	},
	headerScroll() {
		let section = document.querySelectorAll('.section');
		for (var i = 0; i < section.length; i++) {
			window.onscroll = function(){
				if(window.pageYOffset >= section[i].offsetHeight){
					alert(section[i].id)
				}
			}
		}
	}
}