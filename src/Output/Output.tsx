import { ComboDisplayProps } from '../Input/ComboDisplayProps';
import ComboCanvas from './ComboCanvas';

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
export default function Output({buttonsToMap} : {buttonsToMap: ComboDisplayProps}) {
  return (
    <div className="self-center py-1">
      <ComboCanvas buttonsToMap={buttonsToMap} />
      <p> {buttonsToMap.CleanedInputPerButton.join('')} </p>
    </div>
  );
}