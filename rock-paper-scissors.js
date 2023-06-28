//BUTTON

//getting the ids from the button div and adding event listeners to each button

const button1 = document.getElementById('button1');
button1.addEventListener('click', showNextButton);

const button2 = document.getElementById('button2');
button2.addEventListener('click', showNextButton);

const button3 = document.getElementById('button3');
button3.addEventListener('click', showNextButton);

button2.style.pointerEvents = 'none';//controls how an element responds to user input 
button3.style.pointerEvents = 'none';

//set initial z-index of the buttons and opacity to 0

button1.style.zIndex = 1;
button2.style.zIndex = 0;
button3.style.zIndex = 0;

button1.style.opacity = 1;
button2.style.opacity = 0;
button3.style.opacity = 0;

//function to handle button click event

function showNextButton(event) {
    
    let nextButton;
    let currentButton = event.target.parentElement; //saves the value of the parent of the clicked button (eg button1)
  
    if (currentButton === button1) {
      nextButton = button2;
    } 
    else if (currentButton === button2) {
      if (cpuScore >= 5 || humanScore >= 5) {
        nextButton = button3;
      }
    } 
    else if (currentButton === button3) {
      nextButton = button1;
    }
  
    //checking if nextButton is undefined and there is a valid next button
    if (nextButton) {
      //hide the current button
        currentButton.style.opacity = 0;

            setTimeout(function () {
                //increase the z-index of the next button div
                nextButton.style.zIndex = parseInt(nextButton.style.zIndex) + 1;//parseInt converts string to number so we can add it
        
                //show the next button
                nextButton.style.display = 'block';

                currentButton.style.pointerEvents = 'none';
                nextButton.style.pointerEvents = 'auto';

                setTimeout(function () {
                
                    nextButton.style.opacity = 1;
                    
                    }, 10);
                }, 300); //delay the showing of the next button after hiding the current button
        
            //disable buttons with opacity 0
      
      
    }
    
  }

//GAME

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

let cpuScore = 0;
let humanScore = 0;

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
        document.getElementById('humanScore').textContent = humanScore;
    } 
    else {
        roundWinner = "You lose!";
        cpuScore++;
        document.getElementById('cpuScore').textContent = cpuScore;
    }
    roundWinner += ` ${playerSelection} beats ${computerSelection}`;
    return roundWinner;
}

//the function that runs the game and keeps the score

let gameOver  = false;
let roundCounter = 0; //counter variable for tracking the current round
let resultElement = document.getElementById('result');
let resultLast = document.getElementById('result');

game = (playerSelection) => {

    if(gameOver === true){
        console.log("Want to play again?")
        return;
    }

    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    
    roundCounter++;
    document.getElementById('roundCounter').textContent = roundCounter;
    console.log(roundResult); 

    resultElement.textContent = roundResult;
    

    if(cpuScore >= 5 || humanScore >=5){
        if(cpuScore > humanScore){
            resultLast.textContent = "You lose the game!";
            gameOver = true;
        }
        else if(cpuScore < humanScore){
            resultLast.textContent = "You win the game!";
            gameOver = true;
        }
        else{
            resultLast.textContent = "It's a tie!";
            gameOver = true;
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
    cpuScore = 0;
    humanScore = 0;
    roundCounter = 0;
    document.getElementById('humanScore').textContent = '0';
    document.getElementById('cpuScore').textContent = '0';
    document.getElementById('roundCounter').textContent = '0';
    resultElement.textContent = '';
    resultLast.textContent = '';
    gameOver = false; //toggle the value of gameOver variable
});

