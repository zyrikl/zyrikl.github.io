function changeColorBlue() {
    var tesxt = document.getElementById("tesxt");
    tesxt.classList.add("blueColor");
    tesxt.classList.remove("redColor");
    tesxt.classList.remove("blackColor");
    tesxt.classList.remove("greenColor");
    tesxt.classList.remove("yellowColor");
}
function changeColorRed() {
    tesxt.classList.add("redColor");
    tesxt.classList.remove("blueColor");
    tesxt.classList.remove("blackColor");
    tesxt.classList.remove("greenColor");
    tesxt.classList.remove("yellowColor");
}
function changeColorBlack() {
    tesxt.classList.add("blackColor");
    tesxt.classList.remove("blueColor");
    tesxt.classList.remove("redColor");
    tesxt.classList.remove("greenColor");
    tesxt.classList.remove("yellowColor");
}
function changeColorGreen() {
    tesxt.classList.add("greenColor");
    tesxt.classList.remove("blueColor");
    tesxt.classList.remove("redColor");
    tesxt.classList.remove("blackColor");
    tesxt.classList.remove("yellowColor");
}
function changeColorYellow() {
    tesxt.classList.add("yellowColor");
    tesxt.classList.remove("blueColor");
    tesxt.classList.remove("redColor");
    tesxt.classList.remove("blackColor");
    tesxt.classList.remove("greenColor");
}
var ef = document.getElementById("textSize").value;
tesxt.style.fontSize = ef;
document.addEventListener("contextmenu", event => {
    event.preventDefault();
});