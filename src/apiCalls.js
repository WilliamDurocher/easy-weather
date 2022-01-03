
function getFormData(){
    //retrieve the city form data, format to make sure there is no unecessary whitespace, and replace necessary whitespace by +, city that will be return 
}


function getCoordinatesUrl(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb47f2dd8a7d411cc47497189075f8a6`;
}

function getWeatherForecastUrl(coordinates, units){
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=bb47f2dd8a7d411cc47497189075f8a6`;
}

async function getCoordinates(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    const coords = {
        lon: weatherData.coord.lon,
        lat: weatherData.coord.lat,
        name: weatherData.name,
        country: weatherData.sys.country
    };
    return coords;
}

async function getWeatherForecast(url) {
    const response = await fetch(url);
    const weatherData = await response.json();

    return weatherData;
}

export{
    getFormData,
    getCoordinatesUrl,
    getCoordinates,
    getWeatherForecastUrl,
    getWeatherForecast,
};