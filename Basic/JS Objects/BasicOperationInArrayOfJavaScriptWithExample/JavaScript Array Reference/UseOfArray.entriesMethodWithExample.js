let languages = ["HTML", "CSS", "JavaScript", "ReactJS"];
let g = languages.entries();
for (var x of g) {
	console.log("The ValueOf The X is :=",x);
}


let arr = ["HTML", "CSS", "JS",
		"Bootstrap", "PHP"];
let seqn = arr.entries();
console.log("Applying the Array entries method:");

for (let x of seqn) {
	console.log("The Value Of The X Is : for Seq : is :=",x);
};


const x1 = ["Geeks", "for", "Geeks"];

for (const [index, element] of x1.entries())
	console.log(index, element);

    


