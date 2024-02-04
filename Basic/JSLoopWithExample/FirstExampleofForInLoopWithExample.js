//declaring a object employee 
const courses = { 
	firstCourse: 'JavaScript', 
	secondCourse: 'React', 
	thirdCourse: 'Angular'
}; 
let value = ''; 

//using for in loop 
for (let item in courses) { 
	value += courses[item] + " "; 
} 
console.log(value);
