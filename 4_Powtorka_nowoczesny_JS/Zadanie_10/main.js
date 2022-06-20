function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const evenOrOdd = () => {
    const number = randomIntFromInterval(1,10);
    console.log(number);
    console.log(number % 2 === 0 ? "even" : "odd");
}

evenOrOdd();
evenOrOdd();
evenOrOdd();
evenOrOdd();


