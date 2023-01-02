let main = document.querySelector("main");
let toTop = document.querySelector("#top");
let projects = [
	"01.expanding-cards",
	"02.progress-steps",
	"03.rotating-navigation-animation",
	"04.hidden-search-widget",
	"05.blurry-loading",
	"06.scroll-animation",
	"07.split-landing-page",
	"08.form-input-wave",
	"09.sound-board",
	"10.dad-jokes",
	"11.event-keycodes",
	"12.faq-collapse",
	"13.random-choice-picker",
	"14.animated-navigation",
	"15.incrementing-counter",
	"16.drink-water",
	"17.movie-app",
	"18.background-slider",
	"19.theme-clock",
	"20.button-ripple-effect",
	"21.drag-n-drop",
	"22.drawing-app",
	"23.kinetic-loader",
	"24.content-placeholder",
	"25.sticky-navbar",
	"26.double-vertical-slider",
	"27.toast-notification",
	"28.github-profiles",
	"29.double-click-heart",
	"30.auto-text-effect",
	"31.password-generator",
	"32.good-cheap-fast",
	"33.notes-app",
	"34.animated-countdown",
	"35.image-carousel",
	"36.hoverboard",
	"38.mobile-tab-navigation",
	"39.password-strength-background",
	"40.3d-background-boxes",
	"41.verify-account-ui",
	"42.live-user-filter",
	"44.custom-range-slider",
	"45.netflix-mobile-navigation",
	"46.quiz-app",
	"47.testimonial-box-switcher",
	"48.random-image-feed",
	"49.todo-list",
	"50.insect-catch-game",
	"virtual scroller",
	"virtual-scroller-v2",
	"打字机效果(css)",
	"打字机效果(js css发光)",
	"放大镜",
];

projects.forEach(function (name) {
	main.innerHTML += `<a href="${name}/index.html" target="_blank">${name}</a>`;
});

window.addEventListener("scroll", function () {
	if (window.scrollY > 200) {
		toTop.style.visibility = "visible";
		toTop.style.opacity = "1";
	} else {
		toTop.style.visibility = "hidden";
		toTop.style.opacity = "0";
	}
});
