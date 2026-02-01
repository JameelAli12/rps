const rounds = document.getElementById("round")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const userMove = document.getElementById("user-move")
const computerMove = document.getElementById("comp-move")
const u = document.getElementById("u")
const c = document.getElementById("c")
const won = document.getElementById("won")

const getComputerChoice = () => {
    const moves = ['Rock','Paper','Scissor']
    const index = Math.floor(Math.random() * 3)
    computerMove.textContent =` ${moves[index].toUpperCase()}`
    return moves[index]
}

function getUserChoice() {
    getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
}

rock.addEventListener("click",getUserChoice)
paper.addEventListener("click",getUserChoice)
scissor.addEventListener("click",getUserChoice)








// const winner = (comp, user) => {
//     if((comp === 'r' && user === 's') || (comp === 's' && user === 'p') || (comp === 'p' && user === 'r')) return 'Computer Won'    

//     else if((comp === 's' && user === 'r') ||(comp === 'p' && user === 's')|| (comp === 'r' && user === 'p')) return 'You Won'

//     else if(user !== 's' && user !== 'r' && user !== 'p') return 'Please enter a valid option.'

//     return "It's Draw"
// }
// let userScore = 0;
// let compScore = 0;

// const playGame = () => {

//     const computerChoice = getComputerChoice();
//     const userChoice = getUserChoice().toLowerCase()
//      if(userChoice === '' && userChoice!== 'r' && userChoice!== 'p' && userChoice!== 's') return;

//     console.log(`Your move: ${userChoice}   Computer Move: ${computerChoice}`)
//     const won = winner(computerChoice,userChoice)
//     if(won === 'You Won') {
//         console.log(won)
//         userScore++
//     }
//     else if(won === 'Computer Won') {
//         console.log(won)
//         compScore++
//     }
//     else {
//         console.log(won)
//         console.log('no score added')
//     }
//     console.log(`Your Score: ${userScore}   Computer Score: ${compScore}`)
// }

// // for(let i=1; i<=5; i++) {
// //     playGame()
// // }
// if(userScore > compScore) {
//         console.log("Congratulations! You won the game.")
//     }
// else if(userScore < compScore) {
//     console.log("Alas! You lost the game. Better luck next time.")
// }
// else {
//         console.log("The game is drawn. No one won.")
// }



