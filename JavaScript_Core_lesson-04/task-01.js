"use strict"

function show(array) {
	console.log(array.join(', '));
	console.log("----------------------------------------------------------------");
}

function standartSort(number1, number2) {
	return number1 - number2;
}

function reverseSort(number1, number2) {
	return number2 - number1;
}

function filterPositiveArray(v) {
	return v >= 0;
} 

function filterNegativeArray(v) {
	return v < 0;
} 

let numbers = [ 12, -5, 8, -9, 0, 4, 9, 78, 56, -48, -78, 22, -14, 5, -19, 48, 145, -248, -99, 45, 144 ];
show(numbers);

show(numbers.sort(standartSort));

show(numbers.sort(reverseSort));

show(numbers.filter(filterPositiveArray).sort(standartSort));

show(numbers.filter(filterNegativeArray));
