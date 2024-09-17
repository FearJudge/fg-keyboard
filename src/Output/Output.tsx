import testimage from '../assets/Input_SVGs/1B_A.svg'

// Displays the output gotten by the outputmapper.
// Potentially also displays other input like additional data fields.
// (Character, Combo Damage, Additional Notes etc.)
function Output({commands, buttonsToMap} : {commands: string[], buttonsToMap: number[]}) {
  console.log(commands);
  function myCanvas() {
    const c : HTMLCanvasElement | null = document.getElementById("comboArea") as HTMLCanvasElement;
    if (c !== null) {
      const ctx = c.getContext("2d");
      if (ctx !== null) {
        const base_image = new Image(32, 32);
        base_image.src = testimage;
        ctx.drawImage(base_image, 10, 10);
      }
    }
  }

  return (
    <div className="Output">
      <h1> This is Output: </h1>
      <img src={testimage}></img>
      <div >
      <canvas id="comboArea" style={{ color: 'blue',   backgroundColor: 'lightgray'}} onClick={myCanvas}></canvas>
      </div>
      <p> {buttonsToMap} </p>
      {
        commands.map((m, i) => {
      return <a href={`#${m}`}>{(i ? ', ' : '') + m}</a>;
        })
     }
    </div>
  );
}

  export default Output;