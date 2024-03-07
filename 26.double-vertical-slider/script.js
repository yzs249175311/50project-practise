let divs = document.querySelectorAll("aside>div");
let main = document.querySelector("main");
let aside = document.querySelector("aside");
let up = document.querySelector(".up");
let down = document.querySelector(".down");

let upanddown = {
  imgCount: divs.length,
  count: 1,
  up() {
    this.count = (this.count % this.imgCount) + 1;
    console.log(this.count);
  },

  down() {
    if (this.count <= 1) {
      this.count = this.imgCount;
    } else {
      this.count--;
    }
  },
};

function upImg() {
  upanddown.up();
  update();
}
function downImg() {
  upanddown.down();
  update();
}
function update() {
  main.style.top = -(upanddown.imgCount - upanddown.count) * 100 + "vh";
  aside.style.top = (-upanddown.count + 1) * 100 + "vh";
}

up.addEventListener("click", upImg);
down.addEventListener("click", downImg);

update();
