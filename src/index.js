import style from "./css/index.scss"

// popup show/hide

document.getElementById("btn cancel").addEventListener("click", function () {
    document.getElementById("myForm").style.display = "none";
})

const form = document.querySelector("form");
const input = form.querySelector("input");

form.addEventListener("submit", e => {
    e.preventDefault();

    //jeżeli wszystko ok to wysyłamy
    if (input.value.length >= 3) {
        document.getElementById("nextPage").addEventListener("click", function () {
            document.getElementById("myForm").style.display = "block";
        })
    } 
})