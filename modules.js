// Using IIFE to create a module
// Module returns an object with function as property
// Encapsulated from global

var fightModule = (function() {
	var harry = 'Harry'
	var voldemort = 'He who muct not be named'

	function fight(char1, char2) {
		var attack1 = Math.floor(Math.random() * char1.length);
		var attack2 = Math.floor(Math.random() * char2.length);

		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
	}
	// this is equivalent of 'export'
	return {
		fight : fight
	}
})()

// Common JS

var module = require('module');

module.exports = {
	fight: fight
}


