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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Fgcinput setButtons={setButtons} setOutputArray={setOutputArray} />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Fgcoutput buttonsToMap={buttonSequence} commands = {outputArray}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
