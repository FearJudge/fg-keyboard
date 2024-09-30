import { useContext } from "react";
import { OutputStyleContext } from "../store/OutputStyleContext";


export function ThemeStyleInput() {
  const styleCtx = useContext(OutputStyleContext);
  
  function onStyleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newBg = e.target.value;
    styleCtx.setter(styleCtx.width, newBg);
  }

  return (
    <div className="mb-5" onChange={onStyleChange}>
      <label className="block text-gray-200
        text-base font-bold font-sans mb-5" htmlFor="styleInput">Select the background:
      </label>
      <div className="my-4" id="widthInput">
        <div className="inline">
          <input className="hidden peer" type="radio" id="def" value={"default"} name="style" defaultChecked/>
          <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 
          border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 
          hover:bg-neutral-600 hover:border-gray-400" htmlFor="def">See-through</label>
        </div>
        <div className="inline">
          <input className="hidden peer" type="radio" id="style1" value={"white"} name="style" />
          <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 
          border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 
          hover:bg-neutral-600 hover:border-gray-400" htmlFor='style1'>White</label>
        </div>
      </div>
    </div>
  );
}