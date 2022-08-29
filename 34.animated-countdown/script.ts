let main = document.querySelector("main")
let replay = document.querySelector(".replay")
let count = 3
let newdiv;

window.addEventListener("DOMContentLoaded",(e) =>{
	let div = document.createElement("div")
	div.className="number"
	div.innerText = count--
	main.insertAdjacentElement("afterbegin",div)
	setTimeout(method(div,count),1000)
})

function method(div,count){
	return () => {
		div.remove()
		newdiv = document.createElement("div")
		newdiv.className = "number"
		newdiv.innerText = count--
		main.insertAdjacentElement("afterbegin", newdiv)
		if(count>=0){
			setTimeout(method(newdiv,count),1000)
		}else{
			setTimeout(function(){
				main.classList.add("stop")
				replay.style.display = "flex"
				setTimeout(function(){
					main.style.display = "none"
				},300)
			},200)
		}
	}
}

function init (){
	main.classList.remove("stop")
	main.style.display = "flex"
	replay.style.display = "none"
	method(newdiv,3)()
}
