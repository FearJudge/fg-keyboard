import { useContext } from "react";
import { OutputStyleContext } from "../store/OutputStyleContext";
import FGKButton from "./ConstantStyle/FGKButton";


export function WidthInput() {
  const styleCtx = useContext(OutputStyleContext);
  
  function onWidthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newWidth = parseInt(e.target.value);
    styleCtx.setter(newWidth);
  }

  return (
    <div className="mb-5" onChange={onWidthChange}>
        <label className="block text-gray-200
          text-base font-bold font-sans mb-5" htmlFor="widthInput">Select the width of output picture:
        </label>
        <div className="my-4" id="widthInput">
          <FGKButton id="sm" name="width" type="radio" value={266} str="Small" defaultChecked={true}></FGKButton>
          <FGKButton id="md" name="width" type="radio" value={586} str="Medium"></FGKButton>
          <FGKButton id="lg" name="width" type="radio" value={906} str="Large"></FGKButton>
        </div>
      </div>
  );
}