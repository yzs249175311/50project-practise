var image = document.querySelector("#image");
var counter = document.querySelector("#counter");

function addLove(x, y) {
  var love = document.createElement("i");
  love.className = "fa fa-heart love";
  love.ariaHidden = true;
  love.style.left = x + "px";
  love.style.top = y + "px";
  image.appendChild(love);
  setTimeout(() => {
    love.remove();
  }, 400);
}

image.addEventListener("dblclick", function (e) {
  counter.innerText = parseInt(counter.innerText) + 1 + "";
  let rect = image.getBoundingClientRect();
  let left = e.clientX - rect.x;
  let top = e.clientY - rect.y;
  addLove(left, top);
});
