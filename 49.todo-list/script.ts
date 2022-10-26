namespace todo_list {
	let container:HTMLDivElement = document.querySelector(".container")!
	let todoInput:HTMLInputElement = document.querySelector("input[name=todo-input]")!

	todoInput.addEventListener("keydown",(e:KeyboardEvent)=>{
		if(e.key == "Enter"){
			container.appendChild(generateTode((<HTMLInputElement>e.currentTarget).value))
			todoInput.value=""
		}
	}) 

	function init(){
	}

	function generateTode(content:string){
		let div = document.createElement("div")
		div.classList.add("todo")
		div.innerText = content
		div.addEventListener("click", function(){
			div.classList.toggle("finish")
		})

		div.addEventListener("contextmenu", function(e){
			e.preventDefault()
			this.remove()
		})

		return div
	}

}
