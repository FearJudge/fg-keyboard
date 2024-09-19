import { useState } from 'react'
import './App.css'
import CharSelector from './Input/CharacterSelect'
import GameSelector from './Input/GameSelect'
import Fgcinput from './Input/ComboInput';
import Fgcoutput from './Output/Output';


function App() {
  // NOTE: decide the type of buttonSequence later, here thought to be an
  // Array of id numbers. If changed, update the type of newButtons accordingly.
  const [buttonSequence, setButtonSequence] = useState<number[]>([]);
  const [outputArray, setOutputArray] = useState([""]);

  function setButtons(newButtons: number[] | undefined) {
    if (newButtons !== undefined) {
      setButtonSequence([...newButtons]);
    }
  }

  return (
    <>
      <h1>Combo Writer</h1>
      <GameSelector />
      <CharSelector />
      <Fgcinput setButtons={setButtons} setOutputArray={setOutputArray} />
      <Fgcoutput buttonsToMap={buttonSequence} commands = {outputArray}/>
    </>
  )
}

export default App
