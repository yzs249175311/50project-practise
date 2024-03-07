let show = document.querySelector("#show");
let length = document.querySelector("#length");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let generate = document.querySelector("#generate");
let clipboard = document.querySelector("#clipboard");

let passDic = {
  lower: "qwertyuiopasdfghjklzxcvbnm",
  upper: "QWERTYUIOPASDFGHJKLZXCVBNM",
  numbers: "1234567890",
  symbols: `\`~!@#$%^&*()_+-={}[]:";'<>?,./|`,
};

function generatePassword() {
  let arr = [upper, lower, numbers, symbols].reduce((oldVal, newVal) => {
    if (newVal.checked) {
      return oldVal + passDic[newVal.value];
    }
    return oldVal;
  }, "");

  let res = "";
  for (let i = parseInt(length.value); i > 0; i--) {
    res = res + arr.at(Math.floor(Math.random() * arr.length));
  }
  show.innerText = res;
}

generate.addEventListener("click", generatePassword);

clipboard.addEventListener("click", async function () {
  if (show.innerText) {
    await window.navigator.clipboard.writeText(show.innerText);
    alert("已经复制了密码: " + show.innerText);
  }
});
