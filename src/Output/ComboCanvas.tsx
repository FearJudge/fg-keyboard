import { drawCombo } from './drawCombo';

export default function ComboCanvas({ buttonsToMap }: {buttonsToMap: number[]}) {
  const { canvasWidth, canvasHeight } = drawCombo(buttonsToMap);

  return <div className="grid">
    <canvas id="comboArea" className="
    self-baseline place-self-center
    bg-cyan-900 rounded-md"
    width={canvasWidth} height={canvasHeight}>
    </canvas>
  </div>
}