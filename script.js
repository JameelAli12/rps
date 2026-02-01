const rounds = document.getElementById("r")
const drawnRounds = document.getElementById("d")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const userMove = document.getElementById("user-move")
const computerMove = document.getElementById("comp-move")
const u = document.getElementById("u-score")
const c = document.getElementById("c-score")
const won = document.getElementById("won")
const restart = document.getElementById("restart")

let userScore = 0;
let compScore = 0;
let currRound = 0;
const maxRounds = 10;

const updateScore = () => {
    u.textContent = ' ' + userScore;
    c.textContent = ' ' + compScore;
    rounds.textContent = ' ' + currRound;
    drawnRounds.textContent = ' ' + (currRound - (userScore + compScore))
}

const getComputerChoice = () => {
    const moves = ['Rock','Paper','Scissor']
    const index = Math.floor(Math.random() * 3)
    computerMove.textContent =` ${moves[index].toUpperCase()}`
    return moves[index]
}

rock.addEventListener("click", function(){
    if(currRound >= maxRounds) return;
    currRound++
    const computerChoice = getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
    if(computerChoice === 'Scissor') {
        userScore++
    }
    else if(computerChoice === 'Paper') {
        compScore++
    }
    updateScore()
    
    if(currRound === 10) {
        if(userScore > compScore)   won.textContent = 'Congratulations! You Won the Game.'
        else if(userScore < compScore) won.textContent = 'Alas! You lost. Better Luck Next Time.' 
        else won.textContent = 'The Match is Drawn.'
    }
})

paper.addEventListener("click", function(){
    if(currRound >= maxRounds) return;
    currRound++
    const computerChoice = getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
    if(computerChoice === 'Scissor') {
        compScore++
    }
    else if(computerChoice === 'Rock') {
        userScore++
    }
    updateScore()

    
    if(currRound === 10) {
        if(userScore > compScore)   won.textContent = 'Congratulations! You Won the Game.'
        else if(userScore < compScore) won.textContent = 'Alas! You lost. Better Luck Next Time.' 
        else won.textContent = 'The Match is Drawn.'
    }
})

scissor.addEventListener("click", function(){
    if(currRound >= maxRounds) return;
    currRound++
    const computerChoice = getComputerChoice()
    userMove.textContent = ` ${this.textContent.toUpperCase()}`
    if(computerChoice === 'Rock') {
        compScore++
    }
    else if(computerChoice === 'Paper') {
        userScore++
    }
    updateScore()

    
    if(currRound === 10) {
        if(userScore > compScore)   won.textContent = 'Congratulations! You Won the Game.'
        else if(userScore < compScore) won.textContent = 'Alas! You lost. Better Luck Next Time.' 
        else won.textContent = 'The Match is Drawn.'
    }
})

restart.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    currRound = 0;
    u.textContent = 0;
    c.textContent = 0;
    rounds.textContent = 0;
    drawnRounds.textContent = 0;
    userMove.textContent = '';
    computerMove.textContent = '';
    won.textContent = ''
})



