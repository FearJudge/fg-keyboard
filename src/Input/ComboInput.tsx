import { useState } from 'react';
import InputParser from './InputParser';

type InputProps = {
  setButtons: (newButtons: number[] | undefined) => void;
  setOutputArray: (value: React.SetStateAction<string[]>) => void;
};

// Takes user input and passes it to be parsed.
// Potentially reactively expand input field to accomodate larger
// inputs.
function Input({setButtons, setOutputArray}: InputProps) {
  const [comboInput, setComboInput] = useState('');
  const InputFieldBaseText: string = "Combo:";
  const InputFieldPlaceholder: string = "Type Combo Here!";

  function onModifyComboInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newComboVal = e.target.value;
    setButtons(InputParser.ParseCombo(newComboVal));
    const outputVal = InputParser.ParseComboWithGame(newComboVal);
    setOutputArray(outputVal);
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