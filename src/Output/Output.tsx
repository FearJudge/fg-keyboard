import ComboCanvas from './ComboCanvas';

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
export default function Output({buttonsToMap} : {buttonsToMap: number[]}) {
  return (
    <div className="self-center py-3 h-24">
      <>
        <ComboCanvas buttonsToMap={buttonsToMap}/>
      </>
      <p> {buttonsToMap.join(', ')} </p>
      {
        buttonsToMap.map((m, i) => {
      return <a key={m} href={`#${m}`}>{(i ? ', ' : '') + m}</a>;
        })
     }
    </div>
  );
}