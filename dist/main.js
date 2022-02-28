/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/weatherData.js":
/*!*****************************!*\
  !*** ./dist/weatherData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherData\": () => (/* binding */ weatherData)\n/* harmony export */ });\nclass weatherData {\n    constructor(data) {\n        this.data = data\n        console.log(this.data)\n    }\n\n    getCity() {\n        return this.data.name\n    }\n\n    getCountry() {\n        return this.data.country;\n    }\n\n    getFlag() {\n        return `https://flagcdn.com/w20/${this.getCountry().toLowerCase()}.png`\n    }\n\n    getIcon() {\n        return `https://openweathermap.org/img/wn/${this.data.weatherData.current.weather[0].icon}@4x.png`\n    }\n\n    getData() {\n        return this.data.weatherData\n    }\n\n    getCurrentTemp() {\n        return (this.data.weatherData.current.temp - 273.15).toFixed(1) + '°C'\n    }\n\n    getDescription1() {\n        return this.data.weatherData.current.weather[0].main;\n    }\n\n    getDescription2() {\n        return this.data.weatherData.current.weather[0].description\n    }\n\n    getFeelsLike() {\n        return (this.data.weatherData.current.feels_like - 273.15).toFixed(1) + '°C';\n    }\n\n    getHumidity() {\n        return this.data.weatherData.current.humidity + \"%\"\n    }\n\n    getProbabilityOfRain() {\n        return this.data.weatherData.hourly[0].pop + \"%\"\n    }\n\n    getWindSpeed() {\n        return this.data.weatherData.current.wind_speed + \"km/h\"\n    }\n\n    getTimezone() {\n        return this.data.timezone\n    }\n\n    getWeeklyDescr(i) {\n        return this.data.weatherData.daily[i].weather[0].main\n    }\n\n    getWeeklyTemp(i) {\n        return (this.data.weatherData.daily[i].temp.day - 273.15).toFixed(1) + '°C';\n    }\n\n    getWeeklyTempMin(i) {\n        return (this.data.weatherData.daily[i].temp.min - 273.15).toFixed(1) + '°C';\n    }\n\n    getWeeklyIcon(i) {\n        return `http://openweathermap.org/img/wn/${this.data.weatherData.daily[i].weather[0].icon}@4x.png`\n    }\n\n}\n\n\n\n//# sourceURL=webpack://weather_app/./dist/weatherData.js?");

/***/ }),

/***/ "./src/APIFunctions.js":
/*!*****************************!*\
  !*** ./src/APIFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoords\": () => (/* binding */ getCoords),\n/* harmony export */   \"geolocation\": () => (/* binding */ geolocation)\n/* harmony export */ });\n/* harmony import */ var _DOMFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMFunctions */ \"./src/DOMFunctions.js\");\n\n\nasync function geolocation() {\n    try {\n        const promise = await new Promise((resolve, reject) => {\n            navigator.geolocation.getCurrentPosition(resolve, reject)\n        })\n        let lat = promise.coords.latitude;\n        let lon = promise.coords.longitude\n        const data = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=f01e320c417dd9583e7ed5e57fb13e71`, { mode: \"cors\" })\n        const geoData = await data.json()\n            // console.log(geoData, \"user geolocation data fetch\")\n        _DOMFunctions__WEBPACK_IMPORTED_MODULE_0__.search(geoData[0].name)\n    } catch (error) {\n        console.log(error, \"ERROR: failed fetching geolocation API\")\n    };\n}\n\n//gets JSON data from operweathermap, \n//the first is the geolocation API which feeds information on the timezone and latitude\n//the second is OneCallAPI which gives us current weather as well as more data(needs lat and lon from geolocation API) \nasync function getCoords(url) {\n    try {\n        const response1 = await fetch(url, { mode: \"cors\" });\n        const geoData = await response1.json();\n        // console.log(geoData, \"openweathermap reverse geolocation API fetch\")\n\n        const name = geoData[0].name;\n        const country = geoData[0].country;\n        const lat = geoData[0].lat\n        const lon = geoData[0].lon\n\n        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&exclude=minutely&appid=f01e320c417dd9583e7ed5e57fb13e71`, { mode: \"cors\" })\n        const weatherData = await response2.json();\n        // console.log(weatherData, \"openweathermap onecall API fetch\")\n        return { name, country, weatherData };\n    } catch (error) {\n        console.log(error, \"ERROR: failed fetching geolocation/onecall API\")\n    }\n\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/APIFunctions.js?");

/***/ }),

