class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
		let interval = setInterval(() => this.age++, 1000)
	}
}

const arr = [
	new Person("Hayk", 26), 
	new Person("Marine", 23), 
	new Person("Tigran", 32), 
	new Person("Artur", 21)
]

console.log(arr);

const addPeople = () => {
	let random = Math.floor(Math.random()*50)+1
	let obj = new Person(faker.name.findName(), random);
	arr.push(obj)
}	

const removeArr = () => {
	arr.forEach( (item, index) => item.age >= 40 && arr.splice(index,1) )
	setTimeout(removeArr, 0);
}

const pushArr = () => {
	addPeople()
	setTimeout(pushArr, 2000)
	console.log(arr)
}

removeArr();
setTimeout(pushArr, 2000)
