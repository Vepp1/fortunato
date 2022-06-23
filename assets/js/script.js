document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let usersChoice = this.getAttribute("data-type");
                runGame(usersChoice);
            })
        };
    })  

function runGame(usersChoice) {
    let computerOptions = ['rock','paper','scissors','lizard','spock']
    let choices = Math.floor(Math.random()*5);
    let computerChoice = computerOptions[choices];
    let winner = checkWinner(usersChoice, computerChoice);

    if (winner === "tie") { 
        alert("Tie");
    } else if (winner === "player") {
        incrementScorePlayer();
    } else if (winner === "computer") {
        incrementScoreComputer();
    }


    changeDisplay(usersChoice, computerChoice)

    console.log(usersChoice);
    console.log(computerChoice);
    console.log(winner);

    
    

} 

function changeDisplay(usersChoice, computerChoice) {


    if (usersChoice === "paper") {
        document.getElementById("playerPNG").src="assets/images/toilet-paper.png";
    } else if (usersChoice === "scissors") {
        document.getElementById("playerPNG").src="assets/images/scissors.png";
    } else if (usersChoice === "rock") {
        document.getElementById("playerPNG").src="assets/images/rock.png";
    } else if (usersChoice === "lizard") {
        document.getElementById("playerPNG").src="assets/images/iguana.png";
    }   else if (usersChoice === "spock") {
        document.getElementById("playerPNG").src="assets/images/vulcan-salute.png";
    }
    
    if (computerChoice === "paper") {
        document.getElementById("computerPNG").src="assets/images/toilet-paper.png";
    } else if (computerChoice === "scissors") {
        document.getElementById("computerPNG").src="assets/images/scissors.png";
    } else if (computerChoice === "rock") {
        document.getElementById("computerPNG").src="assets/images/rock.png";
    } else if (computerChoice === "lizard") {
        document.getElementById("computerPNG").src="assets/images/iguana.png";
    }   else if (computerChoice === "spock") {
        document.getElementById("computerPNG").src="assets/images/vulcan-salute.png";
    }
} 

function checkWinner(usersChoice, computerChoice) {

    if(computerChoice === usersChoice) {
    return "tie";
} else if(usersChoice === "rock") {
    if(computerChoice === "paper") {
        return "computer";
    } else if(computerChoice === "spock") {
        return "computer";
    }  else if(computerChoice === "scissors") {
        return "player";;
    } else if(computerChoice === "lizard") {
        return "player";;
    }
} else if(usersChoice === "paper") {
    if(computerChoice === "rock") {
        return "player";
    } else if(computerChoice === "spock") {
        return "player";;
    }  else if(computerChoice === "scissors") {
        return "computer";
    } else if(computerChoice === "lizard") {
        return "computer";
    }
} else if(usersChoice === "scissors") {
    if(computerChoice === "rock") {
        return "computer";
    } else if(computerChoice === "spock") {
        return "computer";
    }  else if(computerChoice === "paper") {
        return "player";
    } else if(computerChoice === "lizard") {
        return "player";;
    } 

    } else if(usersChoice === "lizard") {
        if(computerChoice === "rock") {
            return "computer";;
        } else if(computerChoice === "spock") {
            return "player";;
        }  else if(computerChoice === "paper") {
            return "player";;
        } else if(computerChoice === "scissors") {
            return "computer";;
        }

    } else if(usersChoice === "spock") {
        if(computerChoice === "rock") {
            return "computer";
        } else if(computerChoice === "lizard") {
            return "computer";
        }  else if(computerChoice === "paper") {
            return "player";
        } else if(computerChoice === "scissors") {
            return "player";
        }
    }
}    

function incrementScorePlayer() {

    let oldScore = parseInt(document.getElementById("playerscore").innerText);
    document.getElementById("playerscore").innerText = ++oldScore;

}

function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById("computerscore").innerText);
    document.getElementById("computerscore").innerText = ++oldScore;
}
