var page = document.querySelectorAll(".page");
var menu_open = document.querySelector("#menu");
var menu_close = document.querySelector("#close");
menu_open.addEventListener("click", function (e) {
  page.forEach(function (item) {
    item.classList.remove("close");
    item.classList.add("active");
  });
});
menu_close.addEventListener("click", function () {
  page.forEach(function (item) {
    item.classList.remove("active");
    item.classList.add("close");
  });
});
