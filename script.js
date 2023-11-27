const btn = document.querySelectorAll('button')
const btnPlayer = document.querySelector('.player')
const playerSpan = document.querySelector('.player-cs')
const computerSpan = document.querySelector('.computer-cs')
const winnerBox = document.querySelector('.winner-ds')

function getComputerChoice() {
    let choice = new Array(3);
    choice = ["rock", "paper", "scissor"];
    let result = Math.floor(Math.random() * 3);
    return choice[result];
  }

  
  
  
  
  
  btn.forEach(button =>{
      button.addEventListener('click' , () =>{
          let computerResult = getComputerChoice();
          let playerChoice = button.name
          playerSpan.textContent = ` you select ${playerChoice}`
          computerSpan.textContent = ` computer select ${computerResult}`

          function playerRound(playerChoice , computerResult){
            if (playerChoice === computerResult) {
                return `Draw`;
              } else if (playerChoice === "rock" && computerResult === "scissor") {
                return "You win";
              } else if (playerChoice === "scissor" && computerResult === "paper") {
                return "You win";
              } else if (playerChoice === "paper" && computerResult === "rock") {
                return `You win`;
              } else if (computerResult === "paper" && playerChoice === "rock") {
                return "Computer wins";
              } else if (computerResult === "scissor" && playerChoice === "paper") {
                return "Computer wins";
              } else if (computerResult === "rock" && playerChoice === "scissor") {
                return "Computer wins";
              } else {
                return "unknown result";
              }
          }

          let winner = playerRound(playerChoice , computerResult)
          winnerBox.textContent = ` ${winner}`

          
        })


    
});


