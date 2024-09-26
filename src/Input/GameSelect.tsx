// Class for the dropdown to choose different games, low priority.
const SelectedGame : string = "Street Fighter 2";

function GameSelector() {
    
    const GameSelectorBaseText : string = "Select game:";
    // const GameSelectorPlaceHolder : string = "---"; 
    
    return (
        <div className="mb-4">
          <label className="block text-gray-200
            text-sm font-bold mb-2" htmlFor="game">
            {GameSelectorBaseText}
          </label>
          <button id="game" className="appearance-none bg-zinc-800
            border-b-4 border-r-2 border-zinc-900 rounded w-3/12 py-2 px-3 text-gray-100
            leading-tight focus:outline-none focus:shadow-outline">
              <div>{SelectedGame/*predetermined now as an example*/}</div>
          </button>
        </div>
      );
}

export default GameSelector;