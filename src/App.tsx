import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fgcinput from './Input/ComboInput';
import Fgcoutput from './Output/Output';
import InputParser from './Input/InputParser';

function App() {
  const [count, setCount] = useState(0)
  const [comboInput, setComboInput] = useState('')
  const [outputArray, setOutputArray] = useState([""])

  function onModifyComboInput(e: React.ChangeEvent<HTMLInputElement>)
  {
    const newComboVal = e.target.value;
    setComboInput(newComboVal);
    const outputVal = InputParser.ParseComboWithGame(newComboVal);
    setOutputArray(outputVal);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Fgcinput onModify={onModifyComboInput}/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Fgcoutput raw = {comboInput} commands = {outputArray}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
