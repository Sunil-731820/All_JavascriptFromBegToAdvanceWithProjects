// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
console.log("Original Array: " + courses);

// Removes and returns the last element
let lastElement = courses.pop();
console.log("After Removed the last elements: " + courses);

// Removes and returns the first element
let firstElement = courses.shift();
console.log("After Removed the First elements: " + courses);

// Removes 2 elements starting from index 1
courses.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: " + courses);
