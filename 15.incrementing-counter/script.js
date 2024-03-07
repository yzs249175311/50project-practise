let numbers = document.querySelectorAll(".number");

numbers.forEach((item) => {
  let dataTarget = parseInt(item.getAttribute("data-target"));
  let timer = new createIncrementTimer(dataTarget, item);
  timer.start();
});

function createIncrementTimer(dataTarget, node) {
  let timer = null;
  let currentCount = 0;
  function start() {
    currentCount += Math.ceil(dataTarget / 200);
    if (currentCount < dataTarget) {
      node.innerText = currentCount;
      timer = setTimeout(start, 10);
    } else {
      clearTimeout(timer);
      console.log(dataTarget);
      node.innerText = dataTarget;
    }
  }
  return { start };
}
