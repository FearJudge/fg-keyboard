import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import { drawCombo } from './drawCombo';
import ComboSaver from './OutputSaver';

export default function ComboCanvas({ buttonsToMap, outputWidth }: {buttonsToMap: ComboDisplayProps, outputWidth: number}) {
  const canvasHeight = drawCombo(buttonsToMap, outputWidth);

  return <div id="outputDisplay" className="grid grid-cols-7">
    <canvas id="comboArea" className="col-start-4 grid-span-1 self-baseline place-self-center bg-cyan-900 rounded-md"
      width={outputWidth} height={canvasHeight}>
    </canvas>
    <button onClick={ComboSaver} className="col-start-6 grid-span-1 place-self-end mx-12 w-3/5 font-sans">Save Combo</button>
  </div>
}