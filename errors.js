function fail() {
	try {
		console.log('This function is executing');
		throw new Error('Ooops!!');
	} catch (error) {
		console.log('There was an error', error)
	} finally {
		console.log('Still working after error');
	}
}

//fail();

//Async error handling

// Promise.resolve('Async fail')
// .then(response => {
// 	throw new Error('Error #1')
// 	console.log(response)
// 	return response;
// })
// .then(response => {
// 	console.log(response)
// })
// .catch(err => { 
// 	throw new Error('Error #2')
// 	})
// .then(response => {
// 	console.log(response.message)
// })
// .catch(err => {
// 	console.log('Last Error')
// })

// Async await error handling

(async function() {
	try {
		await Promise.resolve('error 1')
		await Promise.reject('error 2')
	} catch (err) {
		console.log(err);
	}
	console.log("This is still running");
})()

// Extendinh error object

class authError extends Error {
	constructor(message) {
		super(message)
		this.name = 'authError'
		this.snack = 'cupcakes'
	}
}

throw new authError("error");


