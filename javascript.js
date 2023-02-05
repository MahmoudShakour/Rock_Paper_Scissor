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


function Game(){    
    let manChoice=this.textContent;
    let statusText=playRound(manChoice,getComputerChoice());
    
    const status=document.querySelector(".status");
    status.textContent=statusText;

    
    const manTextScore=document.querySelector("#man-score");
    manTextScore.textContent=userScore.toString();
    
    const computerTextScore=document.querySelector("#computer-score");
    computerTextScore.textContent=computerScore.toString();
    
    checkResult();
}

const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener('click',Game);
});

function checkResult(){
    
    console.log(userScore + " " + computerScore);
    
    if(userScore===5){
        endGame("You Win The game,Congratulations!");
    }
    else if(computerScore===5){
        endGame("You Lost The Game,Try Again.")
    }
}

function endGame(message){
    
    const messageBlock=document.createElement("div");
    messageBlock.classList.add("status");
    messageBlock.textContent=message;

    const gameMode=document.querySelector(".game-mode");
    const buttons=document.querySelector(".buttons");
    const score=document.querySelector(".score");

    gameMode.removeChild(buttons);
    gameMode.insertBefore(messageBlock,score);
}

