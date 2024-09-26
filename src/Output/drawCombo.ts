import { ConstructingRule, NOIMAGESTRING } from "../GameProfiles/ButtonStyling";
import { ComboDisplayProps } from "../Input/ComboDisplayProps";
import { DrawImageByRule, TintSVGByValue } from "./OutputMapper";

export function drawCombo(buttonsToMap: ComboDisplayProps, outputWidth: number) {
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
  console.log(buttonsToMap.ButtonsToDisplay);
  console.log(buttonsToMap.ExtraButtonDataToDisplay);

  async function drawToCanvas() {
    let carryRules: ConstructingRule[] = [];
    for (let i = 0; i < buttonsToMap.ButtonsToDisplay.length; i++) {
      if (ctx == null) { return; }
      const rules: ConstructingRule[] = DrawImageByRule(buttonsToMap.ButtonsToDisplay[i]);
      if (rules[0].src == NOIMAGESTRING) { carryRules = carryRules.concat(rules); continue; }

      const imgWidth: number = (buttonsToMap.ExtraButtonDataToDisplay[i] == "")? 32 : 
      determineWidth(rules, buttonsToMap.ExtraButtonDataToDisplay[i].length, 32);
      const imgHeight: number = 32;
      await makeNewRowIfNeeded(imgWidth, imgHeight);

      const currentPosX = posX;
      const currentPosY = posY;

      for (let j = 0; j < rules.concat(carryRules).length; j++) {
        const rule: ConstructingRule = rules.concat(carryRules)[j];
        if (rule.src == NOIMAGESTRING) {
          const userText = (buttonsToMap.ExtraButtonDataToDisplay.length > i)? 
          buttonsToMap.ExtraButtonDataToDisplay[i] : undefined;
          drawTextOnImage(rule, j, currentPosX, currentPosY, userText);
        } else {
          const image = new Image(imgWidth, imgHeight);
          await drawImageOnThePosition(image, rule, j, currentPosX, currentPosY, imgWidth);
        }
      }

      posX = posX + imgWidth + MARGIN_BETWEEN_X;
      carryRules = [];
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

  async function drawTextOnImage(rule: ConstructingRule, index: number, curX: number, curY: number, text?: string) {
    await new Promise<number>((resolve) => {
      if (ctx == null) { resolve(index); return; }
      ctx.font = rule.printoverride?? "16px Dosis";
      ctx.fillStyle = rule.color?? "#ffffff";
      ctx.fillText(
        rule.print?? text?? "-",
        rule.printoffset? rule.printoffset[0] + curX : curX,
        rule.printoffset? rule.printoffset[1] + curY : curY
      )
      resolve(index);
    });
  }

  async function drawImageOnThePosition(image: HTMLImageElement, rule: ConstructingRule, index: number, curX: number, curY: number, width: number) {
    await new Promise<number>((resolve) => {
      image.onload = () => {
        if (ctx !== null) {
          if (rule.printoverride == "END") {
            curX += width - 32;
            console.log(curX);
          }
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

function determineWidth(rules: ConstructingRule[], length: number, defWidth: number): number {
  let w: number = 0;
  for (let i = 0; i < rules.length; i++)
  {
    if (rules[i].overrideWidth != undefined) {
      const newWidth = (typeof(rules[i].overrideWidth) == "number")? 
      rules[i].overrideWidth as number : (rules[i].overrideWidth as { 
        perCharacter: number })["perCharacter"] * (length);
       w += newWidth;
    }
  }
  if (w == 0) { return defWidth; }
  return w;
}

