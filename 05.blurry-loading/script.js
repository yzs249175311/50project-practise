let bg = document.querySelector("#bg")
let loadText= document.querySelector("#load-text")

let loader = setInterval(loadProcess(),30);

function loadProcess(){
    let load = 0;
    function countLoader(){
        load++;
        if(load>99){
            clearInterval(loader)
        }

        bg.style.filter = `blur(${30-(load/100*30)}px)`;
        loadText.innerHTML = load + "%"
        loadText.style.opacity = (100-load)/100;
    }
    return countLoader;
}
