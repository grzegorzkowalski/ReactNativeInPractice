const randomNumber = () => {
    const number = Math.ceil(Math.random() * 10+1);
    return `${number}: ${number % 2 === 0 ? "Parzysta" : "Nieparzysta"}`;
}
console.log(randomNumber());
