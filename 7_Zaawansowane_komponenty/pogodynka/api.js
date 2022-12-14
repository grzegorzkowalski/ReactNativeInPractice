const APIkey = "5b2965ceb7056ac1cb87a3f4581e90b4";
const APIkeyPixabay = "6799546-801a9e48e0e142c05114f0377";

const getWeather = (city, updateHook) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
        .then(res => res.json())
        .then(res => updateHook(res));
}

const testAsync = async (description, updateHook) => {
    const getData = await fetch(`https://pixabay.com/api/?key=${APIkeyPixabay}&q=${description}&image_type=photo&pretty=true`)
    const response = await getData.json();
    console.log(response);
    updateHook(response.hits[0].webformatURL)
}

export {getWeather, testAsync};
