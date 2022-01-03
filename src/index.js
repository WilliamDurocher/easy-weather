import './styles.css';
import * as apiCalls from './apiCalls';
import * as ui from './ui';


/**
 *TODO: main application function, gets the weather data from API and sends it to the ui.js fonction that will render the data
 * put in try catch 
 *
 * @params
 *  unit: metric or imperial - metric by default
 *  intial load = false
 */
async function getWeatherData(units, InitialLoad = false){
    const requestCoordsUrl = apiCalls.getCoordinatesUrl('Laval');
    const coords =  await apiCalls.getCoordinates(requestCoordsUrl);

    const requestWeatherUrl = apiCalls.getWeatherForecastUrl(coords, 'metric');
    const weather = await apiCalls.getWeatherForecast(requestWeatherUrl);
 
    weather.name = coords.name;
    weather.country = coords.country;

    return weather;
}
//here: call getWeatherData with initial load to true, that will trigger to get the default city

//here: add event listener oncity search button, fire up getWeatherData so that it ca take the city from input
//here: event listener to switch from daily forecast to hourly forecast
//here event listener for switch to metric, switch to imperial AND theme

//FUNCTIONS THAT DO NOT NEED API CALL SHOULD BE CALLED FROM THE UI FILE
//ONLY MAIN GETWEATHERDATA SHOULD CALL API FUNCTIONS, IT IS THE MAIN WORKFLOW THAT GETS DATA AND TELLS UI TO RENDER IT


// getWeatherData().then((data) => {
//     console.log(data);
// })


