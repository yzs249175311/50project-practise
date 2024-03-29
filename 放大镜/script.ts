namespace 放大镜 {
  let sourceImg: HTMLImageElement = document.querySelector("#sourceImg")!;
  let moveBlock: HTMLDivElement = document.querySelector(".moveBlock")!;
  let magnifler: HTMLDivElement = document.querySelector(".magnifler")!;
  let magniflerImg: HTMLImageElement = document.querySelector(".magniflerImg")!;
  let imgFile: HTMLInputElement = document.querySelector("#imgFile")!;

  sourceImg.addEventListener("mousemove", (e: MouseEvent) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let moveBlockLeft = Math.min(
      Math.max(x - moveBlock.clientWidth / 2, 0),
      sourceImg.clientWidth - moveBlock.clientWidth,
    );
    let moveBlockTop = Math.min(
      Math.max(y - moveBlock.clientHeight / 2, 0),
      sourceImg.clientHeight - moveBlock.clientHeight,
    );

    let scaleWidth = sourceImg.clientWidth / moveBlock.clientWidth;
    let scaleHeight = sourceImg.clientHeight / moveBlock.clientHeight;

    moveBlock.style.left = moveBlockLeft + "px";
    moveBlock.style.top = moveBlockTop + "px";

    magniflerImg.style.left = -moveBlockLeft * scaleWidth + "px";
    magniflerImg.style.top = -moveBlockTop * scaleHeight + "px";
  });

  sourceImg.addEventListener("dragenter", (e) => {
    e.preventDefault();
    (<HTMLImageElement>e.currentTarget).style.filter = "grayscale(1)";
  });
  sourceImg.addEventListener("dragleave", (e) => {
    e.preventDefault();
    (<HTMLImageElement>e.currentTarget).style.filter = "grayscale(0)";
  });
  sourceImg.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  sourceImg.addEventListener("drop", (e: DragEvent) => {
    e.preventDefault();
    (<HTMLImageElement>e.currentTarget).style.filter = "grayscale(0)";
    let file = e.dataTransfer?.files[0]!;
    let src = URL.createObjectURL(file);

    if (!file.type.match("image")) return;

    magniflerImg.src = sourceImg.src = src;
  });

  imgFile.addEventListener("change", (e) => {
    let file = (e.currentTarget as HTMLInputElement).files![0];

    if (!file?.type.match("image")) {
      (e.currentTarget as HTMLInputElement).value = "";
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
    let fileURL = URL.createObjectURL(file);
    // fileReader.onload = (ev:ProgressEvent<FileReader>) => {
    //   sourceImg.src = (ev.target!.result) as string
    //   magniflerImg.src = sourceImg.src
    // }

    magniflerImg.src = sourceImg.src = fileURL;
  });
}
