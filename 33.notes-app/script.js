var button = document.querySelector(".add");
var main = document.querySelector("main");
button.addEventListener("click", function (e) {
    main.innerHTML += "\n<div class=\"textarea\">\n\t<div class=\"title\">\n<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" onclick=\"edit(event)\"></i>\n<i class=\"fa fa-trash-o\" aria-hidden=\"true\" onclick=\"trash(event)\"></i>\n\t</div>\n\t<div class=\"content\" contenteditable=\"true\">\n\n\t</div>\n</div>\n";
});
function edit(e) {
    var content = e.currentTarget.parentNode.parentNode.querySelector(".content");
    if (content.classList.contains("preview")) {
        content.classList.remove("preview");
        content.contentEditable = true;
        content.style.width = content.getAttribute("oldWidth");
        content.style.height = content.getAttribute("oldHeight");
    }
    else {
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
