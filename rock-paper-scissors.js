//function for the choice of the computer 

getComputerChoice = () => {
    let cpu = Math.floor(Math.random() * 3 );
    if(cpu == 0){
        cpu = 'Paper';
    }
    else if(cpu == 1){
        cpu = 'Scissors';
    }
    else{    
        cpu = 'Rock';
    }
    return cpu;
}

//function for the game and score keeping

let cpuScore = [];
let humanScore = [];

playRound = (playerSelection, computerSelection) => {
	let roundWinner = "";
    
    if(playerSelection === computerSelection){
	    roundWinner = "It's a tie!";
    } 
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        roundWinner = "You win!";
        humanScore++;
    } 
    else {
        roundWinner = "You lose!";
        cpuScore++;
    }
    roundWinner += ` ${playerSelection} beats ${computerSelection}`;
    return roundWinner;
}

//the function that runs the game and keeps the score

let gameOver  = false;
let roundCounter = 0; //counter variable for tracking the current round

game = (playerSelection) => {
    
    if(gameOver === true){
        console.log("Want to play again?")
        return;
    }

    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    
    roundCounter++;
    
    console.log(roundResult);

    if(cpuScore >= 5 || humanScore >=5){
        gameOver = true;
        if(cpuScore > humanScore){
            console.log("You lose the game!");
            console.log([cpuScore]);
        }
        else if(cpuScore < humanScore){
            console.log("You win the game!");
            console.log([humanScore]);
        }
        else{
            console.log("It's a tie!");
        }
    }
}

//update event listeners for buttons
const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => game('Rock'));

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => game('Paper'));

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => game('Scissors'));

const btnAgain = document.querySelector('#btnAgain');
btnAgain.addEventListener('click', () => {
    gameOver = false; //toggle the value of gameOver variable
    cpuScore = []; //reset scores 
    humanScore = [];
    console.log("Game is over:", gameOver);
});

