let boxs = document.querySelectorAll(".box");
let container = document.querySelector("#container");
container.addEventListener("scroll", update);
update();
function update() {
  boxs.forEach((box) => {
    let triggerHeight = window.innerHeight * 0.9;
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerHeight) box.classList.add("show");
    else box.classList.remove("show");
  });
}
