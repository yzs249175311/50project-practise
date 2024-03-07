let button = document.querySelector(".add");
let main = document.querySelector("main");

button.addEventListener("click", function (e) {
  main.innerHTML += `
<div class="textarea">
	<div class="title">
<i class="fa fa-pencil-square-o" aria-hidden="true" onclick="edit(event)"></i>
<i class="fa fa-trash-o" aria-hidden="true" onclick="trash(event)"></i>
	</div>
	<div class="content" contenteditable="true">

	</div>
</div>
`;
});

function edit(e: PointerEvent) {
  let content: HTMLDivElement =
    e.currentTarget.parentNode.parentNode.querySelector(".content")!;
  if (content.classList.contains("preview")) {
    content.classList.remove("preview");
    content.contentEditable = true;
    content.style.width = content.getAttribute("oldWidth");
    content.style.height = content.getAttribute("oldHeight");
  } else {
    content.classList.add("preview");
    content.contentEditable = false;
    content.setAttribute("oldWidth", content.style.width);
    content.setAttribute("oldHeight", content.style.height);
    content.style.width = "20rem";
    content.style.height = "20rem";
  }
}

function trash(e) {
  e.currentTarget.parentNode.parentNode.remove();
}
