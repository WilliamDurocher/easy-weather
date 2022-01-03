import './styles.css';
import * as apiFunc from './apiFunctions';
import * as uiFunc from './uiFunctions';
import * as constants from './constants';
//Default variables initialization



const mainContainer = document.querySelector('.main-container');
const searchBtn = document.querySelector('.options-search-btn');
const unitsCBtn = document.getElementById('unitsC');
const unitsFBtn = document.getElementById('unitsF');
const themeSwitchBtn = document.querySelector('.theme');
const dailyForecastBtn = document.getElementById('daily');
const hourlyForecastBtn = document.getElementById('hourly');
const dailyForecastContainer = document.querySelector('.daily-container');
const hourlyForecastContainer = document.querySelector('.hourly-container');


//default vals
let unit = constants.unitInfo.METRIC.name;
let lastCity = constants.DEFAULT_CITY;
let unitChange = false;

/**
 *TODO: main application function, gets the weather data from API and sends it to the ui.js fonction that will render the data
 * put in try catch 
 *
 * @params
 *  unit: metric or imperial - metric by default
 *  intial load = false
 */
async function getWeatherData(InitialLoad = false){

    let cityName = InitialLoad ? constants.DEFAULT_CITY : apiFunc.getFormData();

    //do nothing if search btn is clicked with no text
    if (!cityName){
        return;
    }

    if (unitChange){
        cityName = lastCity;
        unitChange = false;
    }

    //If we need to change the unit, we don't want to lose the city we had in the first place
    lastCity = cityName;

    const requestCoordsUrl = apiFunc.getCoordinatesUrl(cityName);
    const coords =  await apiFunc.getCoordinates(requestCoordsUrl);

    const requestWeatherUrl = apiFunc.getWeatherForecastUrl(coords, unit);
    const weather = await apiFunc.getWeatherForecast(requestWeatherUrl);
 
    weather.name = coords.name;
    weather.country = coords.country;

    uiFunc.renderWeatherData(weather, unit);

    mainContainer.style.display = 'flex';

}
//INITIAL CALL: 
getWeatherData(true);


//once users click on search, the getweatherdata function will call the getFormData func to retrieve the text inputs value


searchBtn.addEventListener('click', getWeatherData);

unitsFBtn.addEventListener('click', ()=>{
    unit = constants.unitInfo.IMPERIAL.name;
    unitChange = true;
    getWeatherData();
    
    unitsFBtn.style.display = 'none';
    unitsCBtn.style.display = '';
});

unitsCBtn.addEventListener('click', ()=>{
    unit = constants.unitInfo.METRIC.name;
    unitChange = true;
    getWeatherData();
    
    unitsFBtn.style.display = 'none';
    unitsCBtn.style.display = '';
});

themeSwitchBtn.addEventListener('click', () => {
//TODO: change bg , transition etc
});


dailyForecastBtn.addEventListener('click', () => {
    dailyForecastContainer.style.display = 'flex';
    hourlyForecastContainer.style.display = 'none';
});


hourlyForecastBtn.addEventListener('click', () => {
    hourlyForecastContainer.style.display = 'flex';
    dailyForecastContainer.style.display = 'none';
});


//here: add event listener oncity search button, fire up getWeatherData so that it ca take the city from input
//here: event listener to switch from daily forecast to hourly forecast
//here event listener for switch to metric, switch to imperial AND theme

//FUNCTIONS THAT DO NOT NEED API CALL SHOULD BE CALLED FROM THE UI FILE
//ONLY MAIN GETWEATHERDATA SHOULD CALL API FUNCTIONS, IT IS THE MAIN WORKFLOW THAT GETS DATA AND TELLS UI TO RENDER IT

export {
    unit,
}


