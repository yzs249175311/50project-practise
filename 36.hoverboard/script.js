var main = document.querySelector("main");
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
for (var i = 0; i < 500; i++) {
  var div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("mouseenter", function (e) {
    var box = e.currentTarget;
    box.classList.add("active");
    var color = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = color;
    box.style.boxShadow = "0 0 15px 2px ".concat(color);
  });
  div.addEventListener("mouseleave", function (e) {
    var box = e.currentTarget;
    setTimeout(function () {
      box.classList.remove("active");
      box.style.backgroundColor = "#1d1d1d";
      box.style.boxShadow = "0 0 ";
    }, 100);
  });
  main.appendChild(div);
}
