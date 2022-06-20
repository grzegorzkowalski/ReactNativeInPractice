const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

const findBiggestCity = (tab) => {
    tab.sort((a,b) => b.length - a.length);
    console.log(biggestCities[0], biggestCities[0].length)
}

findBiggestCity(biggestCities);
