let buttons = [
  "airplane",
  "cheering",
  "dial-up-modem",
  "laughter",
  "payhone-coin-return",
];
let btnGroup = document.querySelector(".btnGroup");

buttons.forEach((button) => {
  let btn = document.createElement("button");
  btn.innerText = button;
  btn.addEventListener("click", () => {
    stopAll();
    let audio = document.getElementById(button);
    audio.classList.add("play");
    audio.play();
  });
  btnGroup.appendChild(btn);
});

function stopAll() {
  buttons.forEach((button) => {
    let audio = document.getElementById(button);
    if (audio.classList.contains("play")) {
      audio.classList.remove("play");
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
