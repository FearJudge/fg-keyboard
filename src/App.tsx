import { useState } from 'react'
import './App.css'
import CharSelector from './Input/CharacterSelect'
import GameSelector from './Input/GameSelect'
import ComboInput from './Input/ComboInput';
import { ComboDisplayProps } from './Input/ComboDisplayProps';
import BaseComboProps from './Input/DefaultComboValues';
import ComboOutput from './Output/Output';
import comboukenLogo from './assets/combouken_ph_logo.png'
import { GameFormat } from './GameProfiles/Games';
import StreetFighter2 from './GameProfiles/Games/StreetFighter2';
import { GameContext } from './store/GameContext';
import { OutputStyleContext } from './store/OutputStyleContext';
import StyleInput from './Input/StyleInputSidebar';
import { SaveButton } from './Input/SaveButton';


function App() {
  // NOTE: decide the type of buttonSequence later, here thought to be an
  // Array of id numbers. If changed, update the type of newButtons accordingly.
  const [buttonSequence, setButtonSequence] = useState<ComboDisplayProps>(BaseComboProps);
  // default 266, 586 or 906 for outputWidth state -> mark the corresponding radio input
  // defaultChecked in WidthInput.tsx
  const [outputWidth, setOutputWidth] = useState(266);
  const [outputTheme, setOutputTheme] = useState("default");
  const [outputFields, setFields] = useState<string[]>([]);

  const [chosenGame, setChosenGame] = useState(StreetFighter2);
  const [chosenCharacter, setChosenCharacter] = useState("Ryu");

  function setButtons(comboProps: ComboDisplayProps) {
    if (comboProps !== undefined) {
      setButtonSequence(comboProps);
    }
  }

  function changeGameOrCharacter(Game?: GameFormat, Character?: string)
  {
    if (Game) { setChosenGame(Game); }
    if (Character) { setChosenCharacter(Character); }
  }

  function changeStyle(width?: number, bg?: string)
  {
    if (width) { setOutputWidth(width); }
    if (bg) { setOutputTheme(bg); }
  }

  return (
    <GameContext.Provider value={{game: chosenGame, char: chosenCharacter, setter: changeGameOrCharacter}}>
      <div className="mb-7">
        <div className="flex justify-center items-center">
          <img src={comboukenLogo} className="w-52"/>
        </div>
        <h2 className='font-sans'>Fighting Game Combos</h2>
      </div>
      <div className=" md:flex md:justify-center mb-1">
        <GameSelector />
        <CharSelector />
      </div>
      <OutputStyleContext.Provider value={{
        width: outputWidth, bg: outputTheme, additionalFields: outputFields, 
        setter: changeStyle, addSetter: setFields}}>
        <StyleInput/>
        <ComboInput setButtons={setButtons}/>
        <SaveButton/>
        <ComboOutput buttonsToMap={buttonSequence} />
      </OutputStyleContext.Provider>
    </GameContext.Provider>
  )
}

export default App
