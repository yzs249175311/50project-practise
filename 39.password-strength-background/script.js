var password = document.querySelector("#password");
var background = document.querySelector(".background");
var count = 8;
password.addEventListener("input", function (e) {
    var value = e.currentTarget.value.length;
    var blurValue = (8 - value) < 0 ? 0 : (8 - value);
    background.style.filter = "blur(".concat(blurValue, "px)");
});
