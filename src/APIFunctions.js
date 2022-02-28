import * as DomFunctions from "./DOMFunctions"

async function geolocation() {
    try {
        const promise = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        let lat = promise.coords.latitude;
        let lon = promise.coords.longitude
        const data = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=f01e320c417dd9583e7ed5e57fb13e71`, { mode: "cors" })
        const geoData = await data.json()
            // console.log(geoData, "user geolocation data fetch")
        DomFunctions.search(geoData[0].name)
    } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation API")
    };
}

//gets JSON data from operweathermap, 
//the first is the geolocation API which feeds information on the timezone and latitude
//the second is OneCallAPI which gives us current weather as well as more data(needs lat and lon from geolocation API) 
async function getCoords(url) {
    try {
        const response1 = await fetch(url, { mode: "cors" });
        const geoData = await response1.json();
        // console.log(geoData, "openweathermap reverse geolocation API fetch")

        const name = geoData[0].name;
        const country = geoData[0].country;
        const lat = geoData[0].lat
        const lon = geoData[0].lon

        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&exclude=minutely&appid=f01e320c417dd9583e7ed5e57fb13e71`, { mode: "cors" })
        const weatherData = await response2.json();
        // console.log(weatherData, "openweathermap onecall API fetch")
        return { name, country, weatherData };
    } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation/onecall API")
    }

}

export { getCoords, geolocation }