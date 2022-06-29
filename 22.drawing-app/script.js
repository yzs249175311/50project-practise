let cvs = document.querySelector("canvas")
let angle = document.querySelector("input[type=text]")
let reduce = document.querySelector("#reduce")
let add= document.querySelector("#add")
let color= document.querySelector("input[type=color]")
let close = document.querySelector("#close")
let toggle = false
let x,y

ctx = cvs.getContext("2d")
cvs.addEventListener("mousedown", function (e) {
    x = e.offsetX
    y = e.offsetY
    toggle = true
})
cvs.addEventListener("mouseup", function (e) {
    toggle = false
})
cvs.addEventListener("mousemove", function (e) {
    let beforeX = x
    let beforeY= y
    x = e.clientX-e.currentTarget.getBoundingClientRect().left
    y = e.clientY-e.currentTarget.getBoundingClientRect().top
    if (toggle) {
        ctx.fillStyle = color.value
        ctx.beginPath()
        ctx.arc(x, y, angle.value,0,2*Math.PI, false)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.strokeStyle= color.value
        ctx.moveTo(beforeX,beforeY)
        ctx.lineTo(x,y)
        ctx.lineWidth = angle.value *2
        ctx.stroke()
        ctx.closePath()
    }
})

reduce.onclick = function(){
    if(parseInt(angle.value)<=5) return;
    angle.value=angle.value-5
}
add.onclick = function(){
    if(parseInt(angle.value)>=50) return;
    angle.value=parseInt(angle.value)+5
}

close.onclick = function(){
    ctx.clearRect(0,0,cvs.width,cvs.height)
}