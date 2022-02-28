class weatherData {
    constructor(data) {
        this.data = data
        console.log(this.data)
    }

    getCity() {
        return this.data.name
    }

    getCountry() {
        return this.data.country;
    }

    getFlag() {
        return `https://flagcdn.com/w20/${this.getCountry().toLowerCase()}.png`
    }

    getIcon() {
        return `https://openweathermap.org/img/wn/${this.data.weatherData.current.weather[0].icon}@4x.png`
    }

    getData() {
        return this.data.weatherData
    }

    getCurrentTemp() {
        return (this.data.weatherData.current.temp - 273.15).toFixed(1) + '°C'
    }

    getDescription1() {
        return this.data.weatherData.current.weather[0].main;
    }

    getDescription2() {
        return this.data.weatherData.current.weather[0].description
    }

    getFeelsLike() {
        return (this.data.weatherData.current.feels_like - 273.15).toFixed(1) + '°C';
    }

    getHumidity() {
        return this.data.weatherData.current.humidity + "%"
    }

    getProbabilityOfRain() {
        return this.data.weatherData.hourly[0].pop + "%"
    }

    getWindSpeed() {
        return this.data.weatherData.current.wind_speed + "km/h"
    }

    getTimezone() {
        return this.data.timezone
    }

    getWeeklyDescr(i) {
        return this.data.weatherData.daily[i].weather[0].main
    }

    getWeeklyTemp(i) {
        return (this.data.weatherData.daily[i].temp.day - 273.15).toFixed(1) + '°C';
    }

    getWeeklyTempMin(i) {
        return (this.data.weatherData.daily[i].temp.min - 273.15).toFixed(1) + '°C';
    }

    getWeeklyIcon(i) {
        return `http://openweathermap.org/img/wn/${this.data.weatherData.daily[i].weather[0].icon}@4x.png`
    }

}

export { weatherData }