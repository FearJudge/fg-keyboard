import { useState, useContext } from "react";
import { GameContext } from "../store/GameContext";
import { GameListing } from "../GameProfiles/Games";

function GameSelector() {

  const rctx = useContext(GameContext);
  const GameSelectorBaseText: string = "Select game:";
  const baseHidden: string = "hidden";
  const baseShow: string = "";
  const [tagExtra, setTagExtra] = useState(baseHidden);

  return (
    <div className="md:w-56 mb-4">
      <label className="block text-gray-200
      text-sm font-bold mb-1" htmlFor="game">
      {GameSelectorBaseText}
      </label>
      <button id="game" onClick={() => { setTagExtra((tagExtra == baseHidden)? baseShow : baseHidden); }} className="appearance-none bg-zinc-800
      border-b-4 border-r-2 border-zinc-900 rounded w-56 md:w-11/12 py-3 px-3 text-gray-100
      leading-tight focus:outline-none focus:shadow-outline">
        <div>{rctx.game.displayName}</div>
      </button>
      <div> { GameListing.map(function(object){
        return <button key={object.displayName} onClick={() => {rctx.setter(object); setTagExtra(baseHidden);  }} className={"appearance-none bg-zinc-800 " +
        "border-b-4 border-r-2 border-zinc-900 rounded w-56 md:w-11/12 py-3 px-3 text-gray-100 " +
        "leading-tight focus:outline-none focus:shadow-outline " + tagExtra}> { object.displayName }
        </button>;
    })}
      </div>
    </div>

  );
}

export default GameSelector;