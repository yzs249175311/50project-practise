var data = [
    {
        question: "Which language runs in a web browser?",
        option: {
            1: "Java",
            2: "C",
            3: "Python",
            4: "JavaScript"
        },
        answer: 4
    },
    {
        question: "What does CSS stand for?",
        option: {
            1: "Central Style Sheets",
            2: "Cascading Style Sheets",
            3: "Cascading Simple Sheets",
            4: "Cars SUVs Sailboats"
        },
        answer: 2
    },
    {
        question: "What does HTML stand for?",
        option: {
            1: "Hypertext Markup Language",
            2: "Hypertext Markdown Language",
            3: "Hyperloop Machine Language",
            4: "Helicopters Terminals Motorboats Lamborginis"
        },
        answer: 1
    },
    {
        question: "What year was JavaScript launched?",
        option: {
            1: "1996",
            2: "1995",
            3: "1994",
            4: "none of the above"
        },
        answer: 3
    },
];
var box = document.querySelector("#box");
var button = document.querySelector("button");
var index = 0;
var trueCount = 0;
function init() {
    index = 0;
    trueCount = 0;
    button === null || button === void 0 ? void 0 : button.removeEventListener("click", init);
    button === null || button === void 0 ? void 0 : button.addEventListener("click", next);
    button.innerText = "Submit";
    generateQuestion();
}
function next() {
    if (!checkAnswer())
        return;
    if (index == data.length - 1) {
        result();
    }
    else {
        index++;
        generateQuestion();
    }
}
function generateQuestion() {
    box.innerHTML = "\n            <h2>".concat(data[index].question, "</h2>\n            <ul>\n                <li>\n            <input type=\"radio\" name=\"option\" value=\"1\" id=\"option1\">\n            <label for=\"option1\">").concat(data[index].option[1], "</label>\n                </li>\n                <li>\n            <input type=\"radio\" name=\"option\" value=\"2\" id=\"option2\">\n            <label for=\"option2\">").concat(data[index].option[2], "</label>\n                </li>\n                <li>\n            <input type=\"radio\" name=\"option\" value=\"3\" id=\"option3\">\n            <label for=\"option3\">").concat(data[index].option[3], "</label>\n                </li>\n                <li>\n            <input type=\"radio\" name=\"option\" value=\"4\" id=\"option4\">\n            <label for=\"option4\">").concat(data[index].option[4], "</label>\n                </li>\n            </ul>\n    ");
}
function result() {
    box.innerHTML = "<h2>You answered ".concat(trueCount, "/").concat(data.length, " questions correctly</h2>");
    button === null || button === void 0 ? void 0 : button.removeEventListener("click", next);
    button === null || button === void 0 ? void 0 : button.addEventListener("click", init);
    button.innerText = "Reload";
}
function checkAnswer() {
    var options = document.querySelectorAll("input[type=radio]");
    var res = false;
    options.forEach(function (option) {
        if (option.checked) {
            option.value == data[index].answer ? trueCount++ : "";
            res = true;
        }
    });
    return res;
}
init();
