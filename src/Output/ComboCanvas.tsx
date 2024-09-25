import { ConstructingRule } from '../GameProfiles/ButtonStyling';
import { DrawImageByRule, TintSVGByValue } from './OutputMapper';

export default function ComboCanvas({ buttonsToMap }: {buttonsToMap: number[]}) {
  const MARGIN_X = 5;
  const MARGIN_Y = 5;
  const MARGIN_BETWEEN_X = 0;
  const MARGIN_BETWEEN_Y = 0;

  let canvasWidth = 400;
  let canvasHeight = 42;
  let posX = MARGIN_X;
  let posY = MARGIN_Y;


  const c : HTMLCanvasElement | null = document.getElementById("comboArea") as HTMLCanvasElement;
  const ctx = c?.getContext("2d");
  ctx?.reset();

  if (buttonsToMap.length > 0 && ctx !== null) {
    drawToCanvas();
  }

  // TODO: Seperate into smaller functions for readability.
  async function drawToCanvas() {
    for (let i = 0; i < buttonsToMap.length; i++) {

      if (ctx == null) {return; }
      const rules: ConstructingRule[] = DrawImageByRule(buttonsToMap[i]);

      const imgWidth: number = 32;
      const imgHeight: number = 32;
      if (posX + imgWidth + MARGIN_X > canvasWidth) {
        posX = MARGIN_X;
        // NOTE: If different image heights will be implemented, use here the height of the
        // latest row instead of imgHeight to update posY and canvasHeight.
        posY = posY + imgHeight + MARGIN_BETWEEN_Y;
        canvasHeight = canvasHeight + imgHeight + MARGIN_BETWEEN_Y;
        await resizeCanvas(canvasHeight);
      }

      const currentPosX = posX;
      const currentPosY = posY;

      for (let j = 0; j < rules.length; j++) {
        // const imgWidth: number = 32;
        // const imgHeight: number = 32;

        const image = new Image(imgWidth, imgHeight);
        const imageSrc = rules[j].src;

        await new Promise<number>((resolve) => {image.onload = () => {
          if (ctx !== null){
            if (rules[j].color != undefined) {
              const recanv: CanvasImageSource = TintSVGByValue(image, rules[j].color as string) as OffscreenCanvas;
              ctx.drawImage(recanv, currentPosX, currentPosY);
            } else {
              ctx.drawImage(image, currentPosX, currentPosY);
            }
            resolve(j);
            }
          }
          image.src = imageSrc;
        });

        if (j > 0) { continue; }
        posX = posX + imgWidth + MARGIN_BETWEEN_X;
      }

    }
  }

  async function resizeCanvas(height: number) {
    if (c == null || ctx == null) {return; }
    const oldCanvas = c.toDataURL();
    const img = new Image();

    const result = await new Promise<number>((resolve) => {
      img.onload = () => {
        c.height = height;
        ctx.drawImage(img, 0, 0);
        resolve(height);
      }
      img.src = oldCanvas;
    });

    console.log("result for new canvas height: " + result);
  }

  // mock function to get a different image for id 8. To be replaced
  // by a function from OutputMapper.
  function getImageSrc(id: number) {
    let imageSrc: string = '';
    if (id === 8) imageSrc = testImage2;
    else imageSrc = testimage;
    return imageSrc;
  }

  // Draws an image and updates the position where to draw next.
  function drawImage(imageSrc: CanvasImageSource, imgWidth: number, imgHeight: number, curX: number, curY: number) {
    if (ctx !== null) {
      ctx.drawImage(imageSrc, curX, curY);
    }
  }

  return <div className="grid">
    <canvas id="comboArea" className="
    self-baseline place-self-center
    bg-cyan-900 rounded-md"
    width={canvasWidth} height={canvasHeight}>
    </canvas>
  </div>
}