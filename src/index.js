import style from "./css/index.scss"
import {
    sum
} from "./sum";
console.log("Hello World");
console.log(sum(2, 6));

let heading = document.querySelector("#demo"),
    sumValue = sum(10, 16);
heading.innerHTML = `10 + 16 = ${sumValue}`;

import Icon from "./assets/img/proba.jpg"
let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");