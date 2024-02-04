const arr = [45, 32, 69, 21];
const index = 3;

console.log(arr.at(index));


const subjects = ["Maths", "Physics", "Biology", "Chemistry"];

function lastElement(arr) {
	return arr.at(-1);
}

const item = lastElement(subjects);
console.log(item);

subjects.push("DSA");
const item2 = lastElement(subjects);
console.log(item2);
