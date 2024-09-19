// Class for the dropdown to choose different characters, low priority.
const SelectedChar : string = "Ken";

function CharSelector() {
    
    const CharSelectorBaseText : string = "Select character:";
    // const CharSelectorPlaceHolder : string = "---";
    
    return (
        <div className="InputChar">
          <label className="block text-gray-200
            text-sm font-bold mb-2" htmlFor="char">
            {CharSelectorBaseText}
          </label>
          <button id="char" className="shadow appearance-none bg-zinc-800
            border-b-4 border-r-2 border-zinc-900 rounded w-2/5 py-2 px-3 text-blue-800
            leading-tight focus:outline-none focus:shadow-outline">
                <div>{SelectedChar/*predetermined now as an example*/}</div>
            </button>
        </div>
      );
}

export default CharSelector;