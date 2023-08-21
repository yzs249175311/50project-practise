/**
 * @type {import( "gsap" )}
 */
gsap;
gsap.registerPlugin(Flip);
/**
 * @type {import("gsap-trial/ScrollTrigger")}
 */
ScrollTrigger;

ScrollTrigger.defaults({
    markers: true,
});

// Stage 1
let div1 = document.querySelector(".container>div:nth-of-type(1)");
let div2 = document.querySelector(".container>div:nth-of-type(2)");
let div3 = document.querySelector(".container>div:nth-of-type(3)");
let div4 = document.querySelector(".container>div:nth-of-type(4)");

let tl = gsap.timeline();
tl.from(div2, {
    xPercent: -100,
});
tl.to(div2, {
    xPercent: -100,
});
tl.from(
    div3,
    {
        xPercent: 100,
    },
    "<"
);
tl.to(div3, {
    yPercent: 100,
});

tl.from(
    div4,
    {
        yPercent: -100,
    },
    "<"
);

ScrollTrigger.create({
    animation: tl,
    trigger: ".container",
    start: "top top",
    end: "+=4000",
    scrub: 1,
    pin: true,
});

// Stage 2

let container1_boxs = gsap.utils.toArray(".container1 .box");

gsap.to(container1_boxs, {
    //这个很重要，不然会不对齐
    ease: "none",
    xPercent: -300,
    scrollTrigger: {
        trigger: ".container1",
        end: "+=" + document.querySelector(".container1").offsetWidth,
        pin: true,
        scrub: true,
        snap: 1 / (container1_boxs.length - 1),
    },
});

// Stage 3
gsap.to("#move", {
    scrollTrigger: {
        trigger: ".container2",
        end: "+=1000",
        scrub: true,
        pin: true,
    },
    motionPath: "#movePath",
});

let tl1 = gsap.timeline();

tl1.to("#move1", {
    duration: 2,
    motionPath: "#movePath1",
    repeat: -1,
});

ScrollTrigger.create({
    animation: tl1,
    toggleActions: "restart pause resume pause",
    trigger: ".container2",
    end: "bottom top",
});

// Stage 4

let showStage = document.querySelector(".container3>.showStage");
let choices = document.querySelector(".container3>.choices");
let nextNode;
document.querySelectorAll(".container3>.choices>div").forEach((item) => {
    item.addEventListener("click", (e) => {
        let state = Flip.getState(
            ".container3>.choices>div,.container3>.showStage>div"
        );

        if (e.currentTarget.parentElement == showStage) {
            if (nextNode) {
                nextNode.insertAdjacentElement(
                    "beforebegin",
                    showStage.children[0]
                );
            } else {
                choices.appendChild(showStage.children[0]);
            }
            nextNode = null;
        } else {
            nextNode = e.currentTarget.nextElementSibling;
            if (showStage.children.length == 0) {
                showStage.appendChild(e.currentTarget);
            } else {
                if (nextNode) {
                    nextNode.insertAdjacentElement(
                        "beforebegin",
                        showStage.children[0]
                    );
                } else {
                    choices.appendChild(showStage.children[0]);
                }
                showStage.appendChild(e.currentTarget);
            }
        }

        Flip.from(state, {
            duration: 0.45,
            scale: 1,
        });
    });
});
