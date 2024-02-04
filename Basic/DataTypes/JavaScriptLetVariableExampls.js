/* 
JavaScript let is a keyword used to declare variables that are block-scoped. Variables defined with the let keyword cannot be redeclared and must be declared before use.

let keyword was added in the ES6 or ES2015 version of JavaScript. Generally, it is suggested that we use the let keyword while working with JavaScript.

Syntax:
let variable_name = value;
Block Scope
The variables which are declared inside the { } block are known as block-scoped variables. variables declared by the var keyword cannot be block-scoped.

Example: In this example, the num variable is block-scoped and it cannot be accessed outside the block. If we try to access the variable outside the block it throws a reference error.
*/

{
	let num = 10;
	// calling the function inside block
	console.log(num)
}
// calling the function outside
// block throws a Error
// console.log(num)


/* 
Global Scope
A global scope variable is a variable declared in the main body of the source code, outside all functions.

Example: In this example, the num variable is a globally scoped variable and it can be accessed from anywhere in the program.
*/

let num = 10;
console.log(num);
function fun() {
	console.log(num);
}
fun(); // calling the function


/* 
Function Scope
A function scope variable is a variable declared inside a function and cannot be accessed outside the function.

Example: In this example, the num variable is declared inside the function and cannot be accessed outside the function.
*/

console.log("EXample of The Function Scope: =")
function fun() {
	let num = 10;
	console.log(num);
}
fun(); // calling the function
console.log(num);


/* 
Redeclaring Variables in different blocks
The variables declared using let can be redeclared inside other blocks.

Example: In this example, variable x is redeclared inside other blocks.

*/


let x1 = 77;
{
	let x1 = 23; // legal
	console.log(x1);
}
let x = 67;// illegal
console.log(x);
