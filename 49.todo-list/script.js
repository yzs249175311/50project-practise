var todo_list;
(function (todo_list) {
  var container = document.querySelector(".container");
  var todoInput = document.querySelector("input[name=todo-input]");
  todoInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      container.appendChild(generateTode(e.currentTarget.value));
      todoInput.value = "";
    }
  });
  function init() {}
  function generateTode(content) {
    var div = document.createElement("div");
    div.classList.add("todo");
    div.innerText = content;
    div.addEventListener("click", function () {
      div.classList.toggle("finish");
    });
    div.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      this.remove();
    });
    return div;
  }
})(todo_list || (todo_list = {}));
