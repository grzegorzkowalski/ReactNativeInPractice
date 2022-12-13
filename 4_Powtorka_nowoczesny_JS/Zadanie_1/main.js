if (true) {
	let a = "A";
	const b = "B";
	var c = "C";
}

let one = 1;
const two = 2;
var three = 3;

function testVars() {
	let dog = "pekińczyk";
	const cat = "syjamski";
	var chomik = "syryjski";
}
console.log(c);
console.log(one);
console.log(two);
console.log(three);

/*
Wnioski:
a,b są niedostępne, bo są w zakresie blokowym.
zwierzątka są hermetyzowana w funkcji i spoza funkcji nie mamy dostępu
*/
