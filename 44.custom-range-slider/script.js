var main = document.querySelector("main");
var range = document.querySelector("input[type=range]");
var show = document.querySelector("#show");
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
function currentPosition() {
    show.innerText = range.value;
    var range_width = getComputedStyle(range).getPropertyValue("width").match(/\d+/);
    var show_width = getComputedStyle(show).getPropertyValue("width").match(/\d+/);
    var num = range.value;
    var left = num * (range_width / 100) - show_width / 2 + scale(num, 0, 100, 13, -13);
    show.style.left = left + "px";
}
currentPosition();
range.addEventListener("input", currentPosition);
