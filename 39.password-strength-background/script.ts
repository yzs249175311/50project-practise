let password = document.querySelector("#password")
let background: HTMLImageElement = document.querySelector(".background")
let count = 8

password.addEventListener("input", (e: any) => {
	let value = (<HTMLInputElement>e.currentTarget).value.length
	let blurValue = (8 - value) < 0 ? 0 : (8 - value)
	background.style.filter = `blur(${blurValue}px)`
})
