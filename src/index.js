import * as apiFunctions from "./APIFunctions";
import * as domFunctions from "./DOMFunctions"

const search = document.getElementById("submit");
const input = document.getElementById("input")

let lastSearch = ""

function init() {
    if (lastSearch == "") {
        apiFunctions.geolocation()
    } else {
        domFunctions.search(lastSearch)
    }
}

init()
    ///refresh the page with new weather information every 10 minutes
setInterval(init, 600000);


search.addEventListener("click", () => {
    domFunctions.search(input.value)
    lastSearch = input.value
    input.value = "";
})

window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        domFunctions.search(input.value)
        lastSearch = input.value
        input.value = "";
    }
})