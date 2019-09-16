"use strict"

function show(array) {
	console.log(array);
	console.log("----------------------------------------------------------------");
}

function getFaculty(obj) {
	return obj.facultyName;
}

function sumYearOfStuding(sum, currentObj) {
	return sum + currentObj.yearOfStuding;
}

let student = [
		{yearOfStuding: 5, facultyName: "Arts"},
		{yearOfStuding: 4, facultyName: "Commerce"},
		{yearOfStuding: 6, facultyName: "Economics"},
		{yearOfStuding: 5, facultyName: "Education"},
		{yearOfStuding: 4, facultyName: "Engineering"},
		{yearOfStuding: 3, facultyName: "Philosophy"},
		{yearOfStuding: 4, facultyName: "Law"},
		{yearOfStuding: 5, facultyName: "Information Technology"},
		{yearOfStuding: 3, facultyName: "Music"},
		{yearOfStuding: 4, facultyName: "Natural Sciences"}
]

show(student);

show(student.map(getFaculty));

show(student.reduce(sumYearOfStuding, 0));