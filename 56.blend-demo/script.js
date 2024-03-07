let mask = document.querySelector(".mask");
let image = document.querySelector(".image");

function moveMask(x, y) {
    console.log(x, y);
    mask.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0, transparent 10%, white 20%)`;
}

image.addEventListener("mousemove", (e) => {
    moveMask(e.offsetX, e.offsetY);
});

mask.addEventListener("click", (e) => {
    mask.classList.toggle("open");
});
