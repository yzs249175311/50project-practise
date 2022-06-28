let getJoke = document.querySelector("#getJoke")
let joke = document.querySelector(".joke")

let fetchJoke = genFetchJoke();
fetchJoke(); 

getJoke.addEventListener("click",fetchJoke)

function genFetchJoke() {
    let timer = false;

    function fetchJoke() {
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
            method: "GET",
        }).then(res => {
            if (res.status == 200 && res.ok) {
                return res.json();
            }
        }).then(data => {
            joke.innerText = data["joke"];
            timer =false;
        }).catch(error => {
            timer =false;
        });
    }
    return ()=>{
        if (!timer){
            timer = true;
            joke.innerText = "获取笑话中..."
            fetchJoke();
        }
    }
}