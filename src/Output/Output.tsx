import ComboCanvas from './ComboCanvas';
import testimage from '../assets/Input_SVGs/1B_A.svg';

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
function Output({commands, buttonsToMap} : {commands: string[], buttonsToMap: number[]}) {
  console.log(buttonsToMap);

  return (
    <div className="self-center py-3 h-24">
      <>
        <ComboCanvas buttonsToMap={buttonsToMap} commands={commands}/>
      </>
      <p> {buttonsToMap.join(', ')} </p>
      {
        commands.map((m, i) => {
      return <a key={m} href={`#${m}`}>{(i ? ', ' : '') + m}</a>;
        })
     }
    </div>
  );
}

  export default Output;