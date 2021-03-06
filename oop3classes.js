// Classes
// ES6

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return `${this.name} attacks with ${this.weapon}`;
	}
}

//subclasses
class Elf extends Character {

	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}

	attack(cry) {
		console.log(cry);
		return super.attack();
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
	}

	makeFort() {
		return 'Made rock fort';
	}
}

// Class instantiation with the keyword 'new'
const legolas = new Elf('Legolas', 'bow', 'fighter');
console.log(legolas.name); // prints 'Legolas'
console.log(legolas.attack("AAAAAAHHHH"));

const elron = new Elf('Elron', 'magic', 'king');
console.log(elron.name);
console.log(elron.attack("Danderos!"));
console.log(legolas.attack("AHHH!"));

// Extending classes
const fiona = new Ogre('Fiona', 'pie', 'green');
console.log(fiona.color);
console.log(fiona.makeFort());



