import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [userChoice, setUserChoice] = useState("") 
  const [computerChoice, setComputerChoice] =useState("")

  const [winner, setWinner] = useState("")

  const computerChoices = ["paper","rock","scissors"]

  const handleCompChoice = ()=> {
    const index = Math.floor(Math.random()*computerChoices.length)
    console.log(index)
    const randomCompChoice = computerChoices[index]
    setComputerChoice(randomCompChoice)
    console.log(computerChoice)
  }

  useEffect(()=> {
    if (!userChoice) return

    if (userChoice===computerChoice){
      return
    }

    let userWin = false;
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      userWin = true;
    }

    if (userWin) {
      setUserScore(userScore + 1);
    } else {
      setComputerScore(computerScore + 1);
    }
    
      
  },[userChoice, computerChoice])

  useEffect(() => {
    if (userScore === 5) {
      setWinner("User Wins!!");
      resetGame();
    } else if (computerScore === 5) {
      setWinner("Computer Wins");
      resetGame();
    }
  }, [userScore, computerScore]);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    handleCompChoice(); // Generate a new computer choice each time user makes a choice
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserChoice("");
    setComputerChoice("");
  };


 
  return (
    <>
     <div className='bg-blue-500 w-screen h-screen items-center justify-center'>
        <h1 className='text-center text-6xl text-white'>Stone-Paper-Scissors</h1>
        <div className='flex justify-around mt-5 text-4xl'>
          <div>
            <p>User Choice:{userChoice}</p>
            <p className='mt-4' >User Score:{userScore}</p>
          </div>
          <div>
            <p>Computer Choice:{computerChoice}</p>
            <p className='mt-4'>Computer Score:{computerScore}</p>
          </div>
        </div>
        <div onClick={handleCompChoice} className='cursor-pointer p-5 ml-7 flex justify-evenly w-[500px]'>
          <img onClick={()=> handleUserChoice("paper")} src="../paper.png" alt="" />
          <img onClick={()=> handleUserChoice("rock")} src="../rock.png" alt="" />
          <img onClick={()=> handleUserChoice("scissors")} src="../scissors.png" alt="" />

        </div>
        <p className='text-center text-4xl'>Result : {winner}</p>
        
     </div>
    </>
  )
}

export default App
