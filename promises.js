const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("It worked");
	} else {
		reject("Error. It broke.");
	}
});

console.log(promise);
promise
	.then(result => result+'!')
	.then(result2 => {
		console.log(result2)
	})
	.catch(error => console.log(error));

const urls = [
	'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => {
	return fetch(url).then(res=> res.json())
	}))
	.then(results => {
		console.log(results[0])
	})
	.catch(error => console.log(error))




