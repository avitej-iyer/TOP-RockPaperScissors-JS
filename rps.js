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

//function game(){
    //let x = parseInt(prompt("How many rounds do you want to play? : "));
let player_score = 0;
let comp_score = 0;
let player_selected;
let score = document.createElement('div');
let buttons = document.querySelectorAll(".choices button");
let choice = document.querySelector(".choices");
        
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRPSround(button.id, getComputerChoice());
        if (result.slice(0,5) == "You W"){
            player_score++;
        }
        else if (result.slice(0,5) == "You L"){
            comp_score++;
        }
        score.textContent = ("Player : " + player_score + "\nComputer : " + comp_score);
        choice.appendChild(score);
    })
})

    
//}

