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

const winner = (comp, user) => {
    if(comp === 'r' && user === 's') {
        return 'Computer Won'       
    }
    else if(comp === 's' && user === 'p') {
        return 'Computer Won'
    }
    else if(comp === 'p' && user === 'r') {
        return 'Computer Won'
    }
    else if(comp === 's' && user === 'r') {
        return 'You Won'
    }
    else if(comp === 'p' && user === 's') {
        return 'You Won'
    }
    else if(comp === 'r' && user === 's') {
        return 'You Won'
    }
    return "It's Draw"
}
let userScore = 0;
let compScore = 0;

const playGame = () => {
    console.log(`Your move: ${userChoice}   Computer Move: ${computerChoice}`)
    const won = winner(computerChoice,userChoice)
    if(won === 'You Won') {
        console.log(won)
        userScore++
    }
    else if(won === 'Computer Won') {
        console.log(won)
        compScore++
    }
    else {
        console.log(won)
        'no score added'
    }
    console.log(`Your Score: ${userScore}   Computer Score: ${compScore}`)
}

for(let i=1; i<=5; i++) {
    playGame();
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