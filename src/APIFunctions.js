import * as domFunctions from "./DOMFunctions"
import { weatherData } from "./weatherData"

function url(inputValue) {
    inputValue = inputValue == false ? "london" : inputValue;
    return `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=f01e320c417dd9583e7ed5e57fb13e71`;
}

async function geolocation() {
    try {
        const promise = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        let lat = promise.coords.latitude;
        let lon = promise.coords.longitude
        const data = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=f01e320c417dd9583e7ed5e57fb13e71`, { mode: "cors" })
        const geoData = await data.json()
        search(geoData[0].name)
    } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation API")
    };
}

async function search(inputValue) {
    let data = new weatherData(await getCoords(url(inputValue)));
    domFunctions.currentTemp(data);

}

async function getCoords(url) {
    try {
        const response1 = await fetch(url, { mode: "cors" });
        const geoData = await response1.json();

        const name = geoData[0].name;
        const country = geoData[0].country;
        const lat = geoData[0].lat
        const lon = geoData[0].lon

        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&exclude=minutely&appid=f01e320c417dd9583e7ed5e57fb13e71`, { mode: "cors" })
        const weatherData = await response2.json();
        return { name, country, weatherData };
    } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation/onecall API")
    }

}

export { geolocation, search }