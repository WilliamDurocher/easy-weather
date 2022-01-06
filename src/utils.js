import { unitWindDisplay, unitTempDisplay } from "./uiFunctions";
import * as constants from './constants'

// using UNIX timestamp given by API, we can format our date and time however we want. these are pretty specific utils but could be used anywhere

function getDate(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function getWeekDay(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday: "long" });
}

function getHourMinutes(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
}

function getHour(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).toLowerCase();
}

function formatTemp(temp) {
    let tempStr = String(temp);
    return tempStr.substring(0, tempStr.indexOf(".")) + unitTempDisplay;
}

function formatWindSpeed(wind) {
    if (unitWindDisplay == constants.unitInfo.IMPERIAL.windspeed_display) {
        return wind + unitWindDisplay;
    } else {
        return String(Math.round(wind * 3.6)) + unitWindDisplay;
    }
}

function capitalizeEachWord(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function formatCityName(str) {
    return str
        .replace(/(\s+$|^\s+)/g, '')
        .replace(/(,\s+)/g, ',')
        .replace(/(\s+,)/g, ',')
        .replace(/\s+/g, '+');
}

// switch statement that looks for the original codes from openWeather API, and returns FA icons.
function getIcon(iconCode) {
    switch (iconCode) {
        case "01n":
        case "01d":
            return "fa-sun";
        case "02n":
        case "02d":
            return "fa-cloud-sun";
        case "03n":
        case "03d":
            return "fa-cloud";
        case "04n":
        case "04d":
            return "fa-cloud";
        case "09n":
        case "09d":
            return "fa-cloud-showers-heavy";
        case "10n":
        case "10d":
            return "fa-cloud-sun-rain";
        case "11n":
        case "11d":
            return "fa-bolt";
        case "13n":
        case "13d":
            return "fa-snowflake";
        case "50n":
        case "50d":
            return "fa-smog";
        default:
            return;
    }
}
export {
    formatTemp,
    formatWindSpeed,
    getDate,
    getHourMinutes,
    capitalizeEachWord,
    getWeekDay,
    getHour,
    formatCityName,
    getIcon,
}