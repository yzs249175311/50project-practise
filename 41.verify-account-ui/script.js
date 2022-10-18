var boxs = document.querySelectorAll(".box");
boxs.forEach(function (box, index) {
    box.addEventListener("keydown", function (e) {
        if (e.key == "Backspace") {
            setTimeout(function () { (boxs[index == 0 ? 0 : index - 1]).focus(); }, 10);
        }
        else if (/\d/.test(e.key)) {
            setTimeout(function () { boxs[index == 5 ? index : index + 1].focus(), 10; });
        }
        else {
            setTimeout(function () { boxs[index].value = ""; });
        }
    });
});
