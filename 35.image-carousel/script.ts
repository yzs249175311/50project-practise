let imgs:HTMLDivElement = document.querySelector(".imgs")
let nums = document.querySelectorAll(".imgs img").length
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let currentIndex = 0
let controller = imgController() 

window.onload = controller.continueRun() 

next.addEventListener("click",controller.next)
prev.addEventListener("click",controller.prev)

function imgController() {
	let timer = null

	function prev () {
		currentIndex = currentIndex == 0? nums-1:currentIndex-1
		update()
		continueRun()
	}

	function next() {
		currentIndex = (currentIndex + 1 )% nums
		update()
		continueRun()
	}

	function update(){
		imgs.style.transform = `translateX(${-currentIndex * 400}px)`
	}

	function continueRun(){
		if(timer){
			clearTimeout(timer)
			timer = null
		}

		timer = setTimeout(next , 2000)
	}

	return {
		next,
		prev,
		continueRun,
	}
}
