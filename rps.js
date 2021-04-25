let options = [
    'rock',
    'paper',
    'scissors'
]


function computerGame() {
    option = options[Math.floor(Math.random() * options.length)];

    return option
}


console.log(computerGame())



function play(playerSelection, computerSeletion) {

    if (playerSelection == computerSeletion) {

        return "It's a tie"
    } else if ((playerSelection = 'rock') && (computerSeletion = 'paper')) {

        return "You Win! Rock beats Paper"

    } else if ((playerSelection = 'paper') && (computerSeletion = 'rock')) {

        return "You Lose! Paper beats Rock"

    } else if ((playerSelection = 'paper') && (computerSeletion = 'scissors')) {

        return "You Lose! Scissors beats Paper"

    } else if ((playerSelection = 'scissors') && (computerSeletion = 'paper')) {

        return "You Lose! Scissors beats Paper"

    } else {
        return "Don't understand"
    }

}

playerSelection = 'rock'
computerSeletion = computerGame()
console.log(play(playerSelection, computerSeletion))