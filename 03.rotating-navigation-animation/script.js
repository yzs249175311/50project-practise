let nav = document.querySelector("#nav");
let exit = document.querySelector("#exit");
let navCircle = document.querySelector(".navCircle");
let footNav = document.querySelector(".footNav");
let main = document.querySelector("main")

// nav.addEventListener('click',()=>{
//     navCircle.classList.add("active");
//     main.classList.add("active");
//     footNav.classList.add("active")
// })

// exit.addEventListener('click',()=>{
//     navCircle.classList.remove('active')
//     main.classList.remove("active");
//     footNav.classList.remove("active")
// })

navCircle.addEventListener('click', () => {
    if (navCircle.classList.contains('active')) {
        navCircle.classList.remove('active')
        main.classList.remove("active");
        footNav.classList.remove("active")
    } else {
        navCircle.classList.add("active");
        main.classList.add("active");
        footNav.classList.add("active")
    }
})