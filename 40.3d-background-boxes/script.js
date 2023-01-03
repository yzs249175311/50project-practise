var main = document.querySelector("main");
var magic = document.querySelector(".magic");
for (var i = 0; i < 16; i++) {
    var div = document.createElement("div");
    div.style.backgroundImage = "url('../assets/image/image6.jpeg')";
    div.style.backgroundPosition = "-".concat((i % 4) * 120, "px -").concat((Math.floor(i / 4) % 4) * 120, "px");
    div.className = "item";
    main.appendChild(div);
}
magic.addEventListener("mousedown", function () {
    magic.className = "magic active";
});
magic.addEventListener("mouseup", function () {
    magic.className = "magic";
});
magic.addEventListener("click", function () {
    main.classList.toggle("active");
});
