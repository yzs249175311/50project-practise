let content = document.querySelector("#content");
let styleElement = document.createElement("style");

document.head.appendChild(styleElement);

styleElement.sheet.insertRule(
  `
    #content::before{
         animation: typewriter ${content.innerText.length / 2}s steps(${
           content.innerText.length
         }) alternate infinite,
         flashing 0.3s ease forwards infinite;
        }
    `,
);

styleElement.sheet.insertRule(
  `
    #content::after {
         animation: typewriter ${content.innerText.length / 2}s steps(${
           content.innerText.length
         }) alternate infinite;
    }
`,
);
