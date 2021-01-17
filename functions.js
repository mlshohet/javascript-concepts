// Amazon shopping

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}

const tuba = {
	name: 'Tuba',
	price: 250
}

const squirrelFood = {
	name: 'Squirrel Food',
	price: 15
}

const notebook = {
	name: 'Notebook',
	price: 5
}

const addItemToCart = (user, item) => {
	const updatedUser = clone(user);
	updatedUser.cart.push(item);
	return updatedUser;
}

const addTaxToItem = (user, item) => {
	const updatedUser = {...user};
	updatedUser.cart.map(cartItem => {
		if (cartItem === item) {
			item.price = item.price + item.price * 0.03;
		}
	})
	return updatedUser;
}

const buyItem = (user, item) => {
	user.cart.map((cartItem, i) => {
		if (cartItem === item) {
			const purchase = user.cart.splice(i,1)[0];
			user.purchases.push(purchase);
		}
	});
	return user;
}

const emptyCart = user => {
	user.cart = [];
	return user;
}

addItemToCart(user, tuba);
addItemToCart(user, squirrelFood);
addItemToCart(user, notebook);
console.log(user);
console.log(user.cart);
addTaxToItem(user, tuba);
console.log(`${tuba.name}'s price after tax is ${tuba.price}`);
buyItem(user, tuba);
console.log("Buying");
console.log(user.cart);
console.log(user.purchases);

console.log("Emptying cart");
emptyCart(user);
console.log(user.cart);










