// Number:

let num = 2; // Integer 
let num2 = 1.3; // Floating point number
let num3 = Infinity; // Infinity
let num4 = 'something here too'/2; // NaN
console.log("The Num is : ",num)


// String 

// String:
// A String in javascript is basically a series of characters that are surrounded by quotes. There are three types of quotes in Javascript, which are:

let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;
// There’s no difference between ‘single’ and “double” quotes in javascript. Backticks provide extra functionality as with their help of them we can embed variables inside them.

let name = "Mukul";
// embed a variable
// alert( `Hello, ${name}!` ); // Hello, Mukul!




// Boolean

// Boolean:
// The boolean type has only two values: true and false. This data type is used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

 let isCoding = true; // yes
 let isOld = false;      // no



//  NULL:
// The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value:

let age = null;
// The ‘null’ data type basically defines a special value that represents ‘nothing’, ’empty’, or ‘value unknown’. Undefined Just like null, Undefined makes its own type. The meaning of undefined is ‘value is not assigned’.

let x;
console.log(x);  // undefined



// Symbol:
// Symbols are new primitive built-in object types introduced as part of ES6. Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object. They are used as object properties that cannot be recreated. It basically helps us to enable encapsulation or information hiding.

let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")
  
// Each time Symbol() method 
// is used to create new global Symbol
console.log(symbol1 == symbol2); // False

// BigInt:
// BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1. The largest number that JavaScript can reliably represent with the Number primitive is 253-1, which is represented by the MAX_SAFE_INTEGER constant.

let bigBin = BigInt("0b1010101001010101001111111111111111");
// 11430854655n
console.log(bigBin);


// JavaScript Non-Primitive Data Types Examples:

// Object:
// JavaScript objects are fundamental data structures used to store collections of data. They consist of key-value pairs and can be created using curly braces {} or the new keyword. Understanding objects is crucial, as everything in JavaScript is essentially an object.

// Object creation:
// Using the “object constructor” syntax:

let person1 = new Object(); 
// Using the “object literal” syntax:

let person = {};  //