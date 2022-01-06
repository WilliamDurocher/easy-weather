import './styles.css';
import * as apiFunc from './apiFunctions';
import * as uiFunc from './uiFunctions';
import * as constants from './constants';


//Default variables initialization
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const loadingScreen = document.querySelector('.loading-screen');

// buttons section
const searchBtn = document.querySelector('.options-search-btn');
const searchInput = document.querySelector('.search');
const errorMessage = document.querySelector('.error-message');
const unitBtnC = document.getElementById('unitC');
const unitBtnF = document.getElementById('unitF');
const lightThemeBtn = document.getElementById('themeLight');
const darkThemeBtn = document.getElementById('themeDark');

// forecast section
const dailyForecastBtn = document.getElementById('daily');
const hourlyForecastBtn = document.getElementById('hourly');
const dailyForecastContainer = document.querySelector('.daily-container');
const hourlyForecastContainer = document.querySelector('.hourly-container');


// default values
let unit = constants.unitInfo.METRIC.name;
let lastCity = constants.DEFAULT_CITY;
let unitChange = false;


async function getWeatherData(InitialLoad = false) {
    try {

        loadingScreen.style.display = 'block';

        let cityName = InitialLoad ? constants.DEFAULT_CITY : apiFunc.getFormData();

        if (unitChange) {
            cityName = lastCity;
            unitChange = false;
        }

        // do nothing if search btn is clicked with no text
        if (!cityName) {
            loadingScreen.style.display = 'none';
            return;
        }

        // need to keep the previous city in memory in case user switches units, which require a new api call 
        lastCity = cityName;


        // api calls, get coordinates first, then send them to second call
        const requestCoordsUrl = apiFunc.getCoordinatesUrl(cityName);
        const coords = await apiFunc.getCoordinates(requestCoordsUrl);

        //call that gives us all needed data to show page
        const requestWeatherUrl = apiFunc.getWeatherForecastUrl(coords, unit);
        const weather = await apiFunc.getWeatherForecast(requestWeatherUrl);

        weather.name = coords.name;
        weather.country = coords.country;

        uiFunc.renderWeatherData(weather, unit);

    } catch (error) {
        //if city does not exist, we still have to keep the old one in memory
        lastCity = document.querySelector('.city').innerText;
        searchInput.classList.add('input-error');
        errorMessage.style.display = "inline";

        setTimeout(function () {
            searchInput.classList.remove('input-error');
            errorMessage.style.display = "none";
        }, 1500);

    }
    loadingScreen.style.display = 'none';


    searchInput.value = '';
}

// initial call that renders screen with default city
getWeatherData(true);

searchBtn.addEventListener('click', () => {
    getWeatherData();
});

// keyboard enter event 
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

darkThemeBtn.addEventListener('click', () => {
    lightThemeBtn.style.display = 'inline';
    darkThemeBtn.style.display = 'none';

    document.querySelector('html').style.background = rootStyles.getPropertyValue('--bg-dark');

});

lightThemeBtn.addEventListener('click', () => {
    lightThemeBtn.style.display = 'none';
    darkThemeBtn.style.display = 'inline';

    document.querySelector('html').style.background = rootStyles.getPropertyValue('--bg-light');


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

export {
    unit,
}


