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
      canvasRef.current = await drawCombo(buttonsToMap, gameCtx as ReadableGameCtx, styleCtx as ReadableOutputCtx);
      setTimeout(()=> {setIsLoading(false);}, 1000);
      console.log("New height " + canvasRef.current);
    };
    runComboEffect();

    }, [buttonsToMap, gameCtx, styleCtx]);

  console.log("canvasHeight in ComboCanvas: " + canvasRef.current);

 return(
  <div id="outputGrid">
    <div id="outputDisplay" className={`flex overflow-x-auto mx-auto justify-center items-center relative`}>
      {isLoading ? <div className={`absolute w-${styleCtx.width} h-${canvasRef.current} bg-cyan-900 text-lg rounded justify-self-center`}>
        <p>Loading...</p>
      </div> : null
      }
      <canvas id="comboArea" className="flex bg-cyan-900 rounded mx-auto"
        width={styleCtx.width} height={canvasRef.current}>
      </canvas>
      </div>
  </div>
  )
}