const buttonElements = document.querySelectorAll('.choices');
const resetElement = document.getElementById('reset');

//Holds the result
let testElement = document.getElementById('test');

// Computer score if won
let cpuScore = 0;

// Player score if won 
let playerScore = 0;

// Result of each round
let result = "";

//Get computer selection for the round
function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

// Update result of each round
function updateResult(){
    testElement.textContent = `${result}`;
}

// Update score during playRound
function updateScore(){
    let pS = document.getElementById('player');
    let cS = document.getElementById('cpu');

    cS.textContent = `${cpuScore}`;
    pS.textContent = `${playerScore}`;

    // When score reaches 5
    endGame();
}

function endGame(){
    if (`${cpuScore}` === `5` && resetElement.style.display !== 'block'){
        // Hide the rest of buttons so reset is only available
        hideButtons();
        resetElement.style.display = "block";
        testElement.textContent = `You lost the game. Play again or you'll stay a loser.`
    } 
    else if (`${playerScore}` === `5` && resetElement.style.display !== 'block'){
        hideButtons();
        resetElement.style.display = "block";
        testElement.textContent = 'You won the game. What a fluke.'
    } else{
        resetElement.style.display = "none";
    }
}

function hideButtons(){
    buttonElements.forEach(e => {
        e.style.display = "none";
    });
}

function reset(){
    location.reload();
}


//Play a round of the game
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        result = 'You lose! Paper beats rock.';
        cpuScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        result = 'You win! Rock beats scissors';
        playerScore++;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'rock'){
        result =  'Tie!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        result = 'You win! Scissors beats paper';
        playerScore++;
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        result = 'Tie!';
    }    
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        result =  'You lose! Rock beats scissors';
        cpuScore ++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        result = 'You win! Paper beats rock.';
        playerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        result =  'You lose! Scissors beats paper';
        cpuScore++;
    } 
    else if (playerSelection=== 'paper' && computerSelection === 'paper'){
        result=  'Tie!';
    } 
    else {
        result = 'There was an error!';
    }
    updateResult();
    updateScore();
}

//Event listeners
buttonElements.forEach(e => {
    e.addEventListener('click', function(){
        
        playerSelection = e.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
});

resetElement.addEventListener('click', reset );