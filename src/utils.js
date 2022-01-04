import { unitWindDisplay, unitTempDisplay } from "./uiFunctions";
import * as constants from './constants'

/*
*TODO: 
* - convert unix date and time
* - convert 24h time to 12h
* - format temperature
* - calculate chances of rain ?
* -
*
*
*
*/

function getDate(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
}

function getWeekDay(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', { weekday:"long"});
}

function getHourMinutes(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US',{ hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
}

function getHour(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true }).toLowerCase();

}

function formatTemp(temp){
    let tempStr = String(temp);
    return tempStr.substring(0, tempStr.indexOf(".")) + unitTempDisplay;
}

function formatWindSpeed(wind){
    if (unitWindDisplay == constants.unitInfo.IMPERIAL.windspeed_display){
        return wind + unitWindDisplay;
    }else{
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

 function formatCityName(str){
    return str
    .replace(/(\s+$|^\s+)/g, '')
    .replace(/(,\s+)/g, ',')
    .replace(/(\s+,)/g, ',')
    .replace(/\s+/g, '+');
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
}