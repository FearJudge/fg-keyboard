import { useContext, useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import { drawCombo } from './drawCombo';
import { GameContext, ReadableGameCtx } from '../store/GameContext';
import { OutputStyleContext, ReadableOutputCtx } from '../store/OutputStyleContext';
/**
  * The React component responsible for drawing in the output image on the page.
  * Uses the Canvas HTML Component
  *
  * @param buttonsToMap - A set of props containing information
  * on the combo that might be relevant for drawing.
  **/
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
      setIsLoading(false);
    };
    const b: AbortController = new AbortController();
    runComboEffect();
    return () => { b.abort("REFRESH!"); };
    }, [buttonsToMap, gameCtx, styleCtx]);

 return(
  <div id="outputGrid" className="flex overflow-x-auto">
    <div id="outputDisplay" className="relative flex mx-auto justify-center items-center">
      {isLoading ? <div id="loadDivContainer" className="absolute inset-0 overflow-hidden rounded">
        <div id="loadDiv" style={ {width: styleCtx.width, height: canvasRef.current} } 
          className={styleCtx.bg === "white" ? "bg-neutral-500" : "bg-cyan-900" + " animate-make-appear  text-lg rounded"}>
          <p className="top-0 inset-x-0">Loading...</p>
        </div>
      </div> : null
      }
      <canvas id="comboArea" className="flex bg-cyan-900 rounded mx-auto"
        width={styleCtx.width} height={42}>
      </canvas>
    </div>
  </div>
  )
}