function callMeFunc() {
	// Doesn't need to be hoisted
	const callMe = "I am calling.";

	// Web API calls also use closures
	setTimeout(function() {
		console.log(callMe);
	}, 4000);
}

//callMeFunc();

// Memory efficiency


function returnIndex () {
	// The next line is closure that references the big array
	const bigArray = new Array(7000).fill('😀');
	
	return (function heavyDuty(index) {
		console.log('Array created.');
		return bigArray[index];
	})
}

// const getIndex = returnIndex();
// console.log(getIndex(688));

const makeNuclearButton = () => {
	let timeWithoutDestruction = 0;
	const passTime = () => timeWithoutDestruction++;
	const totalPeaceTime = () => timeWithoutDestruction;
	const launch = () => {
		timeWithoutDestruction = -1;
		return '🚀';
	}
	setInterval(passTime, 1000);
	return {
		launch: launch,
		totalPeaceTime: totalPeaceTime
	}
}

// const boom = makeNuclearButton();
// boom.launch();
// console.log(boom.totalPeaceTime());

const initialize = () => {
	let view;
	let called = 0;
	return function() {
		if (called > 0) {
			return;
		} else {
			view = 'VIEW';
			called++;
			console.log('View has been set.')
		}
	}
	
}

initialize()();





