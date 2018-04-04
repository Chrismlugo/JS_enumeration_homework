var arrayTasks = {

	concat: function (arr1, arr2) {
	let	newArray = [];
	for(let element of arr1){
		newArray.push(element);
	}
	for(let element of arr2){
		newArray.push(element);
	}

	return newArray;

	},

	insertAt: function (arr, itemToAdd, index) {
	let	newArray = [];
		for(let i in arr){
			if(i < index){
				newArray.push(arr[i]);
			}else{
				newArray.push(itemToAdd);
				newArray.push(arr[i]);
			}
		}

		arr = newArray;
		return arr;
	},

	square: function (arr) {
	let newArray = [];
	for(let element of arr){
		newArray.push(element * element);
	}
	return newArray;
	},

	sum: function (arr) {
		let total = 0;
		for(let element of arr){
			total += element;
		}
		return total;
	},

	findDuplicates: function (arr) {
		let newArray = [];
for (let element of arr){
	// if the element has more than one index position(duplicate).
		if (arr.indexOf(element) !== arr.lastIndexOf(element)){
			// if the new array doesn't already include the element.
				if (!newArray.includes(element)){
						newArray.push(element);
				}
		}
}
return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
	let	newArray = [];
		for(let element of arr){
			if(element !== valueToRemove){
				newArray.push(element);
			}
		}
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		// create a new array.
	let	newArray = [];
	// loop through each index of arr.
		for(let i in arr){
			// show the element of the index.
			let element = arr[i];
			// if the element matches the itemToFind.
			if (element === itemToFind){
				//push the index number to the new array.
				newArray.push(parseInt(i));
			}
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		// create a new array.
			let newArray = [];
		// for each element in arr
		for(let element of arr){
		// if the element is an even number.
			if(element % 2 === 0){
		// add element to the new array.
			newArray.push(element);
		}
		}

		 return this.sum(this.square(newArray));
	}

}

module.exports = arrayTasks
