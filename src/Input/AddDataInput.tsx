import { useContext } from "react";
import { OutputStyleContext } from "../store/OutputStyleContext";


export function AddDataInput() {
  const styleCtx = useContext(OutputStyleContext);
  
  function changeOption(e: React.ChangeEvent<HTMLInputElement>) {
    const option = e.target.value;
    let fields = styleCtx.additionalFields;
    if (styleOn(option)) { 
      fields = fields.filter(p => p != option);
     } else {
      fields.push(option);
    }
    styleCtx.addSetter(fields);
    console.log(fields);
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
        <div className="inline">
          <input className="hidden peer" type="checkbox" id="charName" value={"character"} name="style" defaultChecked={styleOn("character")}/>
          <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 
          border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 
          hover:bg-neutral-600 hover:border-gray-400" htmlFor="charName">Character</label>
        </div>
        <div className="inline">
          <input className="hidden peer" type="checkbox" id="gameName" value={"game"} name="style" defaultChecked={styleOn("game")}/>
          <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 
          border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 
          hover:bg-neutral-600 hover:border-gray-400" htmlFor="gameName">Game</label>
        </div>
      </div>
    </div>
  );
}