let main = document.querySelector("main");
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("mouseenter", function (e) {
    let box = e.currentTarget as HTMLDivElement;
    box.classList.add("active");
    let color = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = color;
    box.style.boxShadow = `0 0 15px 2px ${color}`;
  });
  div.addEventListener("mouseleave", function (e) {
    let box = e.currentTarget as HTMLDivElement;

    setTimeout(() => {
      box.classList.remove("active");
      box.style.backgroundColor = "#1d1d1d";
      box.style.boxShadow = `0 0 `;
    }, 100);
  });
  main.appendChild(div);
}
