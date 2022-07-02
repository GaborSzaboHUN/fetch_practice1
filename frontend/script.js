/* 
const sectionElement = function (title, image, photographer, details) {
    return `
        <h1>Check the space</h1>
        <h3>${title}</h3>
        <iframe src="${image}"></iframe>
        <img src="${image}" alt="Image from space">
        <p>${photographer}</p>
        <p>${details}</p>
    `
}

const nasaApiKey = "nulBNTuYQMkvZlxM1YUWVMHu72zCgpFi8EwIpBaz"

console.log("load event előtt")

const loadEvent = async function () {
    const rootElement = document.getElementById("root")

    console.log("load event után")

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            rootElement.insertAdjacentHTML("beforeend", sectionElement(json.title, json.hdurl, json.copyright, json.explanation))
        })


    console.log("fetch előtt")

    setTimeout(function () {
        console.log("fetch előtt setTimout-tal")
    }, 5000);

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`)
    let responseJson = await response.json()

    console.log(responseJson)

    console.log("fetch után")

    rootElement.insertAdjacentHTML("beforeend", sectionElement(responseJson.title, responseJson.url, responseJson.copyright, responseJson.explanation))

    console.log("insert után")

}

window.addEventListener("load", loadEvent)
 */

// - - - - - - - - - - - - - - - - - - - - - - -

const countriesElement = function (countryName, capitalName, continent, flag) {
    return `
    <p>Name: </p>
    <h1>${countryName}</h1>
    <p>Capital: </p>
    <h2>${capitalName}</h2>
    <p>Continent: </p>
    <h3>${continent}</h3>
    <p>Flag: </p>
    <img src="${flag}" alt="Flag of ${countryName}">
    <hr>
    `
}

const loadEvent = async function () {
    const rootElement = document.getElementById("root")

    const response = await fetch("https://restcountries.com/v3.1/all")
    const responseJson = await response.json()
    console.log(responseJson)

    for (const countryData of responseJson) {
        rootElement.insertAdjacentHTML("beforeend", countriesElement(countryData.name.common, countryData.capital, countryData.continents, countryData.flags.png))
    }
}



window.addEventListener("load", loadEvent)