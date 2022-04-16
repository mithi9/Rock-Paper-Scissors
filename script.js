function computerPlay(){
    return choice[Math.floor(Math.random()*choice.length)]

}

let choice = ['rock','paper','scissors'];
let playerSelection;
let computerSelection;

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


game();

function game(){
    let sum = 0;
    console.log(typeof(sum));

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Pick between rock, papaer, or scissors','').toLowerCase();
        console.log(playerSelection);
        computerSelection = computerPlay();
        console.log(computerSelection);
        sum += playRound(playerSelection, computerSelection);
        console.log(sum);
     }
    
    if (sum>=1){
        alert("You've won the game");
        return;
    }
        else if (sum==0){
            alert("The game was a draw");
            return;
    }
        else{
            alert("You lost the game");
            return;
    }
    
}




