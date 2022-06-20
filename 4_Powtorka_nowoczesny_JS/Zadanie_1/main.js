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

/*
Wnioski:
W zasięgu blokowym let i const nie wypisze się poza zakresem.
Funkcja enkapsuluje wszystkie zmienne i nic z niej się nie zapisze.
Zmienne w przestreni globalnej są dostępne z każdego miejsca.
*/
