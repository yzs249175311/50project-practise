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
    var moveBlockLeft = Math.min(
      Math.max(x - moveBlock.clientWidth / 2, 0),
      sourceImg.clientWidth - moveBlock.clientWidth,
    );
    var moveBlockTop = Math.min(
      Math.max(y - moveBlock.clientHeight / 2, 0),
      sourceImg.clientHeight - moveBlock.clientHeight,
    );
    var scaleWidth = sourceImg.clientWidth / moveBlock.clientWidth;
    var scaleHeight = sourceImg.clientHeight / moveBlock.clientHeight;
    moveBlock.style.left = moveBlockLeft + "px";
    moveBlock.style.top = moveBlockTop + "px";
    magniflerImg.style.left = -moveBlockLeft * scaleWidth + "px";
    magniflerImg.style.top = -moveBlockTop * scaleHeight + "px";
  });
  sourceImg.addEventListener("dragenter", function (e) {
    e.preventDefault();
    e.currentTarget.style.filter = "grayscale(1)";
  });
  sourceImg.addEventListener("dragleave", function (e) {
    e.preventDefault();
    e.currentTarget.style.filter = "grayscale(0)";
  });
  sourceImg.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  sourceImg.addEventListener("drop", function (e) {
    var _a;
    e.preventDefault();
    e.currentTarget.style.filter = "grayscale(0)";
    var file =
      (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files[0];
    var src = URL.createObjectURL(file);
    if (!file.type.match("image")) return;
    magniflerImg.src = sourceImg.src = src;
  });
  imgFile.addEventListener("change", function (e) {
    var file = e.currentTarget.files[0];
    if (
      !(file === null || file === void 0 ? void 0 : file.type.match("image"))
    ) {
      e.currentTarget.value = "";
      return;
    }
    // if(file.size > 100000){
    //   alert("文件过大,请小于100kb!");
    //   (<HTMLInputElement>e.currentTarget).value = "";
    //   return
    //  }
    // let fileReader = new FileReader()
    // fileReader.readAsDataURL(file)
    // 使用blob可以支持更大的图片的预览
    var fileURL = URL.createObjectURL(file);
    // fileReader.onload = (ev:ProgressEvent<FileReader>) => {
    //   sourceImg.src = (ev.target!.result) as string
    //   magniflerImg.src = sourceImg.src
    // }
    magniflerImg.src = sourceImg.src = fileURL;
  });
})(放大镜 || (放大镜 = {}));
