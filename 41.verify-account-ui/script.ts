let boxs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".box")

boxs.forEach((box:HTMLInputElement, index:number) => {

	box.addEventListener("keydown", (e: KeyboardEvent) => {
		if (e.key == "Backspace") {
			setTimeout(() => { (boxs[index == 0 ? 0 : index - 1]).focus() }, 10)
		} else if (/\d/.test(e.key)) {
			setTimeout(() => { boxs[index == 5 ? index : index + 1].focus(), 10 })
		} else {
			setTimeout(() => { boxs[index].value = "" })
		}
	})
})
