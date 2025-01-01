'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector(".guess").value = 3


let number;
let score = 20;
let highscore = 0;

const generateSecretNumber = () => {
  number = Math.trunc(Math.random() * 20) + 1;
}

generateSecretNumber();

const displayMessage = message => document.querySelector(".message").textContent = message;

document.querySelector(".check").addEventListener("click", function () {

  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {

    if (!guess) {
      displayMessage("Not a number");
    } else {
      if (guess === number) {
        displayMessage("Correct Number");
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "#03fc84"
        score--
        document.querySelector(".score").textContent = score;
        if (score > highscore)
          document.querySelector(".highscore").textContent = score;
      } else {
        if (guess > number) {
          displayMessage("Too high");
        } else if (guess < number) {
          displayMessage("Too low")
        }
        score--
        document.querySelector(".score").textContent = score;
      }
    }
  }

})


document.querySelector(".again").addEventListener("click", function () {

  score = 20;
  generateSecretNumber()
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".guess").value = ""
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
})


