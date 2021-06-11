const today = document.getElementById("today");
const tommorow = document.getElementById("tommorow")

function date() {
    let currentDate = new Date();
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1;
    let yyyy = currentDate.getFullYear();
    dd < 10 ? dd = "0" + dd : null;
    mm < 10 ? mm = "0" + mm : null;
    return (currentDate = yyyy + '-' + mm + '-' + dd);
}



module.exports = {
    date
}