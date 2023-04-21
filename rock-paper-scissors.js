//function for getting users input

getUserChoice = () =>{
    let userInput = prompt("Pick rock, paper and scissors");
    const human = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase(); //making every input the same
    return human;
}

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
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        roundWinner = "You win! Rock beats scissors!";
        humanScore++;
    } 
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        roundWinner = "You lose! Paper beats rock!";
        cpuScore++;
    }  
    else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        roundWinner = "You win! Paper beats rock!";
        humanScore++;
    } 
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        roundWinner = "You lose! Scissors beats paper!";
        cpuScore++;
    } 
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        roundWinner = "You win! Scissors beats paper!";
        humanScore++;
    } 
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        roundWinner = "You lose! Rock beats scissors!";
        cpuScore++;
    }
    
    return roundWinner;
}

//the function that runs the game and keeps the score

game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if(cpuScore > humanScore){
        console.log("You lose the game!");
        return [cpuScore];
    }
    else if(cpuScore < humanScore){
        console.log("You win the game!");
        return [humanScore];
    }
    else{
        console.log("It's a tie!");
    }
}


