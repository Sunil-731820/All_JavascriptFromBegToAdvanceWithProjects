let details = {
	name: "Raj",
	Course: "DSA",
}
const prox = new Proxy(details, {
	get: function(){
		return "unauthorized"
	}
})

console.log(prox.name);
console.log(prox.Course);
