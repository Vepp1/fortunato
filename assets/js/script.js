document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let usersChoice = this.getAttribute("data-type");
                runGame(usersChoice);
                checkAnswer();
            })
        };
    })
    
function score() {
    let playerScore = 0;
    let computerScore = 0;
}    

function runGame(usersChoice) {
    let computerOptions = ['rock','paper','scissors','lizard','spock']
    let choices = Math.floor(Math.random()*5);
    let computerChoice = computerOptions[choices];

    console.log(usersChoice);
    console.log(computerChoice);

    if(computerChoice === usersChoice) {
        console.log("Draw")
    } else if(usersChoice === "rock") {
        if(computerChoice === "paper") {
            console.log("lose");
        } else if(computerChoice === "spock") {
            console.log("lose");
        }  else if(computerChoice === "scissors") {
            console.log("win");
        } else if(computerChoice === "lizard") {
            console.log("win");
        }
    } else if(usersChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("win");
        } else if(computerChoice === "spock") {
            console.log("win");
        }  else if(computerChoice === "scissors") {
            console.log("lose");
        } else if(computerChoice === "lizard") {
            console.log("lose");
        }
    } else if(usersChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("lose");
        } else if(computerChoice === "spock") {
            console.log("lose");
        }  else if(computerChoice === "paper") {
            console.log("win");
        } else if(computerChoice === "lizard") {
            console.log("win");
        } 
    
        } else if(usersChoice === "lizard") {
            if(computerChoice === "rock") {
                console.log("lose");
            } else if(computerChoice === "spock") {
                console.log("win");
            }  else if(computerChoice === "paper") {
                console.log("win");
            } else if(computerChoice === "scissors") {
                console.log("lose");
            }
    
        } else if(usersChoice === "spock") {
            if(computerChoice === "rock") {
                console.log("lose");
            } else if(computerChoice === "lizard") {
                console.log("lose");
            }  else if(computerChoice === "paper") {
                console.log("win");
            } else if(computerChoice === "scissors") {
                console.log("win");
            }
        }
    

}  
