import { useContext } from 'react';
import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import { drawCombo } from './drawCombo';
import { GameContext, ReadableGameCtx } from '../store/GameContext';
import { OutputStyleContext, ReadableOutputCtx } from '../store/OutputStyleContext';

export default function ComboCanvas({ buttonsToMap }: {buttonsToMap: ComboDisplayProps}) {
  const gameCtx = useContext(GameContext);
  const styleCtx = useContext(OutputStyleContext);
  const canvasHeight = drawCombo(buttonsToMap, gameCtx as ReadableGameCtx, styleCtx as ReadableOutputCtx);

  return (
  <div id="outputGrid">
    <div id="outputDisplay" className="flex overflow-x-auto mx-4">
      <canvas id="comboArea" className="flex bg-cyan-900 rounded-md mx-auto"
        width={styleCtx.width} height={canvasHeight}>
      </canvas>
      </div>
  </div>
  )
}