/* 
JavaScript Array is used to store multiple elements in a single variable. It can hold various data types, including numbers, strings, objects, and even other arrays. It is often used when we want to store a list of elements and access them by a single variable.

*/

// Create and initialize an array 
let courses = ["HTML", "CSS", "JavaScript", "React"]; 

// Display the array items 
console.log(courses); 

// Create a new empty array 
let newArray = []; 

// forEach loop to push elements 
// into new array 
courses.forEach(function (course) { 
	newArray.push(course); 
}); 
console.log("The Old Array is : =")
console.log(courses)
// Display the new array of items 
console.log("The NEw Array sis : =")
console.log(newArray); 
