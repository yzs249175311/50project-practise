let showDelayTime = document.querySelector("#show-delay-time");
let delayTime = document.querySelector("#delay-time");

function start() {
    let main = document.querySelector("#main");
    for (let i = 0; i < 40; i++) {
        let section = document.createElement("section");
        section.className = "child";

        let div = document.createElement("div");
        div.className = "box";

        div.appendChild(document.createElement("div"));
        div.appendChild(document.createElement("div"));

        section.appendChild(div);
        main.appendChild(section);

        delayTime.addEventListener("input", onInputHandler);
        delayTime.value = parseFloat(
            getComputedStyle(document.body).getPropertyValue("--delay-time")
        );
        showDelayTime.innerText =
            "(" +
            getComputedStyle(document.body).getPropertyValue("--delay-time") +
            ")";
    }
}

function onInputHandler(e) {
    document.body.style.setProperty(
        "--delay-time",
        e.currentTarget.value + "s"
    );
    showDelayTime.innerText = "(" + e.currentTarget.value + "s)";
}

start();
