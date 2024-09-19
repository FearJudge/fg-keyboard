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

  function onModifyComboInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
    <div className="self-center py-3 h-36" >
      <label className="block text-gray-200
        text-lg font-bold font-sans mb-2" htmlFor="combo">
        {InputFieldBaseText}
      </label>
      <textarea className="shadow appearance-none 
        bg-transparent text-wrap text-xl
        text-center font-medium row-span-full
        font-sans h-auto w-4/5
        border rounded-xl py-2 px-3 
        focus:text-blue-200 text-gray-100
        placeholder:text-blue-800
        leading-tight 
        focus:outline-none focus:shadow-2xl
        focus:shadow-white
        "
        id="combo" placeholder={InputFieldPlaceholder}
        value={comboInput}
        onChange={onModifyComboInput}>
      </textarea>
    </div>
  );
}

export default Input;