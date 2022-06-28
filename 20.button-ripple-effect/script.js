let buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        let d = document.createElement("span")
        d.style.top = e.clientY - e.currentTarget.getBoundingClientRect().top + "px";
        d.style.left = e.clientX - e.currentTarget.getBoundingClientRect().left + "px";
        button.appendChild(d)
        setTimeout(() => {
            d.remove()
        }, 500)
    })
})
