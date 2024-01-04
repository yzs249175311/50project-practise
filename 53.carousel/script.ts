const main = document.querySelector("main")!;
const container = document.querySelector(
    ".carousel-container",
)! as HTMLDivElement;
const items = document.querySelectorAll(".carousel-item")!;

let indexItem = 0;

function init() {
    container.style.transform = "translateX(0)";

    const nav = document.createElement("div");
    nav.className = "nav";

    items.forEach((item, index) => {
        const navItem = document.createElement("div");
        navItem.className = "nav-item";
        if (indexItem === index) {
            navItem.classList.add("active");
        }
        nav.appendChild(navItem);
        navItem.addEventListener("click", () => {
            if (indexItem === index) {
                return;
            }
            selectNav(index);
        });
    });

    main.appendChild(nav);

    const nextBtn = document.createElement("div");
    const prevBtn = document.createElement("div");

    nextBtn.className = "next-btn";
    prevBtn.className = "prev-btn";

    nextBtn.innerText = ">";
    prevBtn.innerText = "<";

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    main.appendChild(nextBtn);
    main.appendChild(prevBtn);

    //克隆两次图片,放在首尾两端
    items.forEach((item, index) => {
        const start = item.cloneNode(true) as HTMLDivElement;
        const end = item.cloneNode(true) as HTMLDivElement;
        if (index === 0) {
            start.style.marginLeft = "-" + items.length + "00%";
        }
        items[0].insertAdjacentElement("beforebegin", start);
        container.appendChild(end);
    });

    // 开启循环
    setInterval(next, 3000);
}
init();

function selectNav(index: number) {
    const items = document.querySelectorAll(".nav-item");
    items[indexItem].classList.remove("active");
    indexItem = index;
    items[index].classList.add("active");
    container.style.transitionDuration = "0.45s";
    container.style.transform = `translateX(${-100 * index}%)`;
}

function next() {
    if (indexItem === items.length - 1) {
        container.style.transitionDuration = "0s";
        const adjustTransformX =
            container.clientWidth * (items.length - 1) +
            parseFloat(getComputedStyle(container).transform.split(",")[4]);
        container.style.transform = `translateX(calc(100% + ${adjustTransformX}px))`;
        container.clientWidth;
        selectNav(0);
    } else {
        selectNav(indexItem + 1);
    }
}

function prev() {
    if (indexItem === 0) {
        container.style.transitionDuration = "0s";

        //计算上一个动画还没有完成的偏移量
        const adjustTransformX = parseFloat(
            getComputedStyle(container).transform.split(",")[4],
        );

        container.style.transform = `translateX(calc(${
            -100 * items.length
        }% + ${adjustTransformX}px))`;

        container.clientWidth;
        selectNav(items.length - 1);
    } else {
        selectNav(indexItem - 1);
    }
}
