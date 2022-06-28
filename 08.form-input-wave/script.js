let labels = document.querySelectorAll("label")
let email = document.querySelector("input[type=email]")

email.addEventListener("change",(event)=>{
    console.log(event.target.value=='')
    if (event.target.value=='')
        email.classList.remove("focus")
    else
        email.classList.add("focus")
})

for (let index = 0; index < labels.length; index++) {
    labels.forEach((item, idx)=>{
        item.innerHTML = item.innerText.split('').map((letter,idx)=>{
            return `<span style="transition-delay:${idx*50}ms">${letter}</span>`
        }).join('');
    })
}
