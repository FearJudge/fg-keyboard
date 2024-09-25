import { useState, useRef } from 'react';
import InputParser from './InputParser';
import { ComboDisplayProps } from './ComboDisplayProps';
import { WidthInput } from './WidthInput';

type InputProps = {
  setButtons: (newButtons: ComboDisplayProps) => void;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
};

// Takes user input and passes it to be parsed.
// Potentially reactively expand input field to accomodate larger
// inputs.
export function Input({setButtons, setWidth}: InputProps) {
  const [comboInput, setComboInput] = useState('');
  const previousOutput = useRef([0]);
  const InputFieldBaseText: string = "Combo:";
  const InputFieldPlaceholder: string = "Type Combo Here!";

  function onModifyComboInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newComboVal = e.target.value;
    //For testing purposes, can switch between either or.
    // For quick testing with the game variant,
    // use abbreviations like: d u f lk hp or qcf
    const buttons: number[] = InputParser.ParseComboWithGame(newComboVal);
    const comboProps: ComboDisplayProps = {
      ButtonsToDisplay: buttons,
      ExtraButtonDataToDisplay: [""],
      CleanedInputPerButton: InputParser.GetCleanedInputCommand(buttons),
      GameToUse: "Street Fighter 2",
      Character: "Ryu",
      AdditionalComboInputs: {
        ComboDamage: 0,
        ComboName: "-",
        ComboNotes: "-",
        ComboRequirements: "-"
      }
    };
    if (!(buttons.length === previousOutput.current.length &&
      buttons.every((value, index) =>
      value === previousOutput.current[index])))
      {
        setButtons(comboProps);
        console.log("Updating Output! || " + buttons.length + " VS: " + previousOutput.current.length);
        previousOutput.current = buttons;
      }
    setComboInput(newComboVal);
  }

  return (
    <>
      <WidthInput setWidth={setWidth} />
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
    </>
  );
}

export default Input;