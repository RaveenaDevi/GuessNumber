'use strict'

let number = generateSecretNumber();
let score = 20;
let highScore = 0;
let gameOver = false;

function generateSecretNumber(){
  return Math.trunc(Math.random()*20)+1;
}

function displayMessage(message){
  document.querySelector(".message").textContent = message;
}
function updateScore(){
  document.querySelector(".score").textContent = score;
}

function updateHighScore(){
  if(score>highScore){
  highScore = score;
  document.querySelector(".highscore").textContent = highScore;
}
}





function evaluateGuess(guess){
  const guessInput = document.querySelector(".guess");

const minValue = guessInput.getAttribute("min");
const maxValue = guessInput.getAttribute("max");
if(guess<minValue||guess>maxValue){
  
}

  if(guess===number){
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor="#03fc84";
    updateHighScore();
    document.querySelector(".guess").setAttribute("disabled",true);
    document.querySelector(".check").textContent ="Start Again";
    gameOver = true;
  }
  else{
    displayMessage(guess > number ? "Too high" : "Too low");
    score--;
    updateScore();
    if(score=== 0){
      displayMessage("You Lost!");
      document.querySelector("body").style.backgroundColor="#FF0000";
      document.querySelector(".guess").setAttribute("disabled",true);
      document.querySelector(".check").textContent ="Start Again";
      gameOver = true;
    }
    
  }
}
console.log(number = generateSecretNumber());

function checkGuess(){
  if(!gameOver){
    const guessInput = document.querySelector(".guess");
    const guess = Number(guessInput.value);
  if(!guess){
    displayMessage("Not a number");
  }
  else{
  evaluateGuess(guess);
  }
}
else{
  resetGame();
}
}
function resetGame(){
number = generateSecretNumber();
score = 20;
document.querySelector(".number").textContent = "?";
document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".guess").value = "";
document.querySelector(".guess").removeAttribute("disabled");
document.querySelector(".check").textContent ="Check";
updateScore();
displayMessage("Start guessing...");
gameOver = false;

}

document.querySelector(".check").addEventListener("click",checkGuess);

document.querySelector(".again").addEventListener("click",resetGame);
document.querySelector(".highscore").textcontent = highScore;
// document.querySelector(".number").textContent = number = generateSecretNumber();