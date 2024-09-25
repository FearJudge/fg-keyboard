import { ConstructingRule } from '../GameProfiles/ButtonStyling';
import { DrawImageByRule, TintSVGByValue } from './OutputMapper';

export default function ComboCanvas({ buttonsToMap }: {buttonsToMap: number[]}) {
  const MARGIN_X = 5;
  const MARGIN_Y = 5;
  const MARGIN_BETWEEN_X = 0;
  const MARGIN_BETWEEN_Y = 0;

  let canvasWidth = 400;
  let canvasHeight = 150;
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
      // Tried drawing another test image, too.
      // TODO: Check the SVGs as the images don't seem to align vertically.
      
      if (ctx == null) {return; }
      const rules: ConstructingRule[] = DrawImageByRule(buttonsToMap[i]);
      const currentPosX = posX;
      const currentPosY = posY;
      for (let j = 0; j < rules.length; j++) {
        const imgWidth: number = 32;
        const imgHeight: number = 32;
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
        if (posX > (canvasWidth - imgWidth - MARGIN_X)) {
          posX = MARGIN_X;
          posY = posY + imgHeight + MARGIN_BETWEEN_Y;
        }
      }
    }
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