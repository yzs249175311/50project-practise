namespace 缓动函数_小球运动 {
  enum Direction {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
  }

  let ball: HTMLDivElement = document.querySelector(".ball")!;

  let tobottom: HTMLButtonElement = document.querySelector(".tobottom")!;
  let toup: HTMLButtonElement = document.querySelector(".toup")!;
  let toleft: HTMLButtonElement = document.querySelector(".toleft")!;
  let toright: HTMLButtonElement = document.querySelector(".toright")!;
  let ballState: HTMLSpanElement = document.querySelector(".ball-state")!;

  let ballMove = createMove(ball);

  tobottom.addEventListener("click", function () {
    ballMove.start(0, Direction.DOWN).then(() => {
      ballState!.innerText = "停止";
    });
  });
  toup.addEventListener("click", function () {
    ballMove.start(50, Direction.UP).then(() => {
      ballState!.innerText = "停止";
    });
  });
  toleft.addEventListener("click", function () {
    ballMove.start(50, Direction.LEFT).then(() => {
      ballState!.innerText = "停止";
    });
  });
  toright.addEventListener("click", function () {
    ballMove.start(50, Direction.RIGHT).then(() => {
      ballState!.innerText = "停止";
    });
  });

  moveAble(ball);

  function moveAble(dom: HTMLDivElement) {
    let mouseDownFlag = false;
    let originX = 0;
    let originY = 0;

    dom.addEventListener("mousedown", (e: MouseEvent) => {
      mouseDownFlag = true;
      originX = e.clientX;
      originY = e.clientY;
    });

    window.addEventListener("mousemove", (e: MouseEvent) => {
      if (mouseDownFlag) {
        dom.style.left = dom.offsetLeft + (e.clientX - originX) + "px";
        dom.style.top = dom.offsetTop + (e.clientY - originY) + "px";
        originX = e.clientX;
        originY = e.clientY;
      }

      if (dom.offsetLeft < 0) {
        dom.style.left = "0px";
      }

      if (dom.offsetTop < 0) {
        dom.style.top = "0px";
      }

      if (parseInt(getComputedStyle(dom).bottom) < 0) {
        dom.style.top =
          (dom.parentElement as HTMLDivElement).clientHeight -
          dom.offsetHeight +
          "px";
      }
      if (parseInt(getComputedStyle(dom).right) < 0) {
        dom.style.left =
          (dom.parentElement as HTMLDivElement).clientWidth -
          dom.offsetWidth +
          "px";
      }
    });

    window.addEventListener("mouseup", () => {
      mouseDownFlag = false;
    });
  }

  function createMove(dom: HTMLDivElement) {
    let timer: NodeJS.Timeout | null = null;
    let speed_v = 0;
    let speed_h = 0;
    let accelerated_speed_down = 0.8;
    let accelerated_speed = 5;

    function start(speed: number = 0, direction: Direction = Direction.DOWN) {
      init();

      switch (direction) {
        case Direction.DOWN:
          speed_v = speed;
          break;
        case Direction.UP:
          speed_v = -speed;
          break;
        case Direction.LEFT:
          speed_h = -speed;
          break;
        case Direction.RIGHT:
          speed_h = speed;
          break;
      }

      return new Promise(function (resolve) {
        ballState!.innerText = "运动中...";

        run((res: string) => {
          resolve(res);
        });
      });
    }

    function run(callback: Function) {
      let parent = dom.parentElement as HTMLDivElement;

      speed_v += accelerated_speed;

      dom.style.left = parseInt(getComputedStyle(dom).left) + speed_h + "px";
      dom.style.top = parseInt(getComputedStyle(dom).top) + speed_v + "px";

      let bottom = parseInt(getComputedStyle(dom).bottom);
      let top = parseInt(getComputedStyle(dom).top);
      let left = parseInt(getComputedStyle(dom).left);
      let right = parseInt(getComputedStyle(dom).right);

      if (bottom < 0 || top < 0) {
        speed_v = -speed_v * accelerated_speed_down;
        speed_h = speed_h * accelerated_speed_down;
        if (bottom <= 0) {
          dom.style.top = parent.clientHeight - dom.offsetHeight + "px";
        } else {
          dom.style.top = "0px";
        }
      }
      if (left < 0 || right < 0) {
        speed_h = -speed_h * accelerated_speed_down;
        speed_v = speed_v * accelerated_speed_down;
        if (left <= 0) {
          dom.style.left = "0px";
        } else {
          dom.style.left = parent.clientWidth - dom.offsetWidth + "px";
        }
      }

      if (
        Math.abs(speed_v) < accelerated_speed &&
        Math.abs(speed_h) < 1 &&
        bottom <= 0
      ) {
        callback("end");
        return;
      }

      timer = setTimeout(run, 16, callback);
    }
    function init() {
      if (timer) {
        clearTimeout(timer!);
        timer = null;
      }
      speed_v = 0;
      speed_h = 0;
    }

    init();

    return {
      start,
    };
  }
}
