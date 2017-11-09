module.exports = function init(e) {
	let el = document.getElementById('potter');
	function coords(e) {
		let xAxis = e.clientX - (el.offsetWidth / 2);
		let yAxis = e.clientY - (el.offsetHeight / 2);
		el.style.top = yAxis + 'px';
		el.style.left = xAxis + 'px';
	}
	function revealPotter(){
		coords(e)
		el.style.zIndex = 4;
		setTimeout(function(){
			el.style.opacity = 1;
			document.body.className += ' potterme';
		}, 1000)
	}
	
	function hidePotter(){
		el.style.opacity = 0;
		setTimeout(function(){
			el.style.zIndex = 0
			document.body.classList.remove('potterme');
		}, 1000)
	}
	revealPotter();
	window.addEventListener('mousemove', coords);
	setTimeout(hidePotter, 6000)
}
