let buttons = document.querySelectorAll(".button")

buttons.forEach((item,index) => {
	item.addEventListener("click", function(e){
		e.currentTarget.classList.toggle("active")
		update(index)
	})
})

function update (index){
	let count = 0;
	buttons.forEach((item) => {
		if (item.classList.contains("active")){
			count++
		}
	})

	if(count == 3) {
		buttons[(index-1+3)%3].classList.toggle("active")
	}
}
