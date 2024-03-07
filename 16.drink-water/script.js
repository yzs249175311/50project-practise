let cups = document.querySelectorAll(".select-number>div");
let totalWater = document.querySelector(".total-water");
let leftBox = document.querySelector(".left-box");
let fullBox = document.querySelector(".full-box");
let full = document.querySelector(".full");
let left = document.querySelector(".left");

cups.forEach((item, count) => {
  item.addEventListener("click", () => {
    // let count = item.classList[0].split('-')[1]
    updateBigCup(count + 1);
    updataSmallCup(count + 1);
  });
});

function updateBigCup(count) {
  // console.log(totalWater.clientHeight)
  fullBox.style.height = (count / 8) * 100 + "%";
  full.innerText = (count / 8) * 100 + "%";
  leftBox.style.height = ((8 - count) / 8) * 100 + "%";
  left.innerText = (1 - count / 8) * 2 + "L";
}
function updataSmallCup(count) {
  if (count < 8) {
    for (let index = count; index < 8; index++) {
      cups[index].classList.remove("selected");
    }
  }
  for (let index = 0; index < count; index++) {
    cups[index].classList.add("selected");
  }
}
