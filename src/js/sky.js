import {date} from "./date"
const selectArrival = document.getElementById("arrival");
const data = document.getElementById("today")


fetch(`https://api.nbp.pl/api/exchangerates/rates/a/USD/?format=json`)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log("DOLAR", data.rates[0].mid);
        const cenaUSD = data.rates[0].mid;
    });
let ok;
let to;

    selectArrival.addEventListener("change", () => {

        ok = selectArrival.value
        if (ok == `Warszawa`) {
            to = `WAW-sky`
        }
        price(to)
    })
let z;
data.addEventListener("input", () =>{
    z = data.value
})
console.log(z)
const price = (city) => {

    fetch(
            `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/KRK-sky/${city}/2021-09-01`, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "9f92b786bemsh0efc83eafd779ddp1b2357jsn0af4948da74a",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            }
        )

        .then((resp) => resp.json())
        .then((response) => {
            // console.log(response);
            // console.log("CENA USD w drugim fetchu", cenaUSD);
            console.log(response.Quotes[0].MinPrice);
            console.log(response.Carriers[0].Name);
        })
        .catch((err) => {
            console.error(err);
        });

}


module.exports = {
    price
}