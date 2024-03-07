let navButton = document.querySelector("#nav-button");
let nav = document.querySelector("nav");

navButton.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
