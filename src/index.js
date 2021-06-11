import style from "./css/index.scss"
import {
    getWeather
} from "./js/weather"

import {
    date
} from "./js/date"

// Date




today.setAttribute("min", date());
tommorow.setAttribute("min", date());
today.addEventListener("change", () => {
    tommorow.setAttribute("min", today.value)
})

// popup show/hide


const form = document.querySelector("form");
const input = form.querySelector("select");
const select = form.querySelector("input");
const myForm = document.getElementById("myForm");
const formDetail = document.getElementById("detail")
const weather = document.getElementById("weather");
const weather1 = document.getElementById("weather1");

const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");
const nextPage = document.getElementById("nextPage");
const homePage = document.getElementById("homePage");
const logo = document.getElementById("logo");
const btnLogin = document.getElementById("btn login");
const btnCancel = document.getElementById("btn cancel");
const logout = document.getElementById("logout")


btnCancel.addEventListener("click", function () {
    myForm.style.display = "none";
})

logout.addEventListener("click", () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
    weather.style.display = "block";
    weather1.style.display = "none"
    submitPage.style.display = "none"
    form.reset();
    myForm.reset();
    formDetail.reset();
    myForm.style.display = "none";
})

homePage.addEventListener("click", () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
    weather.style.display = "block";
    weather1.style.display = "none"
    submitPage.style.display = "none"

    myForm.style.display = "none";
})

logo.addEventListener("click", () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
    weather.style.display = "block";
    weather1.style.display = "none"
    submitPage.style.display = "none"

    myForm.style.display = "none";
})

const selectArrival = document.getElementById("arrival");
const data = document.getElementById("today")
const dataArrival = document.getElementById("tommorow")

let ok;
let city;
let z;
let y;
let cena;
let cena1
const price = (city1, city2, day) => {
    fetch(
            `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${city1}/${city2}/${day}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "9f92b786bemsh0efc83eafd779ddp1b2357jsn0af4948da74a",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            }
        )

        .then((resp) => resp.json())
        .then((response) => {
            cena = response.Quotes[0].MinPrice
            document.querySelector(".priceTo").textContent = `${cena}`+` PLN`


        })
        .catch((err) => {
            console.error(err);
        });
}
const price1 = (city1, city2, day) => {
    fetch(
            `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/pl-PL/${city1}/${city2}/${day}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "9f92b786bemsh0efc83eafd779ddp1b2357jsn0af4948da74a",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            }
        )

        .then((resp) => resp.json())
        .then((response) => {
            cena1 = response.Quotes[0].MinPrice
            document.querySelector(".priceFrom").textContent = `${cena1}`+` PLN`
        })
        .catch((err) => {
            console.error(err);
        });
}



const miej = document.getElementById("miejsca");
const planePhoto = document.getElementById("planePhoto");

selectArrival.addEventListener("change", () => {


    ok = selectArrival.value
    if (ok == `Warszawa`) {
        planePhoto.setAttribute("src", "https://cdn.seatguru.com/en_US/img/20201208213923/seatguru/airlines_new/United_Airlines/United_Airlines_Embraer_EMB-170.svg")
        city = `WAW-sky`
    } else if (ok == `Londyn`) {
        planePhoto.setAttribute("src", "https://cdn.seatguru.com/en_US/img/20201208213923/seatguru/airlines_new/United_Airlines/United_Airlines_Boeing_737-800_F.svg")
        city = `LHR-sky`
    } else if (ok == `Nowy York`) {
        planePhoto.setAttribute("src", "https://cdn.seatguru.com/en_US/img/20201208213923/seatguru/airlines_new/United_Airlines/United_Airlines_UA_Boeing_787-9_B.svg")
        city = `JFK-sky`
    }
    today.addEventListener("input", () => {
        z = data.value
    })
    tommorow.addEventListener("input", () => {
        y = dataArrival.value
    })
    document.querySelector(".sumbitFlightTo").textContent = `Cena biletu Kraków - ` + `${selectArrival.value}`
    document.querySelector(".sumbitFlightFrom").textContent = `Cena biletu ` + `${selectArrival.value}` + ` - Kraków`

})

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()

document.getElementById("currentDay").innerHTML = `Dzisiejsza data:` + ` ` + `${date()}` + ` ` + `${time}`;



const place = document.getElementById("place")


form.addEventListener("change", (e) => {
    nextPage.addEventListener("click", () => {
        if (input.value && select.value) {
            myForm.style.display = "block";
            price(`KRK-sky`, city, z)
            price1(city, `KRK-sky`, y)
        }
    })
})
formDetail.addEventListener("change", (e) => {
    end.addEventListener("click", () => {
        if (formDetail.querySelectorAll("select").value > 0) {
            submitPage.style.display = "block";
        }
    })
})

btnLogin.addEventListener("click", validate)


function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "user" && password == "user123") {
        alert("Login successfully");
        firstPage.style.display = "none";
        weather.style.display = "none";
        myForm.style.display = "none";
        secondPage.style.display = "block";
        logout.style.display = "block"
        return false;
    } else {
        alert("Zły login lub hasło")
    }
}







document.getElementById("select").addEventListener("change", calc)

function calc() {

    let inputValue = cena
    if (inputValue) {
        fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${this.value}/?format=json`)
            .then((resp) => resp.json())
            .then(function (data) {
                document.querySelector(".priceTo1").innerHTML = `to `+ parseFloat(`${inputValue/ data.rates[0].ask}`).toFixed(2)
            })
    }
}
document.getElementById("select1").addEventListener("change", calc1)

function calc1() {
    let inputValue = cena1
    if (inputValue) {
        fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${this.value}/?format=json`)
            .then((resp) => resp.json())
            .then(function (data) {
                document.querySelector(".priceFrom1").innerText =`to `+parseFloat(`${ inputValue/ data.rates[0].ask}`).toFixed(2)
            })
    }
}



const end = document.getElementById("end");
const submitPage = document.getElementById("submitPage");
end.addEventListener("click", () => {
    secondPage.style.display = "none";
    submitPage.style.display = "block"
    weather1.style.display = "block"

})
document.getElementById("sit1").addEventListener("change", () => {
    document.querySelector(".submitSit").textContent = ` ` + `${document.getElementById("sit1").value}`
})
document.getElementById("miejsca1").addEventListener("change", () => {
    document.querySelector(".submitPlace").textContent = ` ` + `${document.getElementById("miejsca1").value}`
})
document.getElementById("laggage").addEventListener("change", () => {
    document.querySelector(".luggage").textContent = document.getElementById("laggage").value

})