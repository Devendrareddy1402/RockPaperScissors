 let userScore = 0;
 let compScore = 0;


 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 let userScorePara = document.querySelector("#user-score");
 let compScorePara = document.querySelector("#comp-score");

 const showWinner = (userWin, userChoice, compChoice)=>{


    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };

const drawGame = ()=>
{   
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};



const genCompChoice = ()=>
{
    const options = ["rock", "scissors", "paper"];
    const randIndx = Math.floor(Math.random()*3);

    return options[randIndx];
};

 const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    

    if(userChoice == compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;

        if(userChoice === "rock")
        {
            //paper, scissors
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper")
        {
            //rock ,scissors
            userWin = compChoice === "rock"? true:false;
        }
        else
        {
            // paper,rock
            userWin = compChoice ==="paper"?false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
 };

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {

       let userChoice = choice.getAttribute("id");
       playGame(userChoice);

    });
  });