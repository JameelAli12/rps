const getComputerChoice = () => {
    const moves = ['r','p','s']
    const index = Math.floor(Math.random() * 3)
    return moves[index]
}

const computerChoice = getComputerChoice();

const getUserChoice = () => {
    return prompt("Choose your move: \n (r for rock, p for paper, s for scissor")
}

const userChoice = getUserChoice().toLowerCase()

let userScore = 0;
let compScore = 0;

const declareWinner = () => {
    console.log('Your Move:'+userChoice)
    console.log('Computer Move:'+computerChoice)
    
    if(computerChoice === 'r' && userChoice === 's') {
        return 'Computer Won'
    }
    else if(computerChoice === 's' && userChoice === 'p') {
        return 'Computer Won'
    }
    else if(computerChoice === 'p' && userChoice === 'r') {
        return 'Computer Won'
    }
    else if(computerChoice === 's' && userChoice === 'r') {
        return 'You Won'
    }
    else if(computerChoice === 'p' && userChoice === 's') {
        return 'You Won'
    }
    else if(computerChoice === 'r' && userChoice === 's') {
        return 'You Won'
    }
    return "It's Draw"
}
const winner = declareWinner()
const trackScores = () => {
    if(winner === 'Computer Won') {
        compScore++
    }
    else if(winner === 'You Won') {
        userScore++
    }
    console.log(`Your Score: ${userScore} \n Computer Score: ${compScore}`)
}

const playGame = () => {
    declareWinner();
    trackScores();
}




//when we play rps, there are two people with different minds so nobody knows what is going to be the next move of each other. 
//in our case, there will also be two players: one computer and the other user or two users is also possible. But, for now let's think about user vs computer.
//first of all to make it really simple, let's ask user for his move and we will give him options: r,p,s
//and then the computer will respond randomly against the player move.
//now there are cases to discuss about who won. 
//other than that after the game finshes and the winner is declared the game should ask for the move again.

//cases: r vs s vs p
// r wins over s
// s wins over p
// p wins over r