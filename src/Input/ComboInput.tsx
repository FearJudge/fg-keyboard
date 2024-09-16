type InputProps = {
  onModify: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Takes user input and passes it to be parsed.
// Potentially reactively expand input field to accomodate larger
// inputs.
function Input({onModify}: InputProps) {
  const InputFieldBaseText: string = "Combo:";
  const InputFieldPlaceholder: string = "Type Combo Here!";

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
        onChange={onModify}>
      </input>
    </div>
  );
}

export default Input;