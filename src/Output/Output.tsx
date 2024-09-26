import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import ComboCanvas from './ComboCanvas';

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
export default function Output({buttonsToMap, outputWidth} : {buttonsToMap: ComboDisplayProps, outputWidth: number}) {
  return (
    <div className="self-center py-3 h-24">
      <>
        <ComboCanvas buttonsToMap={buttonsToMap} outputWidth={outputWidth} />
      </>
      <p> {buttonsToMap.CleanedInputPerButton.join('')} </p>
      <p>Canvas width: {outputWidth}</p>
    </div>
  );
}