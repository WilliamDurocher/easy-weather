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
async function getWeatherData(){
    const requestCoordsUrl = await apiCalls.getCoordinatesUrl('Laval');
    const coords =  await apiCalls.getCoordinates(requestCoordsUrl);

    const requestWeatherUrl = apiCalls.getWeatherForecastUrl(coords, 'metric');
    const weather = await apiCalls.getWeatherForecast(requestWeatherUrl);
 
    weather.name = coords.name;
    weather.country = coords.country;

    return weather;
}

// getWeatherData().then((data) => {
//     console.log(data);
// })


