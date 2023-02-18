var 缓动函数_小球运动;
(function (缓动函数_小球运动) {
    var Direction;
    (function (Direction) {
        Direction["UP"] = "up";
        Direction["DOWN"] = "down";
        Direction["LEFT"] = "left";
        Direction["RIGHT"] = "right";
    })(Direction || (Direction = {}));
    var ball = document.querySelector(".ball");
    var tobottom = document.querySelector(".tobottom");
    var toup = document.querySelector(".toup");
    var toleft = document.querySelector(".toleft");
    var toright = document.querySelector(".toright");
    var ballState = document.querySelector(".ball-state");
    var ballMove = createMove(ball);
    tobottom.addEventListener("click", function () {
        ballMove.start(0, Direction.DOWN).then(function () {
            ballState.innerText = "停止";
        });
    });
    toup.addEventListener("click", function () {
        ballMove.start(50, Direction.UP).then(function () {
            ballState.innerText = "停止";
        });
    });
    toleft.addEventListener("click", function () {
        ballMove.start(50, Direction.LEFT).then(function () {
            ballState.innerText = "停止";
        });
    });
    toright.addEventListener("click", function () {
        ballMove.start(50, Direction.RIGHT).then(function () {
            ballState.innerText = "停止";
        });
    });
    moveAble(ball);
    function moveAble(dom) {
        var mouseDownFlag = false;
        var originX = 0;
        var originY = 0;
        dom.addEventListener("mousedown", function (e) {
            mouseDownFlag = true;
            originX = e.clientX;
            originY = e.clientY;
        });
        window.addEventListener("mousemove", function (e) {
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
                dom.style.top = dom.parentElement.clientHeight - dom.offsetHeight + "px";
            }
            if (parseInt(getComputedStyle(dom).right) < 0) {
                dom.style.left = dom.parentElement.clientWidth - dom.offsetWidth + "px";
            }
        });
        window.addEventListener("mouseup", function () {
            mouseDownFlag = false;
        });
    }
    function createMove(dom) {
        var timer = null;
        var speed_v = 0;
        var speed_h = 0;
        var accelerated_speed_down = 0.8;
        var accelerated_speed = 5;
        function start(speed, direction) {
            if (speed === void 0) { speed = 0; }
            if (direction === void 0) { direction = Direction.DOWN; }
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
                ballState.innerText = "运动中...";
                run(function (res) {
                    resolve(res);
                });
            });
        }
        function run(callback) {
            var parent = dom.parentElement;
            speed_v += accelerated_speed;
            dom.style.left = parseInt(getComputedStyle(dom).left) + speed_h + "px";
            dom.style.top = parseInt(getComputedStyle(dom).top) + speed_v + "px";
            var bottom = parseInt(getComputedStyle(dom).bottom);
            var top = parseInt(getComputedStyle(dom).top);
            var left = parseInt(getComputedStyle(dom).left);
            var right = parseInt(getComputedStyle(dom).right);
            if (bottom < 0 || top < 0) {
                speed_v = -speed_v * accelerated_speed_down;
                speed_h = speed_h * accelerated_speed_down;
                if (bottom <= 0) {
                    dom.style.top = parent.clientHeight - dom.offsetHeight + "px";
                }
                else {
                    dom.style.top = "0px";
                }
            }
            if (left < 0 || right < 0) {
                speed_h = -speed_h * accelerated_speed_down;
                speed_v = speed_v * accelerated_speed_down;
                if (left <= 0) {
                    dom.style.left = "0px";
                }
                else {
                    dom.style.left = parent.clientWidth - dom.offsetWidth + "px";
                }
            }
            if (Math.abs(speed_v) < accelerated_speed && Math.abs(speed_h) < 1 && bottom <= 0) {
                callback("end");
                return;
            }
            timer = setTimeout(run, 16, callback);
        }
        function init() {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            speed_v = 0;
            speed_h = 0;
        }
        init();
        return {
            start: start
        };
    }
})(缓动函数_小球运动 || (缓动函数_小球运动 = {}));
