import * as utils from './utils';
import * as constants from './constants';
import { unit } from './index';


// current weather variables

const currentWeatherDesc = document.querySelector('.main-desc');
const currentWeatherIcon = document.querySelector('.main-temp-icon');
const currentWeatherTemp = document.querySelector('.main-temp');

const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const rain = document.getElementById('rain');
const wind = document.getElementById('windSpeed');

const cityName = document.querySelector('.city');
const cityDate = document.querySelector('.date');
const cityTime = document.querySelector('.time');

const dailyForecastArray = document.querySelectorAll('.daily');
const hourlyForecastArray = document.querySelectorAll('.hourly');



let unitTempDisplay;
let unitWindDisplay;


function renderCurrentWeather(weather){
    const currentWeather = weather.current;

    currentWeatherDesc.innerText = utils.capitalizeEachWord(currentWeather.weather[0].description);
    //todo icon
    currentWeatherTemp.innerText = utils.formatTemp(currentWeather.temp);
    feelsLike.innerText = utils.formatTemp(currentWeather.feels_like);
    humidity.innerText = currentWeather.humidity + "%";
    rain.innerText = (weather.hourly[0].pop * 100) + "%"
    wind.innerText = utils.formatWindSpeed(currentWeather.wind_speed);
}

function renderLocalisationInfo(weather){

    cityName.innerText = weather.name;
    cityDate.innerText = utils.getDate(weather.current.dt);
    cityTime.innerText = utils.getHourMinutes(weather.current.dt);

}

function renderDailyForecast(weather){
    for (let i = 0; i < dailyForecastArray.length; i++){

        // we are ignoring the first 'daily' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i+1;

        dailyForecastArray[i].querySelector('.daily-day').innerText = utils.getWeekDay(weather.daily[weatherDataIndex].dt);
        dailyForecastArray[i].querySelector('.daily-temp').innerText = utils.formatTemp(weather.daily[weatherDataIndex].temp.day);
        dailyForecastArray[i].querySelector('.daily-low-temp').innerText = utils.formatTemp(weather.daily[weatherDataIndex].temp.min);
        //todo icon

    }
}


//TODO: for now, only 8 hours are shown. API gives us 24, so ideally we would have 3 pages of 8h each so that user can scroll through
function renderHourlyForecast(weather){

    for (let i = 0; i < hourlyForecastArray.length; i++){

        // we are ignoring the first 'hourly' weather object, as it is the same as the 'current' weather
        let weatherDataIndex = i+1;

        hourlyForecastArray[i].querySelector('.hourly-hour').innerText = utils.getHour(weather.hourly[weatherDataIndex].dt);
        hourlyForecastArray[i].querySelector('.hourly-temp').innerText = utils.formatTemp(weather.hourly[weatherDataIndex].temp);
        //todo icon

    }
}


function renderWeatherData(weather){
    //this will call all the different renders functions (main, forecast, details, etc)
    unitTempDisplay = unit == constants.unitInfo.METRIC.name ? constants.unitInfo.METRIC.temp_display : constants.unitInfo.IMPERIAL.temp_display;
    unitWindDisplay = unit == constants.unitInfo.METRIC.name ? constants.unitInfo.METRIC.windspeed_display : constants.unitInfo.IMPERIAL.windspeed_display;
    
    renderCurrentWeather(weather);
    renderLocalisationInfo(weather);
    renderDailyForecast(weather);
    renderHourlyForecast(weather);

}

export{
    renderWeatherData,
    unitTempDisplay,
    unitWindDisplay,
}