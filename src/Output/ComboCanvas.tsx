import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import { drawCombo } from './drawCombo';
import ComboSaver from './OutputSaver';

export default function ComboCanvas({ buttonsToMap, outputWidth }: {buttonsToMap: ComboDisplayProps, outputWidth: number}) {
  const canvasHeight = drawCombo(buttonsToMap, outputWidth);

  return <div id="outputDisplay" className="grid">
    <canvas id="comboArea" className="self-baseline place-self-center bg-cyan-900 rounded-md"
      width={outputWidth} height={canvasHeight}>
    </canvas>
    <button onClick={ComboSaver} className="place-self-end mx-12 w-1/5 font-sans">Save Combo</button>
  </div>
}