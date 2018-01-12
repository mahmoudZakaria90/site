module.exports = {
	headerTextSlider() {
		let el = document.querySelector('#headerTextSlider');
		let data = [
		'Talented, Innovator and a Seeker in the web industry',
		'Someone who makes noises in user interfaces',
		'<strong style="font-size: 30px">Curiosity</strong> is my compass',
		'For hiring, <a href="mailto:me@zakcoding.com">me@the-zek.com</a>'
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
		let headerBurger = document.getElementById('headerBurger');
		if(window.pageYOffset >= header.offsetHeight){
			headerNav.classList.add('fixed');
			headerBurger.classList.add('black');
		} else {
			headerNav.classList.remove('fixed');
			headerBurger.classList.remove('black');

		}
	},
	headerBurgerInit() {
		let headerNav = document.getElementById('headerNavWrap');
		let headerBurger = document.getElementById('headerBurger');
		function cb(e) {
			e.preventDefault()
			this.classList.toggle('is-opened');
			headerNav.classList.toggle('is-opened');
		}
		headerBurger.addEventListener('click', cb)
	}
}