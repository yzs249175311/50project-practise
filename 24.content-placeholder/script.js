let img = document.querySelector("main>div:nth-child(1)>img")
let h4 = document.querySelector("h4")
let fav = document.querySelector("main>div:nth-child(3)>img")
let name = document.querySelector(".name")
let time= document.querySelector(".time")
let spans = document.querySelectorAll("main>div:nth-child(2)>span")

function getUpdate(){
    img.src = "../assert/image/image1.jpg"
    h4.innerText = "Hello,World"
    fav.src = "../favicon.jpg"
    name.innerText = "我的名字"
    spans[0].innerText = "这是第一行"
    spans[1].innerText = "这是第二行"
    time.innerText = new Date().toString().match(/(?<=^\w+\s)\w+\s\d+\s\d+/)

    let allBg = document.querySelectorAll(".animate-bg")
    allBg.forEach((element)=>{
        element.classList.remove("animate-bg")
    })
}

setTimeout(getUpdate,3000);