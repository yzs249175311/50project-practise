var btn = document.querySelector("input[type=button]");
var main = document.querySelector("main");
var notifyBox = document.createElement("div");
var messageArr = ["one", "two", "three", "four"];
var colorArr = ["green", "red", "blue"];
notifyBox.classList.add("notifyBox");
main.appendChild(notifyBox);
function createNotify() {
    var span = document.createElement("span");
    span.innerText = "message " + messageArr[Math.floor(Math.random() * (messageArr.length))];
    span.classList.add("notify");
    span.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
    setTimeout(function () {
        span.remove();
    }, 2000);
    return span;
}
btn.addEventListener("click", function () {
    notifyBox.appendChild(createNotify());
});
