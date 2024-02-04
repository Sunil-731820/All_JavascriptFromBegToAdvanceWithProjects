function Language() {
	let first = 'HTML',
		second = 'CSS',
		Third = 'Javascript'
	return {
		first,
		second,
		Third
	};
}
let { first, second, Third } = Language();
console.log(first);
console.log(second);
console.log(Third);
