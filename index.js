function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default: return "rock";
    }
}

function playRound(player, computer){
    // game rule
    let p_choice = player.toLowerCase();
    let c_choice = computer.toLowerCase();
    if(p_choice == c_choice){

        console.log('Tie!');
    }
    else if(p_choice == 'paper'){
        if(c_choice == 'rock'){
            console.log('You Win!, Paper beats Rock');
        }
        else{
            console.log('You Lose!, Scissor beats Paper');
        }  
    }
    else if (p_choice == 'rock'){
        if(c_choice == 'scissor'){
            console.log('You Win!, Rock beats Scissor');
        }
        else{
            console.log('You Lose!, Paper beats Rock');
        }  
    }
    else if(p_choice == 'scissor'){  
        if(c_choice == 'paper'){
            console.log('You Win!, Scissor beats Paper');
        }
        else{
            console.log('You Lose!, Rock beats Scissor');
        }
    }
    else{
        console.log('Oops! Something wrong with the choice!')
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        // assuming user are not stupid
        let playerChoice = String(window.prompt("Type your choice: Rock, Paper, Scissor", ""));
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));    
    }
}
// const playerSelection = 'Paper';
// // const computerSelection = getComputerChoice();
// const computerSelection = 'Scissor';
// console.log(playRound(playerSelection, computerSelection));

game();