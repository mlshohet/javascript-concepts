// func() is shorthand for func.call()

const wizard = {
	name: 'Merlin',
	health: 100,
	heal(num1) {
		return this.health = 100;
	}
}

const ranger = {
	name: 'Strider',
	health: 30,
}

// bound function is called on another object
wizard.heal.call(ranger);
console.log('Ranger health: ', ranger.health);

//call can be used with parameters:

wizard.heal.call(ranger, 30);

//apply uses an array of parameters

wizard.heal.apply(ranger, [30, 10])

//bind returns a new function with its context and parameters
//used to create callback functions with its own context

//this returns a function and stores in a variable
const healRanger = wizard.heal.bind(ranger, 100);

const array = [1,2,3];

function getMax(arr) {
	//there is no this object, but the max function is applied to the argument
	return Math.max.apply(null, arr);
}
const max = getMax(array);
console.log(max);






