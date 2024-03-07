let boxs = document.querySelectorAll(".box");
let image = document.querySelector("img");

class nodeTransfer {
  get node() {
    return this._node;
  }
  set node(node) {
    this._node = node;
  }
}
let nt = new nodeTransfer();

image.addEventListener("drag", function (e) {
  e.preventDefault();
});

image.addEventListener("dragstart", function (e) {
  nt.node = e.target;
});

image.addEventListener("drag", function (e) {
  this.style.opacity = 0.5;
});

image.addEventListener("dragend", function (e) {
  this.style.opacity = 1;
});

boxs.forEach((element) => {
  element.addEventListener("dragenter", function (e) {
    e.currentTarget.style.backgroundColor = "violet";
    e.currentTarget.style.borderStyle = "dashed";
  });
  element.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  element.addEventListener("dragleave", function (e) {
    e.currentTarget.style.backgroundColor = "#fff";
    e.currentTarget.style.borderStyle = "solid";
  });
  element.addEventListener("drop", function (e) {
    e.currentTarget.style.backgroundColor = "#fff";
    e.currentTarget.appendChild(nt.node);
    e.currentTarget.style.borderStyle = "dashed";
  });
});
