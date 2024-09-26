import { useState } from 'react'
import './App.css'
import CharSelector from './Input/CharacterSelect'
import GameSelector from './Input/GameSelect'
import Fgcinput from './Input/ComboInput';
import { ComboDisplayProps } from './Input/ComboDisplayProps';
import BaseComboProps from './Input/DefaultComboValues';
import Fgcoutput from './Output/Output';
import comboukenLogo from './assets/combouken_ph_logo.png'


function App() {
  // NOTE: decide the type of buttonSequence later, here thought to be an
  // Array of id numbers. If changed, update the type of newButtons accordingly.
  const [buttonSequence, setButtonSequence] = useState<ComboDisplayProps>(BaseComboProps);
  // default 266, 586 or 906 for outputWidth state -> mark the corresponding radio input
  // defaultChecked in WidthInput.tsx
  const [outputWidth, setOutputWidth] = useState(266);

  function setButtons(comboProps: ComboDisplayProps) {
    if (comboProps !== undefined) {
      setButtonSequence(comboProps);
    }
  }

  return (
    <>
      <div className="mb-12">
        <div className="flex justify-center items-center">
          <img src={comboukenLogo} className="w-72"/>
        </div>
        <h1 className='font-sans'>Fighting Game Combos</h1>
      </div>
      <div className="mb-8">
        <GameSelector />
        <CharSelector />
      </div>
      <Fgcinput setButtons={setButtons} setWidth={setOutputWidth}/>
      <Fgcoutput buttonsToMap={buttonSequence} outputWidth={outputWidth} />
    </>
  )
}

export default App
