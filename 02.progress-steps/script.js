let next = document.querySelector("#next")
let prev = document.querySelector("#prev")
let circles = document.querySelectorAll(".circle")
let progress = document.querySelector("#progress")

currentActive = 1;

function update(){
    if(currentActive===circles.length){
        next.disabled = true;
    }else if(currentActive===1){
        prev.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
    progress.style.width= (currentActive-1)/(circles.length-1) * 100+'%';
}

next.addEventListener('click',()=>{
    if(currentActive<circles.length){
        circles[currentActive++].classList.add('active');
    }
    update();
})

prev.addEventListener('click',()=>{
    if(currentActive>1){
        circles[--currentActive].classList.remove('active');
    };
    update();
})
