let main = document.querySelector("main")
let magic:HTMLButtonElement = document.querySelector(".magic")

for (let i = 0; i < 16; i++) {
	let div = document.createElement("div")
	div.style.backgroundImage = "url('../assert/image/image6.jpeg')"
	div.style.backgroundPosition = `-${(i % 4) * 120}px -${(Math.floor(i/4)%4) * 120}px`
	div.className = "item"
	main.appendChild(div)
}

magic.addEventListener("mousedown",() => {
	magic.className = "magic active"
})

magic.addEventListener("mouseup",() => {
	magic.className = "magic"
})

magic.addEventListener("click", () => {
	main.classList.toggle("active")
})
