var testimonial_box_switcher;
(function (testimonial_box_switcher) {
  var process = document.querySelector(".process");
  var intro = document.querySelector(".intro");
  var img = document.querySelector("img");
  var author = document.querySelector(".name");
  var position = document.querySelector(".position");
  var data = [
    {
      intro:
        "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
      name: "Veeti Seppanen ",
      img: "./asserts/1.jpg",
      position: "Graphic Designer",
    },
    {
      intro:
        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
      name: "Miyah Myles",
      img: "./asserts/2.jpg",
      position: "Accountant",
    },
    {
      intro:
        "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
      name: "June Cha",
      img: "./asserts/3.jpg",
      position: "Director",
    },
    {
      intro:
        "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
      name: "Iida Niskanen",
      img: "./asserts/4.jpg",
      position: "Marketing",
    },
  ];
  process.style.width = "0";
  function circleBox() {
    var timer = null;
    var count = 0;
    var full = 1000;
    var step = 5;
    var index = 0;
    init();
    timer = setInterval(add, 20);
    function add() {
      if (count < full) {
        count += step;
      } else {
        count = 0;
        next();
      }
      process.style.width = (count / full) * 100 + "%";
    }
    function init() {
      change(0);
    }
    function next() {
      index = (index + 1) % data.length;
      change(index);
    }
    function change(index) {
      intro.innerText = data[index].intro;
      img.src = data[index].img;
      author.innerText = data[index].name;
      position.innerText = data[index].position;
    }
  }
  circleBox();
})(testimonial_box_switcher || (testimonial_box_switcher = {}));
