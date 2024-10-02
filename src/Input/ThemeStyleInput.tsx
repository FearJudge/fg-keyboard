import { useContext } from "react";
import { OutputStyleContext } from "../store/OutputStyleContext";
import FGKButton from "./ConstantStyle/FGKButton";


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
      <div className="my-4" id="styleInput">
      <FGKButton id="style0" type="radio" name="style" value="default" str="See-Through" defaultChecked={true}></FGKButton>
      <FGKButton id="style1" type="radio" name="style" value="white" str="White"></FGKButton>
      </div>
    </div>
  );
}