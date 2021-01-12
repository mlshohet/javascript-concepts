let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5
	},
	sing() {
		if(this.fire) {
			return `I am ${this.name}, the breather of fire`
		}
	}
}

let lizard = {
	name: 'Kiki',
	fight() {
		return 1
	}
}

// Sets lizard as a dragon prototype
lizard.__proto__ = dragon;
lizard.sing();

// dragon inherits methods from prototype Object
dragon.isPrototypeOf(lizard);

// hasOwnProperty. It doesn't copy props from prototype
// Only lists the base object's properties

for (let prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		console.log(prop);
	}
}

// Creating prototypes

let human = {
	smart: true
}

let socrates = Object.create(human);
socrates.age = 43;
console.log(socrates)

console.log(socrates.mortal);

console.log(human.isPrototypeOf(socrates));


// Modifying exisiting prototypes

Date.prototype.lastYear = function() {
	let getYear = this.getFullYear() - 1;
	return getYear;
}

const date = new Date();
console.log(date.lastYear());






