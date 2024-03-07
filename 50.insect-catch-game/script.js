var insect_catch_game;
(function (insect_catch_game) {
  var screens = document.querySelectorAll(".screen");
  var start = document.querySelector("button");
  var insect_btns = document.querySelectorAll(".screen.choice ul li");
  var game_container = document.querySelector(".screen.game-container");
  var img_src = "";
  var scoreSpan = document.querySelector("#score");
  var timeSpan = document.querySelector("#time");
  var time = 0;
  var score = 0;
  var game_over_div = document.querySelector(".screen.game-container .over");
  var stopTime;
  start.addEventListener("click", function () {
    document.body.classList.add("up1");
  });
  insect_btns.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var img = e.currentTarget.querySelector("img");
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
    var img = document.createElement("img");
    var p = getRandomPosition();
    console.log(p);
    img.classList.add("insect");
    img.src = img_src;
    img.style.top = 10 + p.h + "%";
    img.style.left = 10 + p.w + "%";
    img.addEventListener("click", function (e) {
      var _this = this;
      img.classList.add("catched");
      catch_insect();
      setTimeout(function () {
        _this.remove();
      }, 400);
    });
    game_container.appendChild(img);
  }
  function catch_insect() {
    score++;
    scoreSpan.innerText = "Score:" + score;
    setTimeout(function () {
      create_insect();
    }, Math.random() * 2000);
    setTimeout(function () {
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
    var minute = "";
    var second = "";
    var timer = setInterval(function () {
      time++;
      minute = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      second = (time % 60).toString().padStart(2, "0");
      timeSpan.innerText = "Time:".concat(minute, ":").concat(second);
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
})(insect_catch_game || (insect_catch_game = {}));
