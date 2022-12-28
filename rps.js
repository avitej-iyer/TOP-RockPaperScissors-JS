function getComputerChoice(){
    let x = ["rock", "paper", "scissors"];
    return x[Math.floor(Math.random()*x.length)];
}

function playRPSround(playerSelection, computerSelection){
    if (playerSelection[0].toLowerCase() == "r" && computerSelection.toLowerCase() == "scissors"){
        return ("You win! Computer chose Scissors!");
    } 
    else if (playerSelection[0].toLowerCase() == "s" && computerSelection.toLowerCase() == "rock"){
        return ("You lose! Computer chose Rock!");
    }
    else if (playerSelection[0].toLowerCase() == "r" && computerSelection.toLowerCase() == "paper"){
        return ("You lose! Computer chose Paper!");
    }
    else if (playerSelection[0].toLowerCase() == "p" && computerSelection.toLowerCase() == "rock"){
        return ("You win! Computer chose Rock!");
    }
    else if ((playerSelection[0].toLowerCase() == "s" && computerSelection.toLowerCase() == "paper")){
        return ("You win! Computer chose Paper!");
    }
    else if ((playerSelection[0].toLowerCase() == "p" && computerSelection.toLowerCase() == "scissors")){
        return ("You lose! Computer chose Scissors!");
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return ("It's a draw!");
    }
    else{
        return null;
    }
}

function game(){
    let x = parseInt(prompt("How many rounds do you want to play? : "));
    for (let i = 0; i<x; i++){
        console.log(playRPSround(prompt("What is your choice (Rock, Paper, Scissors)? : "), getComputerChoice()));
    }
    
}