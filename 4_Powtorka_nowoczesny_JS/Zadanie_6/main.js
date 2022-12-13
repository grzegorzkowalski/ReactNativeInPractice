const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

const biggest = (city) => {
    const cityToSort = [...city];
    cityToSort.sort((a,b) => a.length - b.length);
    console.log(cityToSort[cityToSort.length-1], cityToSort[cityToSort.length-1].length)
}

biggest(biggestCities);
