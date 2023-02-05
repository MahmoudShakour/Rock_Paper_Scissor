let userScore=0;
let computerScore=0;
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*3);
    if(randomNumber===1){
        return "rock";
    }
    else if(randomNumber===2){
        return "paper";
    }
    else return "scissor";
}


function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    if(playerSelection===computerSelection)
        return "Tie";
    
    if( (playerSelection==="rock"&&computerSelection==="scissor")
        ||(playerSelection==="scissor"&&computerSelection==="paper")
        ||(playerSelection==="paper"&&computerSelection==="rock"))
        {
            userScore++;
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
    else{ 
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game(){
    for(let i=0;i<5;i++){
        let userSelection=prompt("Select your tool: ");
        console.log(playRound(userSelection,getComputerChoice()));
    }

    if(userScore>computerScore){
        console.log("you win the game!");
    }
    else{
        console.log("try again,you lost the game!");
    }
}

game();