const searchElement = function () {
    return `
    <input type="text" class="search-bar" name="country-name" required placeholder="Type a country name...">
	<button id="search-country" type="button">Search</button>
    `
}

let countriesElement = function (countryName, capitalName, continent, flag) {
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


    // - - - - - FETCH DATA - - - - - 

    const response = await fetch("https://restcountries.com/v3.1/all")
    const responseJson = await response.json()
    // console.log(responseJson)


    // - - - - - BUTTON COMPONENT - - - - -

    rootElement.insertAdjacentHTML("beforebegin", searchElement())

    const searchButton = document.getElementById("search-country")
    const searchBar = document.querySelector(".search-bar")

    searchButton.addEventListener("click", function () {

        if (searchBar.value === "") {

            alert("Please type a country name")

        } else {

            for (const countryData of responseJson) {
                if (searchBar.value.toUpperCase() === countryData.name.common.toUpperCase()) {
                    rootElement.insertAdjacentHTML("afterbegin", countriesElement(countryData.name.common, countryData.capital, countryData.continents, countryData.flags.png))
                }
            }

        }

    })

}



window.addEventListener("load", loadEvent)