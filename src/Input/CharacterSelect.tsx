import { useContext, useState } from "react";
import { GameContext } from "../store/GameContext";

function CharSelector() {

  const rctx = useContext(GameContext);
  const CharSelectorBaseText : string = "Select character:";
  const baseHidden: string = "hidden";
  const baseShow: string = "";
  const [tagExtra, setTagExtra] = useState(baseHidden);

  return (
    <div className="col-start-3 mb-4">
      <label className="block text-gray-200
          text-sm font-bold mb-1" htmlFor="char">
          {CharSelectorBaseText}
        </label>
        <button id="game" onClick={() => { setTagExtra((tagExtra == baseHidden)? baseShow : baseHidden); }} className="appearance-none bg-zinc-800
          border-b-4 border-r-2 border-zinc-900 rounded w-11/12 py-3 px-3 text-gray-100
          leading-tight focus:outline-none focus:shadow-outline">
      <div>{rctx.char}</div>
    </button>
    <div> { rctx.game.characters?.map(function(name){
      return <button key={name} onClick={() => {rctx.setter(undefined, name); setTagExtra(baseHidden);  }} className={"appearance-none bg-zinc-800 " +
      "border-b-4 border-r-2 border-zinc-900 rounded w-11/12 overflow-auto py-2 px-3 text-gray-100 " +
      "leading-tight focus:outline-none focus:shadow-outline " + tagExtra}> { name }
      </button>
    })}
    </div>
  </div>

  );
}

export default CharSelector;