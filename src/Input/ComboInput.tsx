import { useState, useRef, useContext } from 'react';
import InputParser from './InputParser';
import { ComboDisplayProps } from './ComboDisplayProps';
import { GameContext } from '../store/GameContext';

type InputProps = {
  setButtons: (newButtons: ComboDisplayProps) => void;
};

// Takes user input and passes it to be parsed.
// Potentially reactively expand input field to accomodate larger
// inputs.
export function Input({setButtons}: InputProps) {
  const [comboInput, setComboInput] = useState('');
  const previousOutput = useRef([0]);
  const previousExtra = useRef([""]);
  const InputFieldPlaceholder: string = "Type Combo Here!";
  const rctx = useContext(GameContext);

  function onModifyComboInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newComboVal = e.target.value;
    //For testing purposes, can switch between either or.
    // For quick testing with the game variant,
    // use abbreviations like: d u f lk hp or qcf
    const inputData: { buttons: number[], extra: string[] } = InputParser.ParseComboWithGame(newComboVal, rctx.game);
    const comboProps: ComboDisplayProps = {
      ButtonsToDisplay: inputData.buttons,
      ExtraButtonDataToDisplay: inputData.extra,
      CleanedInputPerButton: InputParser.GetCleanedInputCommand(inputData.buttons, inputData.extra, rctx.game),
      GameToUse: "Street Fighter 2",
      Character: "Ryu",
      AdditionalComboInputs: {
        ComboDamage: 0,
        ComboName: "-",
        ComboNotes: "-",
        ComboRequirements: "-"
      }
    };
    if (!(inputData.buttons.length === previousOutput.current.length &&
      inputData.buttons.every((value, index) =>
      value === previousOutput.current[index])) || !((inputData.extra.length === previousExtra.current.length &&
        inputData.extra.every((value, index) =>
        value === previousExtra.current[index])
      )))
      {
        setButtons(comboProps);
        previousOutput.current = inputData.buttons;
        previousExtra.current = inputData.extra;
      }
    setComboInput(newComboVal);
  }

  return (
    <>
      <div className="self-center py-2" >
        <textarea className="shadow appearance-none
          bg-transparent text-wrap text-xl
          text-center font-medium row-span-full
          font-sans h-auto w-full md:w-7/12
          border border-gray-300 border-b-4 border-r-4 rounded-xl py-2 px-3
          focus:text-blue-200 text-gray-100
          placeholder:text-gray-500
          leading-tight
          focus:outline-none focus:shadow-2xl
          focus:shadow-gray-600
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