import ComboCanvas from './ComboCanvas';
import testimage from '../assets/Input_SVGs/1B_A.svg';

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
function Output({commands, buttonsToMap} : {commands: string[], buttonsToMap: number[]}) {
  console.log(commands);

  return (
    <div className="Output">
      <h1> This is Output: </h1>
      <img src={testimage}></img>
      <div >
        <ComboCanvas buttonsToMap={buttonsToMap} commands={commands}/>
      </div>
      <p> {buttonsToMap} </p>
      {
        commands.map((m, i) => {
      return <a key={m} href={`#${m}`}>{(i ? ', ' : '') + m}</a>;
        })
     }
    </div>
  );
}

  export default Output;