const hightlightStyle = `4px solid yellow`; 
const defaultMessage = "Make Your Choices and Start Playing!";
const playerButtons = document.querySelectorAll('.player-btn');
const computerButtons = document.querySelectorAll('.computer-btn');
const computerScoreElement = document.querySelector('.computer-score');
const playerScoreElement = document.querySelector('.player-score');
const gameMessageElement = document.querySelector('.game-message');
const gameOverBlock = document.querySelector('.game-over');
const playAgain = document.querySelector('.again-btn');

var playerScore = 0;
var computerScore = 0;
var computerChoiceIndex = 0;

updateGameMessage(defaultMessage);

playerButtons.forEach( btn => 
    btn.addEventListener('click', (e) => {
            if(!gameOverCheck()){
                let playerChoice = e.target.textContent;
                let computerChoice = getComputerChoice()
                playRound(playerChoice, computerChoice);
                playerScoreElement.textContent = `${playerScore}`;
                computerScoreElement.textContent = `${computerScore}`;
            }
            if(gameOverCheck()){
                let message = (playerScore > computerScore) ? "Winner Winner Chicken Dinner" : 
                    "Oof! Computer Wins";
                updateGameMessage(message);
                deactivatePlayerChoice();
            }
        }
    )
);

playAgain.addEventListener('click', restart);

function restart(){
    playerScore = 0;
    computerScore = 0;
    computerChoiceIndex = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    updateGameMessage(defaultMessage);
    gameOverBlock.style.display = 'none';
}
function deactivatePlayerChoice(){
    highlightComputerChoice(-1);
    gameOverBlock.style.display = 'flex';
}
function gameOverCheck(){
    return playerScore === 5 || computerScore === 5;
}

function updateGameMessage(msg){
    gameMessageElement.textContent = msg;
}

function highlightComputerChoice(index){
    computerButtons[computerChoiceIndex].style.border = 'none';
    if(index >= 0 && index < 3){
        computerButtons[index].style.border = hightlightStyle;
        computerChoiceIndex = index;
    }
}

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
            highlightComputerChoice(0);
            return "rock";
        case 1:
            highlightComputerChoice(1);
            return "paper";
        case 2:
            highlightComputerChoice(2);
            return "scissor";
        default: 
            highlightComputerChoice(0);
            return "rock";
    }
}

function playRound(player, computer){
    // game rule
    let p_choice = player.toLowerCase();
    let c_choice = computer.toLowerCase();
    if(p_choice == c_choice){
        updateGameMessage('Tie!');
    }
    else if(p_choice == 'paper'){
        if(c_choice == 'rock'){
            updateGameMessage('You Win! Paper beats Rock!');
            ++playerScore;
        }
        else{
            updateGameMessage('You Lose! Scissor beats Paper!');
            ++computerScore;
        }  
    }
    else if (p_choice == 'rock'){
        if(c_choice == 'scissor'){
            updateGameMessage('You Win! Rock beats Scissor!');
            ++playerScore;
        }
        else{
            updateGameMessage('You Lose! Paper beats Rock!');
            ++computerScore;
        }  
    }
    else if(p_choice == 'scissor'){  
        if(c_choice == 'paper'){
            updateGameMessage('You Win! Scissor beats Paper!');
            ++playerScore;
        }
        else{
            updateGameMessage('You Lose! Rock beats Scissor!');
            ++computerScore;
        }
    }
    else{
        updateGameMessage('Oops! Something wrong with the choice!');
    }
}

