import { useState } from 'react';
import InputParser from './InputParser';

type InputProps = {
  setButtons: (newButtons: number[] | undefined) => void;
};

// Takes user input and passes it to be parsed.
// Potentially reactively expand input field to accomodate larger
// inputs.
function Input({setButtons}: InputProps) {
  const [comboInput, setComboInput] = useState('');
  const InputFieldBaseText: string = "Combo:";
  const InputFieldPlaceholder: string = "Type Combo Here!";

  function onModifyComboInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newComboVal = e.target.value;
    //For testing purposes, can switch between either or.
    // For quick testing with the game variant,
    // use abbreviations like: d u f lk hp or qcf
    //setButtons(InputParser.ParseCombo(newComboVal));
    setButtons(InputParser.ParseComboWithGame(newComboVal));
    setComboInput(newComboVal);
  }

  return (
    <div className="Input">
      <label className="block text-gray-200
        text-sm font-bold mb-2" htmlFor="combo">
        {InputFieldBaseText}
      </label>
      <input className="shadow appearance-none bg-blue-200
        border rounded w-full py-2 px-3 text-gray-500
        leading-tight focus:outline-none focus:shadow-outline"
        id="combo" type="text" placeholder={InputFieldPlaceholder}
        value={comboInput}
        onChange={onModifyComboInput}>
      </input>
    </div>
  );
}

export default Input;