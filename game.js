let botScore = 0;
let playerScore = 0;
let playerValue;

var vid = document.getElementById("myVideo");
vid.volume = 0.4;

function randomNumber() {
  const randomNum = Math.floor(Math.random() * 3);
  let result = "";
  if (randomNum == 0) {
    result = "rock"
  }
  if (randomNum == 1) {
    result = "paper"
  }
  if (randomNum == 2) {
    result = "scissors"
  }
  return result;
}
// function game(){
//   const bot = randomNumber();
//   const player = "rock";
//   if(bot === "scissors" && player === "rock"){
//     playerScore++;
//     document.getElementsByClassName("number")[0].innerHTML = playerScore;
//     document.getElementsByClassName("status")[0].innerHTML  = "You win";
//   }
//   if(bot == "rock" && player === "rock"){
//     document.getElementsByClassName("status")[0].innerHTML  = "Draw";
//   }
//   if(bot == "paper" && player === "rock"){
//     botScore++;
//     document.getElementsByClassName("number")[1].innerHTML = botScore;
//     document.getElementsByClassName("status")[0].innerHTML = "You lose";
//   }
// }
function scissors() {
  playerValue = "scissors";
  const bot = randomNumber();
  if (bot == "scissors" && playerValue === "scissors") {
    document.getElementsByClassName("status")[0].innerHTML = "Draw";
    console.log(`${playerValue} vs ${bot}`);
  }
  if (bot == "rock" && playerValue === "scissors") {
    botScore++;
    document.getElementsByClassName("number")[1].innerHTML = botScore;
    document.getElementsByClassName("status")[0].innerHTML = "You lose";
    console.log(`${playerValue} vs ${bot}`);
  }
  if (bot == "paper" && playerValue === "scissors") {
    playerScore++;
    document.getElementsByClassName("number")[0].innerHTML = playerScore;
    document.getElementsByClassName("status")[0].innerHTML = "You win";
    console.log(`${playerValue} vs ${bot}`);
  }
}
function rock() {
  playerValue = "rock";
  const bot = randomNumber();
  if (bot == "scissors" && playerValue === "rock") {
    playerScore++;
    document.getElementsByClassName("number")[0].innerHTML = playerScore;
    document.getElementsByClassName("status")[0].innerHTML = "You win";
    console.log(`${playerValue} vs ${bot}`);
  }
  if (bot == "rock" && playerValue === "rock") {
    document.getElementsByClassName("status")[0].innerHTML = "Draw";
    console.log(`${playerValue} vs ${bot}`);
  }
  if (bot == "paper" && playerValue === "rock") {
    botScore++;
    document.getElementsByClassName("number")[1].innerHTML = botScore;
    document.getElementsByClassName("status")[0].innerHTML = "You lose";
    console.log(`${playerValue} vs ${bot}`);
  }
}
function paper() {
  playerValue = "paper";
  const bot = randomNumber();
  if (bot == "scissors" && playerValue === "paper") {
    botScore++;
    document.getElementsByClassName("number")[1].innerHTML = botScore;
    document.getElementsByClassName("status")[0].innerHTML = "You lose";
    console.log(`${playerValue} vs ${bot}`);
  }
  if (bot == "rock" && playerValue === "paper") {
    playerScore++;
    document.getElementsByClassName("number")[0].innerHTML = playerScore;
    document.getElementsByClassName("status")[0].innerHTML = "You win";

  }
  if (bot == "paper" && playerValue === "paper") {
    document.getElementsByClassName("status")[0].innerHTML = "Draw";
    console.log(`${playerValue} vs ${bot}`);
  }
}