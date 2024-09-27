import { useContext } from 'react';
import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import { drawCombo } from './drawCombo';
import ComboSaver from './OutputSaver';
import { GameContext } from '../store/GameContext';

export default function ComboCanvas({ buttonsToMap, outputWidth }: {buttonsToMap: ComboDisplayProps, outputWidth: number}) {
  const rctx = useContext(GameContext);
  const canvasHeight = drawCombo(buttonsToMap, outputWidth, rctx.game);

  return <div id="outputDisplay" className="grid grid-cols-7">
    <canvas id="comboArea" className="col-start-4 grid-span-1 self-baseline place-self-center bg-cyan-900 rounded-md"
      width={outputWidth} height={canvasHeight}>
    </canvas>
    <button onClick={ComboSaver} className="col-start-6 grid-span-1 place-self-end mx-12 w-3/5 font-sans">Save Combo</button>
  </div>
}