const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset");
const playerChoiceImage = document.getElementById("player-choice");
const computerChoiceImage = document.getElementById("computer-choice");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playGame(e.target.id);
  });
});

resetButton.addEventListener("click", ()=>{
    result.textContent ="";
    message.textContent ="Choose your move:";
    playerChoiceImage.src = "";
    computerChoiceImage.src = "";
})

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const winner = determineWinner(playerChoice, computerChoice);
  message.innerHTML = `<b>You choose ${playerChoice} , computer choose ${computerChoice}</b>`;
  playerChoiceImage.src = `${playerChoice}.jpg`;
  computerChoiceImage.src = `${computerChoice}.jpg`;

  if (winner === "tie") {
    result.textContent = "It's a tie";
  } else if (winner === "player") {
    result.textContent = "You win";
  } else {
    result.textContent = "You lose";
  }
}

function determineWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === " scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }
  return "computer";
}


// console.log("Pilihan ada 3 yaitu: " + choices[0] + ", " + choices[1]);
// console.log(`Pilihan ada 3 yaitu: ${choices[0]}, ${choices[1]}, ${choices[2]}`)