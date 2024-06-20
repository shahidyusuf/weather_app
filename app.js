const cityInput = document.querySelector(".city-input")
const searchButton = document.querySelector(".search-btn")

const API_KEY = "d7459cda9c587d88651a67e428cc1289";

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); // get user input city name and removed extra
    if(!cityName) return;
    // console.log(cityName)

    const geoCoding_API_Url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;
    fetch(geoCoding_API_Url).then(res => res.json()).then(data =>{
        // console.log(data)
        if (!data.length) return alert("")
    }).catch(() => {
        alert("An error occurred while fetching the coordinates..!")
    })
}


searchButton.addEventListener("click", getCityCoordinates)