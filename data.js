const API_KEY = "fb4aef7b06809a5dc3118ae772fd5c88";
const DEFAULT_VALUE = '__';
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");


const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");



searchInput.addEventListener("change", function (event) {
  console.log(event.target.value); ////?
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
    .then(response => response.json())
    .then((data) => {
      console.log(data); 

      cityName.innerHTML = data.name;
      weatherState.innerHTML = data.weather[0].description;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log(weatherIcon.src);
      temperature.innerHTML = data.main.temp;

      sunrise.innerHTML = data.sys.sunrise;
      sunset.innerHTML = data.sys.sunset;
      humidity.innerHTML = data.main.humidity;
      windSpeed.innerHTML = data.wind.speed;
    });
})