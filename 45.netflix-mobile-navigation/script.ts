let page:NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>(".page")!
let menu_open = document.querySelector("#menu")!
let menu_close = document.querySelector("#close")!

menu_open.addEventListener("click", function(e:MouseEvent ){

	page.forEach((item) => {
		item.classList.remove("close")
		item.classList.add("active")
	})

})


menu_close.addEventListener("click",function(){

	page.forEach(item => {
		item.classList.remove("active")
		item.classList.add("close")
	})

})
