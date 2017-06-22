import zekas from './header'


class Person{
	constructor(name){
		this.name = name
	}
}

var obj = {
	name: 'zekas',
	age: 27
}

var {name, age} = obj

function go (...vals){
	console.log(typeof vals, 'zekas','hala','d')
}

go(1,2,3)
console.log(new Person(), zekas, name)