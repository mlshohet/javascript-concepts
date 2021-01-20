// native ES6 modules

const harry = "Harry";
const voldemort = "He who must not to be named";

export default function fight(char1, char2) {
		const attack1 = Math.floor(Math.random() * char1.length);
		const attack2 = Math.floor(Math.random() * char2.length);

		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}