let str = "Hello world!"
let showText = document.querySelector("#showText")
let number = document.querySelector("#number")
let maxSpeed = 1000

//
number.addEventListener("click",()=>{
	
})

window.onload = countTimer(str,number)

function countTimer(str,number) {
	let count = 0

	function loopMethod() {
		showText.innerText = str.slice(0, ++count)
		count = count % str.length
		setTimeout(loopMethod,maxSpeed/parseInt(number.value))
	}

	return function () {
		setTimeout(loopMethod,maxSpeed/parseInt(number.value))
	}
}

