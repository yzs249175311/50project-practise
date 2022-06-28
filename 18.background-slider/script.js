let left = document.querySelector(".left")
let right= document.querySelector(".right")
let main = document.querySelector("main")
let image = document.querySelector(".image")

let index = 1;
main.style= `background-image:url(../assert/image/image${index}.jpg)`
image.style= `background-image:url(../assert/image/image${index}.jpg)`

right.addEventListener('click',()=>{
    main.classList.add("active")
    main.style= `background-image:url(../assert/image/image${++index}.jpg)`
    image.style= `background-image:url(../assert/image/image${index}.jpg)`
    index%=5;
})
left.addEventListener('click',()=>{
    main.style.animationPlayState="paused"
    if(index==1) index=6;
    main.classList.add("active")
    main.style= `background-image:url(../assert/image/image${--index}.jpg)`
    image.style= `background-image:url(../assert/image/image${index}.jpg)`
})

main.addEventListener("animationend",()=>{
    main.classList.remove("active")
})
