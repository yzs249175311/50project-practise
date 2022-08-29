var imgs = document.querySelector(".imgs");
var nums = document.querySelectorAll(".imgs img").length;
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var currentIndex = 0;
var controller = imgController();
window.onload = controller.continueRun();
next.addEventListener("click", controller.next);
prev.addEventListener("click", controller.prev);
function imgController() {
    var timer = null;
    function prev() {
        currentIndex = currentIndex == 0 ? nums - 1 : currentIndex - 1;
        update();
        continueRun();
    }
    function next() {
        currentIndex = (currentIndex + 1) % nums;
        update();
        continueRun();
    }
    function update() {
        imgs.style.transform = "translateX(".concat(-currentIndex * 400, "px)");
    }
    function continueRun() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(next, 2000);
    }
    return {
        next: next,
        prev: prev,
        continueRun: continueRun
    };
}
