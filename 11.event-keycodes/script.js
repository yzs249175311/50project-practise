let key = document.querySelector("#key .value");
let keyCode = document.querySelector("#keyCode .value");
let code = document.querySelector("#code .value");

window.onkeydown = (e) => {
  console.log(key);
  console.log(keyCode);
  console.log(code);
  key.innerText = e.key;
  keyCode.innerText = e.keyCode;
  code.innerText = e.code;
};
