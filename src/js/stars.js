module.exports = function stars() {
	let len = Math.floor(window.innerWidth / 15) 
	console.log(len)
	for (let i = 0; i < len ; i++) {
		let star = document.createElement('div');
		star.className = 'star';
		document.querySelector('#starWrap').appendChild(star);
		let rand = Math.floor(Math.random() * window.innerWidth)
		let rand2 = Math.floor(Math.random() * window.innerWidth)
		star.style.top = rand + 'px'
		star.style.left = rand2 + 'px'
		star.style.animationDelay = (rand / i) / 15 + 's'
	}
}