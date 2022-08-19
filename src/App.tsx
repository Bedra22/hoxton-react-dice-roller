import { useState } from 'react'
import './App.css'

function App() {
  {
    const [diceRandom, setDiceRandom] = useState(1)
    const sides = 6;


    function whichSideWillRoll() {

      if (diceRandom === 1) {
        return <div>Side 1</div>
      } else if (diceRandom === 2) {
        return <div>Side 2</div>
      } else if (diceRandom === 3) {
        return <div>Side 3</div>
      } else if (diceRandom === 4) {
        return <div>Side 4</div>
      } else if (diceRandom === 5) {
        return <div>Side 5</div>
      } else if (diceRandom === 6) {
        return <div>Side 6</div>
      } else {
        return <div>YAY we rolling the dice</div>
      }
    }



    function side() {
      setDiceRandom((Math.floor(Math.random() * sides) + 1))
    }

    return (
      <div className="App">
        <h1>Dice Rolling Game</h1>
        <div className='roll-dice'>
          <p>Click me ⬇️</p>
          <button
            onClick={() => {
              side()
            }}
          ></button>
          <h2>The number on your Dice side is :</h2>
          <span>{diceRandom}</span>
        </div>

      </div>
    )
  }
}

export default App
