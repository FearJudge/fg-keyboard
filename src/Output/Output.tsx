

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
function Output({raw, commands} : any) {
  console.log(commands);
  return (
    <div className="Output">
      <h1> This is Output: </h1>
      {
        commands.map((m, i) => {
      return <a href={`#${m}`}>{(i ? ', ' : '') + m}</a>;
        }) 
     }
    </div>
  );
}

  export default Output;