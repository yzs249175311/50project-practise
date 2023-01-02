let ul = document.querySelector("nav ul")
let iframe = document.querySelector("iframe")

let projects = [
	"test",
] 

projects.forEach( item => {
	let li = document.createElement("li")
	li.innerText = item
	li.addEventListener("click", (e) => {
		iframe.src = "./" + item + "/index.html"

		cancelSelectedAll()
		e.currentTarget.classList.add("selected")
	})

	ul.appendChild(li)
})

function cancelSelectedAll() {
	let lis = ul.querySelectorAll("li")
	lis.forEach(item => {
		item.classList.remove("selected")
	})
}
