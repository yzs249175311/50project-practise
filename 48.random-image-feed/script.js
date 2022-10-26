var random_image_feed;
(function (random_image_feed) {
    var unsplashURL = 'https://source.unsplash.com/random/';
    var container = document.querySelector(".container");
    var count = 20;
    function init() {
        for (var i = 0; i < count; i++) {
            var img = document.createElement("img");
            img.src = "".concat(unsplashURL).concat(randomSize());
            container.appendChild(img);
        }
    }
    function randomSize() {
        return randomNr() + "x" + randomNr();
    }
    function randomNr() {
        return Math.floor(Math.random() * 10) + 300;
    }
    init();
})(random_image_feed || (random_image_feed = {}));
