import { useContext, useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import { drawCombo } from './drawCombo';
import { GameContext, ReadableGameCtx } from '../store/GameContext';
import { OutputStyleContext, ReadableOutputCtx } from '../store/OutputStyleContext';

export default function ComboCanvas({ buttonsToMap }: {buttonsToMap: ComboDisplayProps}) {
  const gameCtx = useContext(GameContext);
  const styleCtx = useContext(OutputStyleContext);
  const canvasRef = useRef(42);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    async function runComboEffect(){
      setIsLoading(true);
      const h = await drawCombo(
        buttonsToMap, gameCtx as ReadableGameCtx, styleCtx as ReadableOutputCtx, canvasRef.current,
        { abort: b.signal }).catch(e => {if (e == undefined) { return; } console.log(e);});
        if (b.signal.aborted) { return; }
      if (h != undefined) { canvasRef.current = h; }
      setTimeout(() => { setIsLoading(false); }, 50);
    };
    const b: AbortController = new AbortController();
    runComboEffect();
    return () => { b.abort("REFRESH!"); };
    }, [buttonsToMap, gameCtx, styleCtx]);

 return(
  <div id="outputGrid" className="flex overflow-x-auto">
    <div id="outputDisplay" className={`static flex mx-auto justify-center items-center`}>
      {isLoading ? <div className={`absolute w-${styleCtx.width} h-${canvasRef.current} bg-cyan-900 text-lg rounded`}>
        <p className="top-0 inset-x-0">Loading...</p>
      </div> : null
      }
      <canvas id="comboArea" className="flex bg-cyan-900 rounded mx-auto"
        width={styleCtx.width} height={42}>
      </canvas>
      </div>
  </div>
  )
}