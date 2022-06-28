let hour = document.querySelector(".hour")
let minute= document.querySelector(".minute")
let second= document.querySelector(".second")
let time = document.querySelector(".time")
let weekandmonth = document.querySelector(".weekandmonth")
let day = document.querySelector(".day")
let button = document.querySelector("button")
let main = document.querySelector("main")
update()

function update(){
    let date = new Date();
    hour.style.transform = `translateX(50%) rotate(${-90+(date.getHours()*360/12)}deg)`
    minute.style.transform = `translateX(50%) rotate(${-90+(date.getMinutes()*359/60)}deg)`
    second.style.transform = `translateX(50%) rotate(${-90+(date.getSeconds()*360/60)}deg)`
    time.innerText = `${date.getHours()>12?date.getHours()-12:date.getHours()}:${date.getMinutes()} ${date.getHours()>12?"PM":"AM"}`
    weekandmonth.innerText = `${date.toString().match(/^\w+\s\w+/)}`
    day.innerText = `${date.toString().match(/\d+/)}`
}

let timer = setInterval(update,1000)

button.addEventListener("click",()=>{
    if(main.classList.contains("dark")){
        main.classList.remove("dark");
        button.innerText="Dark mode"
    }else{
        main.classList.add("dark");
        button.innerText="Light mode"
    }
})