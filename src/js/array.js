const arr = [];

const fillArray = (array, length, max, min) => {
	for (let i = 0; i < length; i++) {
		array.push(Math.floor(Math.random() * (max - min) + min));
	}
};

fillArray(arr, 100, 100, -100);

const replaceFromArray = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			array[i] = 0;
		}
	}
};

replaceFromArray(arr);

const addToArray = (array) => {
	let count = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === 0 && !(++count % 2)) {
			array.splice(i + 1, 0, -1);
			i++;
		}
	}
};

addToArray(arr);
