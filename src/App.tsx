import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fgcinput from './Input/ComboInput';
import Fgcoutput from './Output/Output';


function App() {
  const [count, setCount] = useState(0);
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
      <Fgcinput setButtons={setButtons} setOutputArray={setOutputArray} />
      <Fgcoutput buttonsToMap={buttonSequence} commands = {outputArray}/>
    </>
  )
}

export default App
