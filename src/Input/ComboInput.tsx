import { useState, useRef } from 'react';
import InputParser from './InputParser';

type InputProps = {
  setButtons: (newButtons: number[] | undefined) => void;
};

type ComboDisplayProps = {
  ButtonsToDisplay: number[];
  ExtraButtonDataToDisplay: string[];
  CleanedInputPerButton: string[];
  GameToUse: string;
  Character: string;
  AdditionalComboInputs: ExtraUserData;
}

type ExtraUserData = {
  ComboDamage: number;
  ComboName: string;
  ComboNotes: string;
  ComboRequirements: string;
}

// Takes user input and passes it to be parsed.
// Potentially reactively expand input field to accomodate larger
// inputs.
function Input({setButtons}: InputProps) {
  const [comboInput, setComboInput] = useState('');
  const [cleanedInput, setCleanedInput] = useState('');
  const previousOutput = useRef([0]);
  const InputFieldBaseText: string = "Combo:";
  const InputFieldPlaceholder: string = "Type Combo Here!";

  function onModifyComboInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newComboVal = e.target.value;
    //For testing purposes, can switch between either or.
    // For quick testing with the game variant,
    // use abbreviations like: d u f lk hp or qcf
    //setButtons(InputParser.ParseCombo(newComboVal));
    const buttons: number[] = InputParser.ParseComboWithGame(newComboVal);
    if (!(buttons.length === previousOutput.current.length && 
      buttons.every((value, index) => 
      value === previousOutput.current[index]))) 
      {
        setButtons(buttons); 
        console.log("Updating Output! || " + buttons.length + " VS: " + previousOutput.current.length);
        previousOutput.current = buttons; 
      }
    setComboInput(newComboVal);
  }

  return (
    <div className="Input">
      <label className="block text-gray-200
        text-sm font-bold mb-2" htmlFor="combo">
        {InputFieldBaseText}
      </label>
      <input className="shadow appearance-none 
        bg-transparent
        text-center font-medium
        size-max
        border rounded-xl w-full py-2 px-3 
        focus:text-blue-200 text-gray-100
        focus:object-fill object-center
        inset-y-2/3
        placeholder:text-blue-800
        leading-tight 
        focus:outline-none focus:shadow-2xl
        focus:shadow-white
        "
        id="combo" type="text" placeholder={InputFieldPlaceholder}
        value={comboInput}
        onChange={onModifyComboInput}>
      </input>
    </div>
  );
}

export default Input;