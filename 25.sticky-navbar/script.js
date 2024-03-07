let nav = document.querySelector("nav");
let limit = window.screen.height * 0.3;

document.onscroll = function (e) {
  if (window.scrollY > limit) {
    if (!nav.classList.contains("limit")) {
      limit -= 20;
    }
    nav.classList.add("limit");
  } else {
    if (nav.classList.contains("limit")) {
      limit += 20;
    }
    nav.classList.remove("limit");
  }
};
