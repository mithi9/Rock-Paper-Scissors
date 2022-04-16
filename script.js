function computerPlay(){
    return choice[Math.floor(Math.random()*choice.length)]

}

let choice = ['rock','paper','scissors'];
let playerSelection = prompt('Pick between rock, papaer, or scissors','').toLowerCase();
let computerSelection = computerPlay();



console.log(playerSelection);

function playerPlay(){
    


}