import { useContext } from "react";
import { OutputStyleContext } from "../store/OutputStyleContext";
import FGKButton from "./ConstantStyle/FGKButton";

export function ImageTypeInput() {
  const styleCtx = useContext(OutputStyleContext);
    
  function onImageTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
      const newImgType = e.target.value;
      styleCtx.setter(styleCtx.width, styleCtx.bg, newImgType);
  }

  return (
    <div className="mb-5" onChange={onImageTypeChange}>
      <label className="block text-gray-200
        text-base font-bold font-sans mb-5" htmlFor="imgTypeInput">Select the image file type:
      </label>
      <div className="my-4" id="imgTypeInput">
      <FGKButton id="type0" type="radio" name="imgType" value="image/png" str="PNG" defaultChecked={styleCtx.imgType == "image/png"}></FGKButton>
      <FGKButton id="type1" type="radio" name="imgType" value="image/jpeg" str="JPEG" defaultChecked={styleCtx.imgType == "image/jpeg"}></FGKButton>
      </div>
    </div>
  );
}