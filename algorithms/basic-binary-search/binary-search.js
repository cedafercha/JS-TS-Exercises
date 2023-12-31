// Find index value in array with binary search

const valueToFind = +process.argv[2];
const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,15,100,10001,21231];

let leftPosition = 0;
let rightPosition = sortedArray.length - 1;
let valueNotFound = true;

while(leftPosition <= rightPosition) {
	let middlePosition = Math.round((leftPosition + rightPosition) / 2);

	if(sortedArray[middlePosition] === valueToFind) {
		valueNotFound = false;
		console.log('Index in array: ', middlePosition);
		return;
	}
	else if(sortedArray[middlePosition] < valueToFind){
		leftPosition = middlePosition + 1;
	}
	else {
		rightPosition = middlePosition - 1;
	}
}

if(valueNotFound){
	console.log("Value doesn't exists!");
}



