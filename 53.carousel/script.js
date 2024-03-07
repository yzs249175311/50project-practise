var main = document.querySelector("main");
var container = document.querySelector(".carousel-container");
var items = document.querySelectorAll(".carousel-item");
var indexItem = 0;
function init() {
  container.style.transform = "translateX(0)";
  var nav = document.createElement("div");
  nav.className = "nav";
  items.forEach(function (item, index) {
    var navItem = document.createElement("div");
    navItem.className = "nav-item";
    if (indexItem === index) {
      navItem.classList.add("active");
    }
    nav.appendChild(navItem);
    navItem.addEventListener("click", function () {
      if (indexItem === index) {
        return;
      }
      selectNav(index);
    });
  });
  main.appendChild(nav);
  var nextBtn = document.createElement("div");
  var prevBtn = document.createElement("div");
  nextBtn.className = "next-btn";
  prevBtn.className = "prev-btn";
  nextBtn.innerText = ">";
  prevBtn.innerText = "<";
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  main.appendChild(nextBtn);
  main.appendChild(prevBtn);
  //克隆两次图片,放在首尾两端
  items.forEach(function (item, index) {
    var start = item.cloneNode(true);
    var end = item.cloneNode(true);
    if (index === 0) {
      start.style.marginLeft = "-" + items.length + "00%";
    }
    items[0].insertAdjacentElement("beforebegin", start);
    container.appendChild(end);
  });
  // 开启循环
  setInterval(next, 3000);
}
init();
function selectNav(index) {
  var items = document.querySelectorAll(".nav-item");
  items[indexItem].classList.remove("active");
  indexItem = index;
  items[index].classList.add("active");
  container.style.transitionDuration = "0.45s";
  container.style.transform = "translateX(".concat(-100 * index, "%)");
}
function next() {
  if (indexItem === items.length - 1) {
    container.style.transitionDuration = "0s";
    var adjustTransformX =
      container.clientWidth * (items.length - 1) +
      parseFloat(getComputedStyle(container).transform.split(",")[4]);
    container.style.transform = "translateX(calc(100% + ".concat(
      adjustTransformX,
      "px))",
    );
    container.clientWidth;
    selectNav(0);
  } else {
    selectNav(indexItem + 1);
  }
}
function prev() {
  if (indexItem === 0) {
    container.style.transitionDuration = "0s";
    //计算上一个动画还没有完成的偏移量
    var adjustTransformX = parseFloat(
      getComputedStyle(container).transform.split(",")[4],
    );
    container.style.transform = "translateX(calc("
      .concat(-100 * items.length, "% + ")
      .concat(adjustTransformX, "px))");
    container.clientWidth;
    selectNav(items.length - 1);
  } else {
    selectNav(indexItem - 1);
  }
}
