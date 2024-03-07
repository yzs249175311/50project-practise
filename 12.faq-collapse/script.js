let arr = ["fa-angle-down", "fa-times"];

let iButtons = document.querySelectorAll(".question-group>i");

iButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains(arr[0])) {
      item.classList.remove(arr[0]);
      item.classList.add(arr[1]);
      item.parentElement.querySelector(`.${arr[1]}~.answer`).style.display =
        "block";
      item.parentElement.classList.add("show");
    } else {
      item.classList.remove(arr[1]);
      item.classList.add(arr[0]);
      item.parentElement.querySelector(`.${arr[0]}~.answer`).style.display =
        "none";
      item.parentElement.classList.remove("show");
    }
  });
});
