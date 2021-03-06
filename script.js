let main = document.querySelector("main");
let toTop = document.querySelector("#top");
let projects = [
  "01.expanding-cards",
  "02.progress-steps",
  "03.rotating-navigation-animation",
  "04.hidden-search-widget",
  "05.blurry-loading",
  "06.scroll-animation",
  "07.split-landing-page",
  "08.form-input-wave",
  "09.sound-board",
  "10.dad-jokes",
  "11.event-keycodes",
  "12.faq-collapse",
  "13.random-choice-picker",
  "14.animated-navigation",
  "15.incrementing-counter",
  "16.drink-water",
  "17.movie-app",
  "18.background-slider",
  "19.theme-clock",
  "20.button-ripple-effect",
  "21.drag-n-drop",
  "22.drawing-app",
  "23.kinetic-loader",
  "24.content-placeholder",
  "25.sticky-navbar",
  "26.double-vertical-slider",
  "virtual scroller",
  "virtual-scroller-v2",
];

projects.forEach(function (name) {
  main.innerHTML += `<a href="${name}/index.html" target="_blank">${name}</a>`;
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    toTop.style.visibility = "visible";
    toTop.style.opacity = "1";
  } else {
    toTop.style.visibility = "hidden";
    toTop.style.opacity = "0";
  }
});
