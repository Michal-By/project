const selectDeparture = document.getElementById("cityNameSelect");
const arrival = document.getElementById("arrival");
const cityName = document.querySelector('.city-name');
const cityName2 = document.querySelector('.city-name2');

const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const photo1 = document.querySelector('.photo1');


const pressure = document.querySelector('.pressure');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const pressure1 = document.querySelector('.pressure1');
const temperature1 = document.querySelector('.temp1');
const humidity1 = document.querySelector('.humidity1');

const apilink = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '&appid=317e19e66188867b305de8edb92902a0';
const units = '&units=metric';
const lang = '&lang=pl'
let city;
let url;


if ('geolocation' in navigator) { 
    navigator.geolocation.getCurrentPosition(setPosition);
} else {
    console.log(error);
}

selectDeparture.addEventListener ("change", () => {
    getWeather();
})
arrival.addEventListener ("change", () => {
    getWeather1();
})  


function setPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeather(lat, lon);
}

const getWeather = (lat, lon) => {

    city = (!selectDeparture.value) ? `lat=${lat}&lon=${lon}` : `q=${selectDeparture.value}`;
    url = apilink + city + apiKey + lang + units;

    fetch(url)
        .then((res) => res.json())
        .then(data => {
            const temp = data.main.temp;
            const hum = data.main.humidity;
            const pres = data.main.pressure;
            const status = Object.assign({}, ...data.weather);

            cityName.textContent = data.name;
            pressure.textContent = pres + ' hPa';
            temperature.textContent = Math.floor(temp) + '°C';
            humidity.textContent = hum + ' %';

            warning.textContent = '';

            if (status.main == "Thunderstorm") {
                photo.setAttribute('src', "https://freesvg.org/img/weather-storm.png")
            } else if (status.main == "Drizzle") {
                photo.setAttribute('src', "https://freesvg.org/img/weather-showers-scattered.png")
            } else if (status.main == "Rain") {
                photo.setAttribute('src', "https://freesvg.org/img/weather-showers.png")
            } else if (status.main == "Snow") {
                photo.setAttribute('src', "https://freesvg.org/img/Schnee.png")
            } else if (status.id > 700 && status.id <= 799) {
                photo.setAttribute('src', "https://freesvg.org/img/fog.png")
            } else if (status.main == "Clear") {
                photo.setAttribute('src', "https://freesvg.org/img/1364063978.png")
            } else if (status.main == "Clouds") {
                photo.setAttribute('src', "https://freesvg.org/img/Cloud_1_by_Merlin2525.png")
            } else {
                document.getElementsByClassName("photo").src = "./assets/unknown.png";
                photo.setAttribute('src', "https://pl.freepik.com/darmowe-ikony/znak-zapytania_744108.htm")
            }
        })
        .catch(() => {
            warning.textContent = 'Nie mogę pobrać lokalizacji.'
        })
};
const getWeather1 = (lat, lon) => {

    city = (!arrival.value) ? `lat=${lat}&lon=${lon}` : `q=${arrival.value}`; ;
    url = apilink + city + apiKey + lang + units;

    fetch(url)
        .then((res) => res.json())
        .then(data => {
            const temp = data.main.temp;
            const hum = data.main.humidity;
            const pres = data.main.pressure;
            const status = Object.assign({}, ...data.weather);

            cityName2.textContent = data.name;
            pressure1.textContent = pres + ' hPa';
            temperature1.textContent = Math.floor(temp) + '°C';
            humidity1.textContent = hum + ' %';


            if (status.main == "Thunderstorm") {
                photo1.setAttribute('src', "https://freesvg.org/img/weather-storm.png")
            } else if (status.main == "Drizzle") {
                photo1.setAttribute('src', "https://freesvg.org/img/weather-showers-scattered.png")
            } else if (status.main == "Rain") {
                photo1.setAttribute('src', "https://freesvg.org/img/weather-showers.png")
            } else if (status.main == "Snow") {
                photo1.setAttribute('src', "https://freesvg.org/img/Schnee.png")
            } else if (status.id > 700 && status.id <= 799) {
                photo1.setAttribute('src', "https://freesvg.org/img/fog.png")
            } else if (status.main == "Clear") {
                photo1.setAttribute('src', "https://freesvg.org/img/1364063978.png")
            } else if (status.main == "Clouds") {
                photo1.setAttribute('src', "https://freesvg.org/img/Cloud_1_by_Merlin2525.png")
            } else {
                document.getElementsByClassName("photo").src = "./assets/unknown.png";
                photo.setAttribute('src', "https://pl.freepik.com/darmowe-ikony/znak-zapytania_744108.htm")
            }
        })
        .catch(() => {
        })
};

module.exports = {
    getWeather,
    getWeather1
}