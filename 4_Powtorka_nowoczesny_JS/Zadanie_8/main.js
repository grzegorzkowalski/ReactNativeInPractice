const employee = {
	name: "Krzysztof",
	surname: "Nowak",
	age: 54,
	occupation: "Policjant"
}

//const name = employee.name;

const {name : superName, surname} = employee;

console.log(superName, surname)