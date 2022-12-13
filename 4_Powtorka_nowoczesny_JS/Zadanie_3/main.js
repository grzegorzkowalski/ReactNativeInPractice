const numbers = [1, 1000, 101, 11];

const compareNumbers = (a, b) => a - b;

console.log(numbers.sort());
console.log(numbers.sort(compareNumbers));
