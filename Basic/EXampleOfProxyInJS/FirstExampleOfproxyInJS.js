let details = {
	name: "Raj",
	Course: "DSA",
}
const prox = new Proxy(details, {})

console.log(prox.name);
console.log(prox.Course);
