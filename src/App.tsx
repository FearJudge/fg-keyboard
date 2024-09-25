import { useState } from 'react'
import './App.css'
import CharSelector from './Input/CharacterSelect'
import GameSelector from './Input/GameSelect'
import Fgcinput from './Input/ComboInput';
import { ComboDisplayProps } from './Input/ComboDisplayProps';
import BaseComboProps from './Input/DefaultComboValues';
import Fgcoutput from './Output/Output';


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
      <h1>Combo Writer</h1>
      <GameSelector />
      <CharSelector />
      <Fgcinput setButtons={setButtons} setWidth={setOutputWidth}/>
      <Fgcoutput buttonsToMap={buttonSequence} outputWidth={outputWidth} />
    </>
  )
}

export default App
