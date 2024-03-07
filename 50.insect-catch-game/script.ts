namespace insect_catch_game {
  let screens: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".screen")!;
  let start = document.querySelector("button")!;
  let insect_btns = document.querySelectorAll(".screen.choice ul li");
  let game_container = document.querySelector(".screen.game-container")!;
  let img_src = "";
  let scoreSpan: HTMLHeadingElement = document.querySelector("#score")!;
  let timeSpan: HTMLHeadingElement = document.querySelector("#time")!;
  let time = 0;
  let score = 0;
  let game_over_div: HTMLDivElement = document.querySelector(
    ".screen.game-container .over",
  )!;

  let stopTime: Function;
  start.addEventListener("click", function () {
    document.body.classList.add("up1");
  });

  insect_btns.forEach((item) => {
    item.addEventListener("click", function (e) {
      let img: HTMLImageElement = (<HTMLLIElement>(
        e.currentTarget
      )).querySelector("img")!;
      img_src = img.src;
      start_game();
    });
  });

  function start_game() {
    document.body.classList.add("up2");
    stopTime = startTime();
    create_insect();
  }

  function create_insect() {
    let img = document.createElement("img");
    let p = getRandomPosition();
    console.log(p);
    img.classList.add("insect");
    img.src = img_src;
    img.style.top = 10 + p.h + "%";
    img.style.left = 10 + p.w + "%";
    img.addEventListener("click", function (e) {
      img.classList.add("catched");
      catch_insect();
      setTimeout(() => {
        this.remove();
      }, 400);
    });
    game_container.appendChild(img);
  }

  function catch_insect() {
    score++;
    scoreSpan.innerText = "Score:" + score;
    setTimeout(() => {
      create_insect();
    }, Math.random() * 2000);
    setTimeout(() => {
      create_insect();
    }, Math.random() * 2000);

    game_over();
  }

  function getRandomPosition() {
    return {
      w: Math.floor(Math.random() * 80),
      h: Math.floor(Math.random() * 80),
    };
  }

  function startTime() {
    let minute = "";
    let second = "";
    let timer = setInterval(() => {
      time++;
      minute = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      second = (time % 60).toString().padStart(2, "0");
      timeSpan.innerText = `Time:${minute}:${second}`;
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }

  function game_over() {
    if (score == 10) {
      game_over_div.classList.add("fail");
      stopTime();
    }
  }
}
