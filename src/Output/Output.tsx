

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
function Output({raw} : any) {
  return (
    <div className="Output">
      <h1> This is Output: </h1>
      <p> {raw} </p>
    </div>
  );
}

  export default Output;