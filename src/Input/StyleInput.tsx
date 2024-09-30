import ComboSaver from '../Output/OutputSaver';
import { AddDataInput } from './AddDataInput';
import { ThemeStyleInput } from "./ThemeStyleInput";
import { WidthInput } from "./WidthInput";

// inputs.
export function StyleInput() {

  return (
    <div className="relative">
      <div className="self-center py-2 grid grid-flow-col" >
        <WidthInput/>
        <ThemeStyleInput/>
        <AddDataInput/>
        <button onClick={ComboSaver} className="font-sans size-fit self-center">Save Combo</button>
      </div>
    </div>
  );
}

export default StyleInput;