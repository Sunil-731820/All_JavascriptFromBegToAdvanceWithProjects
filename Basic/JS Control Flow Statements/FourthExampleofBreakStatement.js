// Using break in a while loop
let i = 1;
while (i <= 5) {
	console.log(i);
	if (i === 3) {
		break;
	}
	i++;
}

// Using break in a do-while loop
let j = 1;
do {
	console.log(j);
	if (j === 3) {
		break;
	}
	j++;
} while (j <= 5);
