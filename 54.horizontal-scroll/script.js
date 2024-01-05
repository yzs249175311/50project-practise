/**
 * 思路：通过转动90度有垂直滚动条的容器来实现水平滚动条
 */

const containerStage = document.querySelector(".container-stage");
/**
 * @type {HTMLDivElement}
 */
const containerScroll = document.querySelector(".container-scroll");
const content = document.querySelector(".content");

const ob = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        containerScroll.style.width = entry.contentRect.height + "px";
        containerScroll.style.height = entry.contentRect.width + "px";
        containerScroll.style.transform = `rotate(-90deg) translateX(-${entry.contentRect.height}px)`;
        content.style.height = content.clientWidth + "px";
    });
});

function init() {
    ob.observe(containerStage);
}

init();
