import * as utils from './utils';
import * as constants from './constants';
import { unit } from './index';


// current weather variables
const currentWeatherDesc = document.querySelector('.main-desc');
const currentWeatherIcon = document.querySelector('.main-temp-icon');
const currentWeatherTemp = document.querySelector('.main-temp');

// details section variables
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const rain = document.getElementById('rain');
const wind = document.getElementById('windSpeed');

// right side info variables
const cityName = document.querySelector('.city');
const cityDate = document.querySelector('.date');
const cityTime = document.querySelector('.time');

// forecast variables
const dailyForecastArray = document.querySelectorAll('.daily');
const hourlyForecastArray = document.querySelectorAll('.hourly');

let unitTempDisplay;
let unitWindDisplay;


function renderCurrentWeather(weather) {
    const currentWeather = weather.current;

    currentWeatherDesc.innerText = utils.capitalizeEachWord(currentWeather.weather[0].description);
    currentWeatherIcon.classList.add(utils.getIcon(currentWeather.weather[0].icon));
    currentWeatherTemp.innerText = utils.formatTemp(currentWeather.temp);

    feelsLike.innerText = utils.formatTemp(currentWeather.feels_like);
    humidity.innerText = currentWeather.humidity + "%";
    rain.innerText = (weather.hourly[0].pop * 100) + "%"
    wind.innerText = utils.formatWindSpeed(currentWeather.wind_speed);
}

function renderLocalisationInfo(weather) {
    cityName.innerText = weather.name;
    cityDate.innerText = utils.getDate(weather.current.dt);
    cityTime.innerText = utils.getHourMinutes(weather.current.dt);

}

// renders a 7 day forecast
function renderDailyForecast(weather) {
    for (let i = 0; i < dailyForecastArray.length; i++) {

        // we are ignoring the first 'daily' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i + 1;

        dailyForecastArray[i].querySelector('.daily-day').innerText = utils.getWeekDay(weather.daily[weatherDataIndex].dt);
        dailyForecastArray[i].querySelector('.daily-temp').innerText = utils.formatTemp(weather.daily[weatherDataIndex].temp.day);
        dailyForecastArray[i].querySelector('.daily-low-temp').innerText = utils.formatTemp(weather.daily[weatherDataIndex].temp.min);
        dailyForecastArray[i].querySelector('.daily-icon').classList.add(utils.getIcon(weather.daily[weatherDataIndex].weather[0].icon));

    }
}

// renders a 8 hour forecast
function renderHourlyForecast(weather) {

    for (let i = 0; i < hourlyForecastArray.length; i++) {

        // we are ignoring the first 'hourly' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i + 1;

        hourlyForecastArray[i].querySelector('.hourly-hour').innerText = utils.getHour(weather.hourly[weatherDataIndex].dt);
        hourlyForecastArray[i].querySelector('.hourly-temp').innerText = utils.formatTemp(weather.hourly[weatherDataIndex].temp);
        hourlyForecastArray[i].querySelector('.hourly-icon').classList.add(utils.getIcon(weather.hourly[weatherDataIndex].weather[0].icon));

    }
}


// main function that will render the whole page
function renderWeatherData(weather) {
    unitTempDisplay = unit == constants.unitInfo.METRIC.name ? constants.unitInfo.METRIC.temp_display : constants.unitInfo.IMPERIAL.temp_display;
    unitWindDisplay = unit == constants.unitInfo.METRIC.name ? constants.unitInfo.METRIC.windspeed_display : constants.unitInfo.IMPERIAL.windspeed_display;

    renderCurrentWeather(weather);
    renderLocalisationInfo(weather);
    renderDailyForecast(weather);
    renderHourlyForecast(weather);
}

export {
    renderWeatherData,
    unitTempDisplay,
    unitWindDisplay,
}