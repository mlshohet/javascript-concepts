// Amazon shopping

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}

//Composing functions
const compose = (f,g) => (...args) => f(g(...args));

const updatedUser = purchaseItem(
	emptyCart,
	buyItem,
	applyTaxToItem,
	addItemToCart
)(user, { name: 'tuba', price: 250 });

console.log(updatedUser);

function purchaseItem(...fns) {
	return fns.reduce(compose)
}

function addItemToCart(user, item) {
	const updatedCart = user.cart.concat(item);
	return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItem(user) {
	const {cart} = user;
	const taxRate = 1.3;
	const updatedCart = cart.map(item => {
		return {
			name: item.name,
			price: item.price+taxRate
		}
	})
	return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
	return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
	return Object.assign({}, user, { cart: [] });
}












