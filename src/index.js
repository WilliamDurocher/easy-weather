import './styles.css';
import * as apiFunc from './apiFunctions';
import * as uiFunc from './uiFunctions';
import * as constants from './constants';
//Default variables initialization


const loadingScreen = document.querySelector('.loading-screen');
const searchBtn = document.querySelector('.options-search-btn');
const searchInput = document.querySelector('.search');
const errorMessage = document.querySelector('.error-message');
const unitBtnC = document.getElementById('unitC');
const unitBtnF = document.getElementById('unitF');
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
 * TODO: while this function is running, have a splash screen with 3 dots or loading circle that deactivates the UI while the data is loading
 * @params
 *  unit: metric or imperial - metric by default
 *  intial load = false
 */
async function getWeatherData(InitialLoad = false){

    try{

    loadingScreen.style.display = 'block';

    let cityName = InitialLoad ? constants.DEFAULT_CITY : apiFunc.getFormData();

    if (unitChange){
        cityName = lastCity;
        unitChange = false;
    }

    //do nothing if search btn is clicked with no text
    if (!cityName){
        loadingScreen.style.display = 'none';
        return;
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

} catch (error){
    lastCity = document.querySelector('.city').innerText;
    searchInput.classList.add('input-error');
    errorMessage.style.display = "inline";

    setTimeout(function() {
        searchInput.classList.remove('input-error');
        errorMessage.style.display = "none";

    }, 1500);

}
loadingScreen.style.display = 'none';


searchInput.value = '';



}
//INITIAL CALL: 
getWeatherData(true);


searchBtn.addEventListener('click', () => {
    getWeatherData();
  });
  
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      getWeatherData();

    }
  });

unitBtnF.addEventListener('click', () => {
    unit = constants.unitInfo.IMPERIAL.name;
    unitChange = true;
    getWeatherData();
    
    unitBtnF.style.display = 'none';
    unitBtnC.style.display = 'inline';
});

unitBtnC.addEventListener('click', () => {
    unit = constants.unitInfo.METRIC.name;
    unitChange = true;
    getWeatherData();
    
    unitBtnC.style.display = 'none';
    unitBtnF.style.display = 'inline';
});

themeSwitchBtn.addEventListener('click', () => {
//TODO: change bg , transition etc
});


dailyForecastBtn.addEventListener('click', () => {
    dailyForecastBtn.classList.add('forecast-switch-selected');
    hourlyForecastBtn.classList.remove('forecast-switch-selected');

    dailyForecastContainer.style.display = 'flex';
    hourlyForecastContainer.style.display = 'none';
});


hourlyForecastBtn.addEventListener('click', () => {
    hourlyForecastBtn.classList.add('forecast-switch-selected');
    dailyForecastBtn.classList.remove('forecast-switch-selected');
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


