let imgs = document.querySelectorAll("img");
let navs = document.querySelectorAll("nav ul li");

function imgHiddenAll() {
  imgs.forEach((img) => {
    img.classList.remove("show");
  });
}

function navHiddenAll() {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}

navs.forEach((item, index) => {
  item.addEventListener("click", (e: MouseEvent) => {
    imgHiddenAll();
    navHiddenAll();
    (<HTMLOListElement>e.currentTarget).classList.add("active");
    imgs[index].classList.add("show");
  });
});
