
const registerForm = document.getElementById("form");
const submitbtn = document.getElementById("submit");
const playerNameInput = document.getElementById("player-name-input");
const playerNameOutput = document.getElementById("player-name-output");
const gameContainer = document.querySelector(".game-container");
const quitBtn = document.getElementById("quit");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const playerweapon = document.getElementById("player-weapon");
const aiweapon = document.getElementById('ai-weapon');
const option = document.getElementById("option");
const aiScoreOutput = document.getElementById("ai-point");
const playerScoreOutput = document.getElementById("player-point");
const result = document.getElementById("resultat")

let weapons = ['sten', 'sax', 'påse'];
let playerScore = 0;
let aiScore = 0;

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    registerForm.style.display = "none";
    gameContainer.style.display = "block";
    playerNameOutput.innerText = playerNameInput.value;
    playerNameInput.value = "";
    
});

rockBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playGame(rockBtn.value);
});

paperBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playGame(paperBtn.value);
});

scissorsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playGame(scissorsBtn.value);
});

quitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    registerForm.style.display = "block";
    gameContainer.style.display = "none";
    resetGame();
    option.style.display = "block"
    

});

function playGame(playerChoice) {
    const cpuChoice = weapons[getRandomNumber()];
    displayChoices(playerChoice, cpuChoice);
    compare(playerChoice, cpuChoice);
    aiScoreOutput.innerText = aiScore;
    playerScoreOutput.innerText = playerScore;

    if (playerScore === 3 || aiScore === 3) {

        option.style.display = "none";
        
        if ( aiScore === 3) {
          result.innerText = " AI won";

        } else {
        result.innerText = "player won";
    }
        
        
    }
}



function displayChoices(playerChoice, cpuChoice) {
    playerweapon.innerText = playerChoice;
    aiweapon.innerText = cpuChoice;
}

function getRandomNumber() {
    return Math.floor(Math.random() * weapons.length);
}

function compare(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        result,innerText = " OAVGJORT";
    } else if (playerChoice === "sten") {
        if (cpuChoice === "sax") {
            playerScore++;
            return "You won.";
        } else {
            aiScore++;
            return "You lose.";
        }
    } else if (playerChoice === "påse") {
        if (cpuChoice === "sten") {
            playerScore++;
            return "You won.";
        } else {
            aiScore++;
            return "You lose.";
        }
    } else if (playerChoice === "sax") {
        if (cpuChoice === "påse") {
            playerScore++;
            return "You won.";
        } else {
            aiScore++;
            return "You lost.";
        }
    }
}

function resetGame() {
    aiScore = 0;
    playerScore = 0;
    aiScoreOutput.innerText = aiScore;
    playerScoreOutput.innerText = playerScore;
    result.innerText = "";
}
