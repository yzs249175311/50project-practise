let main = document.querySelector("main");
let range: HTMLInputElement = document.querySelector("input[type=range]");
let show: HTMLDivElement = document.querySelector("#show");

function scale(num, in_min, in_max, out_min, out_max): any {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function currentPosition(): void {
  show.innerText = range.value;
  let range_width: number = parseInt(
    getComputedStyle(range).getPropertyValue("width").match(/\d+/)[0],
  );
  let show_width: number = parseInt(
    getComputedStyle(show).getPropertyValue("width").match(/\d+/)[0],
  );
  let num: number = parseInt(range.value);
  let left =
    num * (range_width / 100) - show_width / 2 + scale(num, 0, 100, 13, -13);
  show.style.left = left + "px";
}

currentPosition();
range.addEventListener("input", currentPosition);
