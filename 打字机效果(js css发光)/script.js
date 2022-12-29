let content = document.querySelector("#content");
(function(preContent){
	let timer = null;
	let index = 0

	function next(){
		index = (index + 1) % (preContent.length+1)
		content.innerText = preContent.slice(0, index)
		timer = setTimeout(next,500)
	}

	next()

	return timer
})("hello world!")
