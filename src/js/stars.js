module.exports = function stars() {
	for (var i = 0; i < 50 ; i++) {
		let star = document.createElement('div');
		star.className = 'star';
		document.getElementById('starWrap').appendChild(star);
		let rand = Math.floor(Math.random() * window.innerWidth)
		let rand2 = Math.floor(Math.random() * window.innerWidth)
		star.style.top = rand + 'px'
		star.style.left = rand2 + 'px'
		star.style.animationDelay = (rand / i) / 20 + 's'
	}
	window.addEventListener('scroll', function(){
		if(window.pageYOffset >= document.getElementById('home').offsetHeight / 1.5){
			document.getElementById('starWrap').style.display = 'none';
		} else {
			document.getElementById('starWrap').style.display = 'block'
		}
	})
}
