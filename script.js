function computerPlay(){
    return choice[Math.floor(Math.random()*choice.length)]

}

let choice = ['rock','paper','scissors'];
let playerSelection = prompt('Pick between rock, papaer, or scissors','').toLowerCase();
let computerSelection = computerPlay();

let sum = playRound(playerSelection,computerSelection);

console.log(sum);

function playRound(playerSelection, computerSelection){
    
    if (playerSelection==computerSelection){
        alert("Draw!");
        return 0;
    }

    else if (playerSelection=='rock'&&computerSelection=='scissors'){
        alert('You win!');
        return 1;
    }
    else if (playerSelection=='rock'&&computerSelection=='paper'){
        alert('You lose!');
        return -1;
    }

    else if (playerSelection=='paper'&&computerSelection=='rock'){
        alert('You win!');
        return 1;
    }
    else if (playerSelection=='paper'&&computerSelection=='scissors'){
        alert('You lose!');
        return -1;
    }

    else if (playerSelection=='scissors'&&computerSelection=='paper'){
        alert('You win!');
        return 1;
    }
    else if (playerSelection=='scissors'&&computerSelection=='rock'){
        alert('You lose!');
        return -1;
    }
    
    else{
        return;
    }



}