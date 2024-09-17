import testimage from '../assets/Input_SVGs/1B_A.svg';

export default function ComboCanvas({ buttonsToMap } : {commands: string[], buttonsToMap: number[]})
{
  const c : HTMLCanvasElement | null = document.getElementById("comboArea") as HTMLCanvasElement;
  if (c !== null) {
    const ctx = c.getContext("2d");
    ctx?.reset();
    if (ctx !== null && buttonsToMap.length >= 1) {
      for (let i = 0; i < buttonsToMap.length; i++)
      {
        const imgWidth: number = 32;
        const base_image = new Image(imgWidth, 32);
        base_image.src = testimage;
        ctx.drawImage(base_image, (i * imgWidth) + 10, 10);
      }
    }
  }

  return <>
    <canvas id="comboArea" style={{ color: 'blue',   backgroundColor: 'lightgray'}}>
    </canvas>
  </>
}