import { useContext } from "react";
import { OutputStyleContext } from "../store/OutputStyleContext";
import FGKButton from "./ConstantStyle/FGKButton";


export function AddDataInput() {
  const styleCtx = useContext(OutputStyleContext);
  
  function changeOption(e: React.ChangeEvent<HTMLInputElement>) {
    const option = e.target.value;
    let fields = [...styleCtx.additionalFields];
    if (styleOn(option)) { 
      fields = fields.filter(p => p != option);
     } else {
      fields.push(option);
    }
    fields.sort();
    styleCtx.addSetter(fields);
  }

  function styleOn(type: string): boolean {
    const fields = styleCtx.additionalFields;
    const b: boolean = fields.includes(type);
    return b;
  }

  return (
    <div className="mb-5" onChange={changeOption}>
      <label className="block text-gray-200
        text-base font-bold font-sans mb-5" htmlFor="styleInput">Select fields to include in output:
      </label>
      <div className="my-4" id="widthInput">
        <FGKButton id="charName" type="checkbox" name="addData" value="character" str="Character" defaultChecked={styleOn("character")}></FGKButton>
        <FGKButton id="gameName" type="checkbox" name="addData" value="game" str="Game" defaultChecked={styleOn("game")}></FGKButton>
      </div>
    </div>
  );
}