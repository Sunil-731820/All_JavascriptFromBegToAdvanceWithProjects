// Map is an object that takes key-value pair as input
let mapObject = new Map([
	["Geeks", 1],
	["For", 2],
	["geeks", 3],
]);

console.log("Display of Key-Value Pair->")
for (const entry of mapObject) {
	console.log(entry);
}

console.log("Display of Value only->")
for (const [key, value] of mapObject) {
	console.log(value);
}
