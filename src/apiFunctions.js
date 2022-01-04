import * as utils from './utils';

function getFormData() {

    const cityName = document.getElementById('srch').value;

    if (cityName) {

        return utils.formatCityName(cityName);
    }
    return '';
}


function getCoordinatesUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb47f2dd8a7d411cc47497189075f8a6`;
}

function getWeatherForecastUrl(coordinates, units) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=bb47f2dd8a7d411cc47497189075f8a6`;
}

//TODO: try catch, need to show error on screen if call gets error (no city found)
async function getCoordinates(url) {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        const coords = {
            lon: weatherData.coord.lon,
            lat: weatherData.coord.lat,
            name: weatherData.name,
            country: weatherData.sys.country
        };
        return coords;
    } catch (error) {
        console.error(error);
    }
}

async function getWeatherForecast(url) {
    try{
        const response = await fetch(url);
        const weatherData = await response.json();
    
        return weatherData;
    }catch (error){
        console.error(error);

    }

}

export {
    getFormData,
    getCoordinatesUrl,
    getCoordinates,
    getWeatherForecastUrl,
    getWeatherForecast,
};