module.exports = {
	headerTextSlider() {
		let el = document.querySelector('#headerTextSlider');
		let data = [
		'Talented, Innovator and a Seeker in the web industry',
		'Making noises in user interfaces',
		'Knowledge has no limit',
		'If you can believe, you can achieve',
		'For hiring, <a href="mailto:m.zakria90@gmail.com">m.zakria90@gmail.com</a>'
		]

		function init(){
			el.innerHTML = `<span class="show">${data[0]}</span>`
			for (let i = 1; i < data.length; i++) {
				let temp = `<span style="z-index: ${i}">${data[i]}</span>`;
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
		let el = document.getElementById('headerNavWrap');
		function fixedBar() {
			if(window.pageYOffset >= el.offsetHeight){
				el.classList.add('is-fixed');
			} else if (window.pageYOffset <= 0){
				el.classList.remove('is-fixed');
			}
		}

		window.addEventListener('scroll', fixedBar)
	}
}