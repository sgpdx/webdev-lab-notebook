// Code edited by Serena Glick / sglick@pdx / sgpdx@github

// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output");

// add an event listener on the target element
copy.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("click event", event);
  output.textContent = userInput.value;
}

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");

// create a new DOM element
let element = document.createElement("div");
element.className = "output2";

let section = document.querySelector("#inputEventExample");
section.append(element);
let output2 = document.querySelector(".output2");

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

// callback function to handle event
function handleInput(event) {
  console.log("input event", event);
  output2.textContent = userInput2.value;
}
