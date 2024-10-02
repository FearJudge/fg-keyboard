import OpenSave from "../Output/OutputSaver";


export function SaveButton() {
  return (
    <div className="mb-5">
        <div className="my-4" id="saveCombo">
          <div className="inline">
            <button className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 
            border-cyan-900 rounded-md hover:bg-neutral-600
            hover:border-gray-400" onClick={OpenSave}> Save Combo </button>
          </div>
        </div>
      </div>
  );
}