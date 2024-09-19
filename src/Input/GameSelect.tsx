// Class for the dropdown to choose different games, low priority.
const SelectedGame : string = "Street Fighter 2";

function GameSelector() {
    
    const GameSelectorBaseText : string = "Select game:";
    // const GameSelectorPlaceHolder : string = "---"; 
    
    return (
        <div className="InputGame">
          <label className="block text-gray-200
            text-sm font-bold mb-2" htmlFor="game">
            {GameSelectorBaseText}
          </label>
          <button id="game" className="shadow appearance-none bg-blue-400
            border rounded w-full py-2 px-3 text-gray-500
            leading-tight focus:outline-none focus:shadow-outline">
              <div>{SelectedGame/*predetermined now as an example*/}</div>
          </button>
        </div>
      );
}

export default GameSelector;