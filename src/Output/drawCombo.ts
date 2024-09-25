import { ConstructingRule } from "../GameProfiles/ButtonStyling";
import { DrawImageByRule, TintSVGByValue } from "./OutputMapper";

export function drawCombo(buttonsToMap: number[], outputWidth: number) {
  const MARGIN_X = 5;
  const MARGIN_Y = 5;
  const MARGIN_BETWEEN_X = 0;
  const MARGIN_BETWEEN_Y = 0;

  const canvasWidth = outputWidth;
  let canvasHeight = 42;
  let posX = MARGIN_X;
  let posY = MARGIN_Y;


  const c: HTMLCanvasElement | null = document.getElementById("comboArea") as HTMLCanvasElement;
  if (c !== null) {
    c.height = canvasHeight;
  }
  const ctx = c?.getContext("2d");
  ctx?.reset();

  drawToCanvas();

  async function drawToCanvas() {
    for (let i = 0; i < buttonsToMap.length; i++) {
      if (ctx == null) { return; }
      const rules: ConstructingRule[] = DrawImageByRule(buttonsToMap[i]);

      const imgWidth: number = 32;
      const imgHeight: number = 32;
      await makeNewRowIfNeeded(imgWidth, imgHeight);

      const currentPosX = posX;
      const currentPosY = posY;

      for (let j = 0; j < rules.length; j++) {
        const image = new Image(imgWidth, imgHeight);
        await drawImageOnThePosition(image, rules[j], j, currentPosX, currentPosY);
      }

      posX = posX + imgWidth + MARGIN_BETWEEN_X;
    }
  }

  async function makeNewRowIfNeeded(imgWidth: number, imgHeight: number) {
    if (posX + imgWidth + MARGIN_X > canvasWidth) {
      posX = MARGIN_X;
      // NOTE: If different image heights will be implemented, use here the height of the
      // latest row instead of imgHeight to update posY and canvasHeight.
      posY = posY + imgHeight + MARGIN_BETWEEN_Y;
      canvasHeight = canvasHeight + imgHeight + MARGIN_BETWEEN_Y;
      await resizeCanvas(canvasHeight);
    }
  }

  async function resizeCanvas(height: number) {
    if (c == null || ctx == null) { return; }
    const oldCanvas = c.toDataURL();
    const img = new Image();

    const result = await new Promise<number>((resolve) => {
      img.onload = () => {
        c.height = height;
        ctx.drawImage(img, 0, 0);
        resolve(height);
      };
      img.src = oldCanvas;
    });

    console.log("result for new canvas height: " + result);
  }

  async function drawImageOnThePosition(image: HTMLImageElement, rule: ConstructingRule, index: number, curX: number, curY: number) {
    await new Promise<number>((resolve) => {
      image.onload = () => {
        if (ctx !== null) {
          if (rule.color != undefined) {
            const recanv: CanvasImageSource = TintSVGByValue(image, rule.color as string) as OffscreenCanvas;
            ctx.drawImage(recanv, curX, curY);
          } else {
            ctx.drawImage(image, curX, curY);
          }
          resolve(index);
        }
      };
      image.src = rule.src;
    });
  }
  return canvasHeight;
}
