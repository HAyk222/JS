const arr = []

class Gladiator {
	constructor(index, health, power, speed, name){
		this.index = index;
		this.health = health;
		this.power = power;
		this.speed = speed
		this.name = name
	}

	hit (initial_health, initial_speed) {
		this.speed = initial_speed * initial_health/this.health;
		setTimeout(this.hit, 1000/this.speed)
	}

	embrased (gl, gl_power) {
		this.health -= gl_power
		if(this.health <= 0) {
			this.die(arr)

		}
	}

	die (array) {
		console.log(this)
		let answer = prompt("If you don't want gladiator die write 1!");
		
		if(answer == "1") {
			this.health = 50
		} else {
			console.log(arr)
			arr.splice(this.index,1)

			
		}
		
	}
}
let html = ""
function dom(gladiator) {
	
	html += `<div><h2>${gladiator.name}</h2><p>Health: <span class='health'>${gladiator.health}</span></p><p>Power: <span class='power'>${gladiator.power}</span></p><p>Speed: <span class='speed'>${gladiator.speed}</span></p></div>`

}



for( let i = 0; i < 10; i++){
	const randomHealth = Math.floor(Math.random()*20)+80;
	const randomPower = Math.floor(Math.random()*3)+2;
	const randomSpeed = Math.floor(Math.random()*5)+1;
	arr.push(new Gladiator(i, randomHealth, randomPower, randomSpeed, faker.name.findName()));
	dom(arr[i])
}


document.querySelector('.content').innerHTML = html;

console.log(arr);

function start(){
	arr.forEach( (gladiator, index) => {
		
		let interval = setInterval(() => {

			if(arr.length == 1){
				clearInterval(interval);
				winner(arr);
				return
			}
			html = ""
			let embrasedGladiatorIndex = Math.floor(Math.random()*arr.length)
			while(index === embrasedGladiatorIndex || index ==="undefined"){
				embrasedGladiatorIndex = Math.floor(Math.random()*arr.length)
			}
			gladiator.hit(gladiator.health, gladiator.speed)
			arr[embrasedGladiatorIndex].embrased(gladiator, gladiator.power)
			arr.forEach((gladiator, index) => {
				gladiator.index = index
			})
			for(let i=0; i<arr.length; i++){
				dom(arr[i])
			}
			
			document.querySelector('.content').innerHTML = html;
			console.log(arr)
		},5000/gladiator.speed)
	})
}


function winner(gl){
	console.log(gl[0])
	document.querySelector(".content div").style.background = "red";
}







