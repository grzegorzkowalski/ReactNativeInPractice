const numbers = [1, 11, 1000, 101];

function compareNumbers(a, b) {
   return a - b;
}

console.log([6,4,2,6,1].sort());
console.log([...numbers].sort());

console.log(numbers);

console.log([...numbers].sort(compareNumbers));