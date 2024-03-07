var imgs = document.querySelectorAll("img");
var navs = document.querySelectorAll("nav ul li");
function imgHiddenAll() {
  imgs.forEach(function (img) {
    img.classList.remove("show");
  });
}
function navHiddenAll() {
  navs.forEach(function (nav) {
    nav.classList.remove("active");
  });
}
navs.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    imgHiddenAll();
    navHiddenAll();
    e.currentTarget.classList.add("active");
    imgs[index].classList.add("show");
  });
});
