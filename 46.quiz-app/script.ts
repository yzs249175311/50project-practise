let data = [
  {
    question: "Which language runs in a web browser?",
    option: {
      1: "Java",
      2: "C",
      3: "Python",
      4: "JavaScript",
    },
    answer: 4,
  },
  {
    question: "What does CSS stand for?",
    option: {
      1: "Central Style Sheets",
      2: "Cascading Style Sheets",
      3: "Cascading Simple Sheets",
      4: "Cars SUVs Sailboats",
    },
    answer: 2,
  },
  {
    question: "What does HTML stand for?",
    option: {
      1: "Hypertext Markup Language",
      2: "Hypertext Markdown Language",
      3: "Hyperloop Machine Language",
      4: "Helicopters Terminals Motorboats Lamborginis",
    },
    answer: 1,
  },
  {
    question: "What year was JavaScript launched?",
    option: {
      1: "1996",
      2: "1995",
      3: "1994",
      4: "none of the above",
    },
    answer: 3,
  },
];

let box: HTMLDivElement = document.querySelector("#box")!;
let button = document.querySelector("button");
let index = 0;
let trueCount = 0;

function init() {
  index = 0;
  trueCount = 0;
  button?.removeEventListener("click", init);
  button?.addEventListener("click", next);
  button.innerText = "Submit";
  generateQuestion();
}

function next() {
  if (!checkAnswer()) return;

  if (index == data.length - 1) {
    result();
  } else {
    index++;
    generateQuestion();
  }
}

function generateQuestion() {
  box.innerHTML = `
            <h2>${data[index].question}</h2>
            <ul>
                <li>
            <input type="radio" name="option" value="1" id="option1">
            <label for="option1">${data[index].option[1]}</label>
                </li>
                <li>
            <input type="radio" name="option" value="2" id="option2">
            <label for="option2">${data[index].option[2]}</label>
                </li>
                <li>
            <input type="radio" name="option" value="3" id="option3">
            <label for="option3">${data[index].option[3]}</label>
                </li>
                <li>
            <input type="radio" name="option" value="4" id="option4">
            <label for="option4">${data[index].option[4]}</label>
                </li>
            </ul>
    `;
}
function result() {
  box.innerHTML = `<h2>You answered ${trueCount}/${data.length} questions correctly</h2>`;
  button?.removeEventListener("click", next);
  button?.addEventListener("click", init);
  button.innerText = "Reload";
}

function checkAnswer() {
  let options: NodeListOf<HTMLInputElement> =
    document.querySelectorAll("input[type=radio]");
  let res = false;
  options.forEach((option: HTMLInputElement) => {
    if (option.checked) {
      option.value == <unknown>data[index].answer ? trueCount++ : "";
      res = true;
    }
  });

  return res;
}

init();
