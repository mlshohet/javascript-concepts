// How to lexically bind objects to functions using 'this' keyword

const a = function() {
	console.log('a', this);
	const b = function() {
		console.log('b', this);
		const c = {
			func1: function() {
				console.log('c', this);
			}
		}
		c.func1();
	}

	//b gets called by the window/global
	b();
}

const obj = {
	name: 'Kurt',
	sing() {
		console.log(this);
		var func1 = function() {
			console.log('b', this)
		}
		// func1 is called by the wondow/global object:
		func1();
		// func1 is not bound lexically to any created object
	}
}

// use ES6 arrow functions to lexically bind functions to objects

const obj2 = {
	name: 'Kurt',
	sing() {
		console.log(this);
		var func1 = () => {
			console.log('b', this)
		}
		// Now func1 is called by the Object obj:
		func1();
		// func1 is bound lexically to obj
	}
}

// bind keyword

const obj3 = {
	name: 'Kurt',
	sing() {
		console.log(this);
		var func1 = function() {
			console.log('b', this)
		}
		// func1 is bound lexically to 'this':
		return func1.bind(this);
	}
}

// invocation of the bound func1:

obj3.sing()();

// Store 'this' object in a reference:

const obj4 = {
	name: 'Kurt',
	sing() {
		// the calling object is stored
		var self = this;
		var func1 = function() {
			//the calling reference is used in the function
			console.log('b', self)
		}
		
		return func1;
	}
}


const character = {
  name: 'Simon',
  getCharacter() {
  	return this.name
  }
};

const giveMeTheCharacterNOW = character.getCharacter.bind(character);
 
//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon,' but doesn't








