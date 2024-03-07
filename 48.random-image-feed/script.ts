namespace random_image_feed {
  const unsplashURL = "https://source.unsplash.com/random/";
  let container = document.querySelector(".container")!;
  let count = 20;

  function init() {
    for (var i = 0; i < count; i++) {
      let img = document.createElement("img");
      img.src = `${unsplashURL}${randomSize()}`;
      container.appendChild(img);
    }
  }

  function randomSize() {
    return randomNr() + "x" + randomNr();
  }

  function randomNr() {
    return Math.floor(Math.random() * 10) + 300;
  }

  init();
}
