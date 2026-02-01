const rounds = document.getElementById("round")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const userMove = document.getElementById("user-move")
const computerMove = document.getElementById("comp-move")
const u = document.getElementById("u-score")
const c = document.getElementById("c-score")
const won = document.getElementById("won")

let userScore = 0;
let compScore = 0;

const getComputerChoice = () => {
    const moves = ['Rock','Paper','Scissor']
    const index = Math.floor(Math.random() * 3)
    computerMove.textContent =` ${moves[index].toUpperCase()}`
    return moves[index]
}

rock.addEventListener("click", function(){
    const computerChoice = getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
    if(computerChoice === 'Scissor') {
        userScore++
    }
    else if(computerChoice === 'Paper') {
        compScore++
    }
})

paper.addEventListener("click", function(){
    const computerChoice = getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
    if(computerChoice === 'Scissor') {
        compScore++
    }
    else if(computerChoice === 'Rock') {
        userScore++
    }
})

scissor.addEventListener("click", function(){
    const computerChoice = getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
    if(computerChoice === 'rock') {
        compScore++
    }
    else if(computerChoice === 'paper') {
        userScore++
    }
})
console.log(userScore, compScore)
const updateScore = () => {
    u.textContent = ' ' + userScore;
    c.textContent = ' ' + compScore;
}
console.log(updateScore())



