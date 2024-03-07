let btn: HTMLButtonElement = document.querySelector("input[type=button]")!;
let main = document.querySelector("main")!;
let notifyBox = document.createElement("div");

let messageArr = ["one", "two", "three", "four"];
let colorArr = ["green", "red", "blue"];

notifyBox.classList.add("notifyBox");
main.appendChild(notifyBox);

function createNotify() {
  let span = document.createElement("span");
  span.innerText =
    "message " + messageArr[Math.floor(Math.random() * messageArr.length)];
  span.classList.add("notify");
  span.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  setTimeout(() => {
    span.remove();
  }, 2000);
  return span;
}

btn.addEventListener("click", () => {
  notifyBox.appendChild(createNotify());
});
