let body = document.querySelector("body");
let declartion = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let userpts = 0;
let comppts = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    console.log(`Comp choice = ${options[index]}`);
    return options[index];
}

const drawGame = () => {
    declartion.innerText = "Game Was Draw..Play Again";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        declartion.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userpts++;
        userScore.innerText = userpts;
    } else{
        declartion.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        comppts++;
        compScore.innerText = comppts;
    }
}
const gamePlay = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`user choice = ${userChoice}`);
        gamePlay(userChoice);
    })
})