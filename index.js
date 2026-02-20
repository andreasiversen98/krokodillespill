const score = document.getElementById("score");
const inputField = document.getElementById("inputField");
const crocImg = document.getElementById("crocImg");
const feedback = document.getElementById("feedback");

let points = 0;
let firstNum = 0;
let secondNum = 0;

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}

function generateNum() {
  firstNum = randomNum();
  secondNum = randomNum();
  document.getElementById("firstNum").textContent = firstNum;
  document.getElementById("secondNum").textContent = secondNum;
}

function submitAnswer() {
  let answer = inputField.value;
  if (answer !== "<" && answer !== ">" && answer !== "=") {
    inputField.value = "";
    return;
  } else if (firstNum < secondNum && answer === "<") {
    points++;
    feedback.textContent = "Correct";
    feedback.style.color = "green";
    crocImg.classList.remove("flip");
  } else if (firstNum > secondNum && answer === ">") {
    points++;
    feedback.textContent = "Correct";
    feedback.style.color = "green";
    crocImg.classList.add("flip");
  } else if (firstNum === secondNum && answer === "=") {
    points++;
    feedback.textContent = "Correct";
    feedback.style.color = "green";
  } else {
    points--;
    feedback.textContent = "Incorrect";
    feedback.style.color = "red";
  }
  score.textContent = `Points: ${points}`;
  inputField.value = "";
  generateNum();
}

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitAnswer();
  }
});

generateNum();
