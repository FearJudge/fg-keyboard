import { useContext } from "react";
import OpenSave from "../Output/OutputSaver";
import { OutputStyleContext } from "../store/OutputStyleContext";


export function SaveButton() {
  const outputCtx = useContext(OutputStyleContext);

  function OnClick() {
    OpenSave(outputCtx);
  }
  
  return (
    <div className="mb-5">
        <div className="my-4" id="saveCombo">
          <div className="inline">
            <button className="py-3 px-3 border-2 border-b-4 border-r-4 
            border-cyan-900 rounded-md hover:bg-neutral-600
            hover:border-gray-400" onClick={OnClick}> Save Combo </button>
          </div>
        </div>
      </div>
  );
}