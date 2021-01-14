// Constructors
// Use capitalized names for constructors

function Elf(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

// Constructor invocations with the keyword 'new'
const legolas = new Elf('Legolas', 'bow');
console.log(legolas.name); // prints 'Legolas'

// Constructor made with Function object
const Elf1 = new Function('name', 'weapon', 
	`this.name = name;
	this.weapon = weapon;`)

const elron = new Elf1('Elron', 'magic');
console.log(elron.name);




