var 放大镜;
(function (放大镜) {
    var sourceImg = document.querySelector("#sourceImg");
    var moveBlock = document.querySelector(".moveBlock");
    var magnifler = document.querySelector(".magnifler");
    var magniflerImg = document.querySelector(".magniflerImg");
    var imgFile = document.querySelector("#imgFile");
    sourceImg.addEventListener("mousemove", function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var moveBlockLeft = Math.min(Math.max(x - moveBlock.clientWidth / 2, 0), sourceImg.clientWidth - moveBlock.clientWidth);
        var moveBlockTop = Math.min(Math.max(y - moveBlock.clientHeight / 2, 0), sourceImg.clientHeight - moveBlock.clientHeight);
        var scaleWidth = sourceImg.clientWidth / moveBlock.clientWidth;
        var scaleHeight = sourceImg.clientHeight / moveBlock.clientHeight;
        moveBlock.style.left = moveBlockLeft + "px";
        moveBlock.style.top = moveBlockTop + "px";
        magniflerImg.style.left = -moveBlockLeft * scaleWidth + "px";
        magniflerImg.style.top = -moveBlockTop * scaleHeight + "px";
    });
    imgFile.addEventListener("change", function (e) {
        var file = e.currentTarget.files[0];
        if (!(file === null || file === void 0 ? void 0 : file.type.match("image")))
            return;
        if (file.size > 100000) {
            alert("文件过大,请小于100kb!");
            e.currentTarget.value = "";
            return;
        }
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (ev) {
            sourceImg.src = (ev.target.result);
            magniflerImg.src = sourceImg.src;
        };
    });
})(放大镜 || (放大镜 = {}));