/***/ "./src/DOMFunctions.js":
/*!*****************************!*\
  !*** ./src/DOMFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _APIFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIFunctions */ \"./src/APIFunctions.js\");\n/* harmony import */ var _dist_weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/weatherData */ \"./dist/weatherData.js\");\n\n\n\nconst input = document.getElementById(\"input\")\nconst city = document.getElementById(\"city\")\nconst flag = document.getElementById(\"flag\")\nconst country = document.getElementById(\"country\")\nconst temp = document.getElementById(\"temperature\")\nconst description1 = document.getElementById(\"description1\")\nconst description2 = document.getElementById(\"description2\")\nconst icon = document.getElementById(\"icon\")\nconst time = document.getElementById(\"time\")\nconst feelsLike = document.getElementById(\"feelsLike\")\nconst humidity = document.getElementById(\"humidity\")\nconst pop = document.getElementById(\"chanceOfPrecipitation\")\nconst windSpeed = document.getElementById(\"windSpeed\")\nconst weekDaysDiv = document.querySelectorAll(\"#weekday\")\n\nlet data\n\n//basic url for search. set for \"london\" if geolocation is off\nfunction url(inputValue) {\n    inputValue = inputValue == false ? \"london\" : inputValue;\n    return `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=f01e320c417dd9583e7ed5e57fb13e71`;\n}\n\n//fetch a new set of data given the search value and populate the screen\nasync function search(inputValue) {\n    data = new _dist_weatherData__WEBPACK_IMPORTED_MODULE_1__.weatherData(await _APIFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoords(url(inputValue)));\n    currentTemp();\n}\n\n///populate the screen with information\nfunction currentTemp() {\n    try {\n        city.textContent = data.getCity()\n        country.textContent = `(${data.getCountry()})`\n        flag.src = data.getFlag();\n        temp.textContent = data.getCurrentTemp();\n        description1.textContent = data.getDescription1();\n        description2.textContent = data.getDescription2();\n        icon.src = data.getIcon();\n        feelsLike.textContent = data.getFeelsLike()\n        humidity.textContent = data.getHumidity()\n        pop.textContent = data.getProbabilityOfRain()\n        windSpeed.textContent = data.getWindSpeed()\n        getTime();\n        dailyTemp()\n\n        console.log(`${data.getCurrentTemp()} updated page for ${data.getCity()} at ${new Date()}`)\n\n    } catch (e) {\n        description1.textContent = \"Ooops! Something went wrong!\"\n        description1.style.fontWeight = \"bolder\"\n        description2.textContent = e;\n        city.textContent = country.textContent = flag.src = \"\";\n        document.getElementById(\"right\").style.display = \"none\"\n        document.getElementById(\"submit\").style.display = \"none\"\n        console.log(e)\n    }\n}\n\nfunction dailyTemp() {\n    const DAYS = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\n    let day = new Date().getDay() + 1;\n    for (let i = 0; i < weekDaysDiv.length; i++) {\n\n        if (day > 6) day = 0;\n        let weekday = document.createElement(\"div\");\n        weekday.setAttribute(\"id\", \"weekday\");\n        weekday.textContent = DAYS[day];\n        day++\n\n        let descr = document.createElement(\"div\")\n        descr.setAttribute(\"id\", \"descrBottom\");\n        descr.textContent = data.getWeeklyDescr(i);\n\n        let temp = document.createElement(\"div\");\n        temp.setAttribute(\"id\", \"tempBottom\")\n        temp.textContent = data.getWeeklyTemp(i)\n\n        let minTemp = document.createElement(\"div\");\n        minTemp.setAttribute(\"id\", \"minTempBottom\");\n        minTemp.textContent = data.getWeeklyTempMin(i);\n\n        let icon = document.createElement(\"img\")\n        icon.src = data.getWeeklyIcon(i)\n        icon.setAttribute(\"id\", \"iconWeek\")\n\n        weekDaysDiv[i].appendChild(weekday)\n        weekDaysDiv[i].appendChild(descr)\n        weekDaysDiv[i].appendChild(temp)\n        weekDaysDiv[i].appendChild(minTemp)\n        weekDaysDiv[i].appendChild(icon)\n    }\n}\n\n//get time for the area selected\nfunction getTime() {\n    let timer = new Date()\n    time.textContent = timer.toLocaleTimeString(\"en-GB\", { timeZone: data.getTimezone() });\n    setTimeout(getTime, 1000);\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/DOMFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _APIFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIFunctions */ \"./src/APIFunctions.js\");\n/* harmony import */ var _DOMFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMFunctions */ \"./src/DOMFunctions.js\");\n\n\n\nconst search = document.getElementById(\"submit\");\nconst input = document.getElementById(\"input\")\n\nlet lastSearch = \"\"\n\nfunction init() {\n    if (lastSearch == \"\") {\n        _APIFunctions__WEBPACK_IMPORTED_MODULE_0__.geolocation()\n    } else {\n        _DOMFunctions__WEBPACK_IMPORTED_MODULE_1__.search(lastSearch)\n    }\n}\n\ninit()\n    ///refresh the page with new weather information every 10 minutes\nsetInterval(init, 600000);\n\n\nsearch.addEventListener(\"click\", () => {\n    _DOMFunctions__WEBPACK_IMPORTED_MODULE_1__.search(input.value)\n    lastSearch = input.value\n    input.value = \"\";\n})\n\nwindow.addEventListener(\"keypress\", (e) => {\n    if (e.key === \"Enter\") {\n        _DOMFunctions__WEBPACK_IMPORTED_MODULE_1__.search(input.value)\n        lastSearch = input.value\n        input.value = \"\";\n    }\n})\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;