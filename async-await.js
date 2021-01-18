movePlayer(100, 'left')
	.then(() => movePlayer(400, 'left'))
	.then(() => movePlayer(12, 'right'))
	.then(() => movePlayer(330, 'left'))

	async function playerStart() {
		const firstMove = await movePlayer(100, 'left');
		await movePlayer(400, 'left');
		await movePlayer(12, 'right');
		await movePlayer(300, 'left');
	}

async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json();
	console.log(data);
}

const urls = [
	'https://jsonplaceholder.typicode.com/users'
]

// Async await

const getData = async function () {
	try {
		const [ users ] = await Promise.all(urls.map(url => 
				fetch(url).then(res => res.json())
		))
		console.log('users', users);
	} catch (err) {
		console.log("There was an error.", err)
	}
}

// for await of

const getData2 = async function() {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let req of arrayOfPromises){
		const data = await req.json()
		console.log(data)
	}
}








