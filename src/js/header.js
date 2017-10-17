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