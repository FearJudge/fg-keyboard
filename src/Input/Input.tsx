import { useState } from "react";
import FGCParse from "./FGCParse";

const InputFieldBaseText:string = "Combo:"
const InputFieldPlaceholder:string = "Type Combo Here!"

function Input() {
  const [comboText, setComboText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setComboText(newValue);
    const result:number = FGCParse.ParseCombo(newValue);
    console.log(result);
  }
    return (
      <div className="Input">
        <label className="block text-gray-200 
        text-sm font-bold mb-2" htmlFor="combo">
          {InputFieldBaseText}
        </label>
        <input className="shadow appearance-none bg-blue-200
        border rounded w-full py-2 px-3 text-gray-500
        leading-tight focus:outline-none focus:shadow-outline" 
        id="combo" type="text" placeholder={InputFieldPlaceholder}
        onChange={onChange}>
        </input>
      </div>
    );
}


  export default Input;