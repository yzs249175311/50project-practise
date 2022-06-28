let textarea = document.querySelector(".textarea")
let choices = document.querySelector("#choices")
let result= document.querySelector("#result")

textarea.addEventListener("input", (e) => {
    if (e.data == null) {
        return '';
    } else {
        choices.innerHTML = textarea.value.split(/[,，]/).map(item => {
            item = item.replace(/(^\s+)|(\s+$)/g, '');
            if (item == '') return;
            return `<span class="choice">${item}</span>`;
        }).join('')
    }
})

let { startRandom } = randomChoice();
textarea.addEventListener("keyup", (e) => {
    if (e.code == 'Enter' && e.target.value != "") {
        startRandom(choices.childNodes,result).start();
        textarea.value = '';
    }
})


function randomChoice() {
    let timer = null;
    let countTimer = 0;
    let picked = null;

    function startRandom(nodes,result,randomTimes=20) {
        function random() {
            picked = nodes[Math.floor(Math.random() * nodes.length)];
            picked.classList.add("win");
        }
        function stop() {
            clearInterval(timer);
            timer = null;
            countTimer = 0;
            picked = null;
        }
        function clear() {
            nodes.forEach((item) => {
                if (item.classList.contains("win")) {
                    item.classList.remove("win")
                }
            })
        }

        function start() {
            if (timer) {
                stop();
            }
            timer = setInterval(() => {
                if (countTimer++ <randomTimes) {
                    clear();
                    random();
                } else {
                    result.innerText = picked.innerText;
                    stop();
                }
            }, 200);
        }

        return {start}
    }
    return { startRandom };
}