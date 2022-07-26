/**
 * The main game "loop", called when the script is first loaded
 * and after the user clicked a button
 */

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    modalC();
    gameMenu();

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let usersChoice = this.getAttribute("data-type");
            runGame(usersChoice);
        });
    }
});

/**
 * The function to run the game, which sets the computers choice
 * and calls other functions to check winner, increment score
 * and reduce the moves left
 */

function runGame(usersChoice) {
    let computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let choices = Math.floor(Math.random() * 5);
    let computerChoice = computerOptions[choices];
    let winner = checkWinner(usersChoice, computerChoice);

    if (winner === "tie") {
        movesLeft();
    } else if (winner === "player") {
        incrementScore("player");
        movesLeft();
    } else if (winner === "computer") {
        incrementScore("computer");
        movesLeft();
    }


    changeDisplay(usersChoice, computerChoice);
}

/**
 * This function was build to change the display image according
 * to the option that was chosen by each player
 */

function changeDisplay(usersChoice, computerChoice) {


    if (usersChoice === "paper") {
        document.getElementById("playerPNG").src = "assets/images/toilet-paper.png";
    } else if (usersChoice === "scissors") {
        document.getElementById("playerPNG").src = "assets/images/scissors.png";
    } else if (usersChoice === "rock") {
        document.getElementById("playerPNG").src = "assets/images/rock.png";
    } else if (usersChoice === "lizard") {
        document.getElementById("playerPNG").src = "assets/images/iguana.png";
    } else if (usersChoice === "spock") {
        document.getElementById("playerPNG").src = "assets/images/vulcan-salute.png";
    }

    if (computerChoice === "paper") {
        document.getElementById("computerPNG").src = "assets/images/toilet-paper.png";
    } else if (computerChoice === "scissors") {
        document.getElementById("computerPNG").src = "assets/images/scissors.png";
    } else if (computerChoice === "rock") {
        document.getElementById("computerPNG").src = "assets/images/rock.png";
    } else if (computerChoice === "lizard") {
        document.getElementById("computerPNG").src = "assets/images/iguana.png";
    } else if (computerChoice === "spock") {
        document.getElementById("computerPNG").src = "assets/images/vulcan-salute.png";
    }
}

/**
 * The function checkWinner, returns who won each round of the game
 * or if it was a tie
 */

function checkWinner(usersChoice, computerChoice) {

    if (computerChoice === usersChoice) {
        return "tie";
    } else if (usersChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        } else if (computerChoice === "spock") {
            return "computer";
        } else if (computerChoice === "scissors") {
            return "player";
        } else if (computerChoice === "lizard") {
            return "player";
        }
    } else if (usersChoice === "paper") {
        if (computerChoice === "rock") {
            return "player";
        } else if (computerChoice === "spock") {
            return "player";
        } else if (computerChoice === "scissors") {
            return "computer";
        } else if (computerChoice === "lizard") {
            return "computer";
        }
    } else if (usersChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer";
        } else if (computerChoice === "spock") {
            return "computer";
        } else if (computerChoice === "paper") {
            return "player";
        } else if (computerChoice === "lizard") {
            return "player";
        }

    } else if (usersChoice === "lizard") {
        if (computerChoice === "rock") {
            return "computer";
        } else if (computerChoice === "spock") {
            return "player";
        } else if (computerChoice === "paper") {
            return "player";
        } else if (computerChoice === "scissors") {
            return "computer";
        }

    } else if (usersChoice === "spock") {
        if (computerChoice === "rock") {
            return "computer";
        } else if (computerChoice === "lizard") {
            return "computer";
        } else if (computerChoice === "paper") {
            return "player";
        } else if (computerChoice === "scissors") {
            return "player";
        }
    }
}

/**
 * The function incrementScore, changes the score according to
 * who won the round. At first, there were two functions to increment score,
 * one for the computer and one for the player. But I merged these two funtions
 * into one
 */

function incrementScore(player) {

    if (player === "player") {
        let oldScore = parseInt(document.getElementById("playerscore").innerText);
        document.getElementById("playerscore").innerText = ++oldScore;
    } else {
        let oldScore = parseInt(document.getElementById("computerscore").innerText);
        document.getElementById("computerscore").innerText = ++oldScore;
    }
}

/**
 * The function movesLeft, reduces the amount of moves that the player
 * has. Once the moves are out, it calls the function gameOver, to end 
 * the game
 */
function movesLeft() {
    let moves = parseInt(document.getElementById("moves").innerText);
    document.getElementById("moves").innerText = --moves;

    if (moves === 0) {
        gameOver();
    }
}


/**
 * The function gameOver calls a modal to tell who was the winner.
 */
function gameOver() {
    let player = parseInt(document.getElementById("playerscore").innerText);
    let computer = parseInt(document.getElementById("computerscore").innerText);



    modalB(player, computer);

}


/**
 * This function was build to change the modal inner text, 
 * to tell who was the winner of the game. The modal also allow 
 * the player to restart the game
 */
function modalB(player, computer) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    if (player > computer) {
        document.getElementById("result").innerText = "Congratulations, you won the game!";
    } else if (player < computer) {
        document.getElementById("result").innerText = "Oooooh :( You lost the game!";
    } else if (player === computer) {
        document.getElementById("result").innerText = "It's a tie!";
    } else {
        document.getElementById("result").innerText = "Ooooops! Something went wrong!";
    }

}

/**
 * The modalC, is the modal that pops up when the player clicks
 * on instructions.
 */
function modalC() {
    var modal = document.getElementById("myModal2");
    var instructions = document.getElementById("instructions");
    var span = document.getElementsByClassName("close")[0];

    instructions.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
}

/**
 * The function gameMenu, gives functionatilly to the game menu buttons 
 * Play Game and Instructions
 */
function gameMenu() {
    var game = document.getElementsByClassName("game")[0];
    var buttons = document.getElementsByClassName("game-button")[0];
    var btn = document.getElementById("play");

    btn.onclick = function () {
        ;
        game.style.display = "block"
        buttons.style.display = "none";

    }


}