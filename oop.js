// Object.create()

const elfFunctionsStore = {
	attack() {
		return 'attack with ' + this.weapon
	}
}

function createElf(name, weapon) {
	// Prototypal inheritance
	// Clean code, but not very standard
	// Not true OOP
	newElf = Object.create(elfFunctionsStore);
	newElf.name = name;
	newElf.weapon = weapon;
	return newElf;
}

const legolas = createElf('Legolas', 'bow');
legolas.attack = elfFunctionsStore.attack;

console.log(legolas.attack());