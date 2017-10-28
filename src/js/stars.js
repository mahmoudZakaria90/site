module.exports = function stars() {
	let colors = ['#40FFDC','#00A9D4','#1C3166','#240047','#1C0021','#40FFDC','#00A9D4','#1C3166']
	for (var i = 0; i < 90 ; i++) {
		let star = document.createElement('div');
		star.className = 'star';
		document.getElementById('starWrap').appendChild(star);
		let rand = Math.floor(Math.random() * window.innerWidth)
		let rand2 = Math.floor(Math.random() * window.innerWidth)
		let rand3 = Math.floor(Math.random() * colors.length)
		star.style.top = rand + 'px'
		star.style.left = rand2 + 'px'
		star.style.animationDelay = (rand / i) / 20 + 's'
		star.style.borderColor = colors[rand3]
	}	
}
