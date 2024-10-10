import { ConstructingRule, NOIMAGESTRING } from "../GameProfiles/ButtonStyling";
import { AddRuleForStyling, StyleRule } from "../GameProfiles/OutputStyling";
import { ComboDisplayProps } from "../Input/ComboDisplayProps";
import { ReadableGameCtx } from "../store/GameContext";
import { ReadableOutputCtx } from "../store/OutputStyleContext";
import { DrawImageByRule, FinalizeLayoutAndDraw, GetCanvasModifiers, GetCanvasStyleRule, 
         GetTrueWidth, TintSVGByValue } from "./OutputMapper";

/**
  * Edits the ComboCanvas element with the list of button-ids from Input.
  * Uses the Game Context and Output Context to determine the outlook.
  *
  * @param buttonsToMap - ids of the buttons to be displayed
  * @param gameCtx - The React Context containing the game and character
  * @param outputCtx - The React Context of output choices
  * @param h - original height for the canvas element
  * @param ref - an object containing a reference to an Abort Signal
  *   Used to interrupt drawing when the signal expires
  *
  * @returns The height of the output canvas 
  *
  */
export async function drawCombo(
  buttonsToMap: ComboDisplayProps, gameCtx: ReadableGameCtx, 
  outputCtx: ReadableOutputCtx, h: number, ref: {abort: AbortSignal}) {
  const MARGIN_X = 5;
  const MARGIN_Y = 5;
  const MARGIN_BETWEEN_X = 0;
  const MARGIN_BETWEEN_Y = 0;

  const canvasWidth = outputCtx.width;
  const canvasHeight = h;
  let canvasCurrent = 42;
  let marginX = MARGIN_X;
  let marginY = MARGIN_Y;
  let posX = MARGIN_X;
  let posY = MARGIN_Y;


  async function initializeCanvas()
  {
    if (ctx == null) { return; }
    const style: AddRuleForStyling[] = GetCanvasModifiers(outputCtx.additionalFields);
    for (let j = 0; j < style.length; j++)
    {
      const rule: AddRuleForStyling = style[j];
      if (rule.print) {
        drawTextOnImage(rule, -1, 0, posY)
      }
      if (rule.canvasMarginAdd) { 
        marginX += rule.canvasMarginAdd[0]; marginY += rule.canvasMarginAdd[1];
        posY = marginY;
        canvasCurrent = 32 + marginY + MARGIN_Y;
        if (canvasHeight < canvasCurrent) { await resizeCanvas(canvasCurrent); }
      };
    }
    ctx.restore();
  }

  async function setUpCanvas()
  {
    if (ctx == null) { return; }
    await resizeCanvas(canvasCurrent);
    const style: StyleRule = GetCanvasStyleRule(outputCtx.bg);
    if (style.color) {
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = style.color;
      ctx.fillRect(0, 0, canvasWidth, canvasCurrent);
      ctx.restore();
    }
    ctx.restore();
  }

  async function drawToCanvas() {
    await initializeCanvas();
    let carryRules: ConstructingRule[] = [];
    for (let i = 0; i < buttonsToMap.ButtonsToDisplay.length; i++) {
      if (ctx == null || ref.abort.aborted) { return; }
      const rules: ConstructingRule[] = DrawImageByRule(
        buttonsToMap.ButtonsToDisplay[i], gameCtx.game);
      if (rules[0].src == NOIMAGESTRING) { carryRules = carryRules.concat(rules); continue; }

      const imgWidth: number = (buttonsToMap.ExtraButtonDataToDisplay[i] == "")? 32 :
      determineWidth(rules, buttonsToMap.ExtraButtonDataToDisplay[i].length, 32);
      const imgHeight: number = 32;
      await makeNewRowIfNeeded(imgWidth, imgHeight);

      const currentPosX = posX;
      const currentPosY = posY;

      for (let j = 0; j < rules.concat(carryRules).length; j++) {
        const rule: ConstructingRule = rules.concat(carryRules)[j];
        if (ref.abort.aborted) { return; }
        const userText = (buttonsToMap.ExtraButtonDataToDisplay.length > i)?
          buttonsToMap.ExtraButtonDataToDisplay[i] : undefined;
        if (rule.src !== NOIMAGESTRING ) {
          const image = new Image(imgWidth, imgHeight);
          await drawImageOnThePosition(
            image, rule, j, currentPosX, currentPosY, imgWidth, imgHeight, 
            (userText !== "")? userText : undefined);
        }
        if (rule.print != undefined) {
          await drawTextOnImage(rule, j, currentPosX, currentPosY, 
            (userText !== "")? userText : undefined);
        }
      }

      posX = posX + imgWidth + MARGIN_BETWEEN_X;
      carryRules = [];
    }
    await setUpCanvas();
  }

  async function makeNewRowIfNeeded(imgWidth: number, imgHeight: number) {
    if (posX + imgWidth + marginX > canvasWidth) {
      posX = marginX;
      // NOTE: If different image heights will be implemented, use here the height of the
      // latest row instead of imgHeight to update posY and canvasHeight.
      posY += imgHeight + MARGIN_BETWEEN_Y;
      canvasCurrent += imgHeight + MARGIN_BETWEEN_Y;
      if (canvasHeight < canvasCurrent) { await resizeCanvas(canvasCurrent); }
    }
  }

  async function resizeCanvas(height: number) {
    if (c == null || ctx == null) { return; }
    const oldCanvas = c.toDataURL();
    const img = new Image();

    await new Promise<number>((resolve, reject) => {
      img.onload = () => {
        if (ref.abort.aborted) { reject(); return; }
        c.height = height;
        ctx.drawImage(img, 0, 0);
        if (loadDiv != null) {
          loadDiv.style.height = height.toString()+"px";
        }
        resolve(height);
      };
      img.src = oldCanvas;
    });
  }

  async function drawTextOnImage(rule: ConstructingRule | AddRuleForStyling, 
    index: number, curX: number, curY: number, text?: string) {
    await new Promise<number>((resolve, reject) => {
      if (ctx == null) { resolve(index); return; }
      if (ref.abort.aborted) { reject(); return; }
      const t = text?? (rule.print ? rule.print.replace(/\{GAME\}/, gameCtx.game.displayName).replace(/\{CHAR\}/, gameCtx.char).replace("@UI@", "") : "-");
      ctx.font = rule.printoverride?? "16px Dosis";
      ctx.fillStyle = rule.color? (rule.color.startsWith("#") ? rule.color : "#ffffff") : "#ffffff";
      ctx.fillText(
        t,
        rule.printoffset? rule.printoffset[0] + curX : curX,
        rule.printoffset? rule.printoffset[1] + curY : curY
      )
      resolve(index);
    });
  }

  async function drawImageOnThePosition(image: HTMLImageElement, rule: ConstructingRule, 
    index: number, curX: number, curY: number, width: number, height: number, text?: string) {
    await new Promise<number>((resolve, reject) => {
      image.onload = () => {
        if (ctx !== null) {
          if (ref.abort.aborted) { reject(); return; }
          if (rule.overrideWidth &&
            typeof(rule.overrideWidth) !== "number" &&
            (rule.overrideWidth as {perCharacter: number})["perCharacter"] > 0
            && text && text?.length == 0)
          { resolve(index); return; }
          if (rule.additionaCommand == "END") {
            curX += width - 32;
            ctx.globalCompositeOperation = "destination-over";
          }
          if (rule.color !== undefined) {
            const recanv: CanvasImageSource = TintSVGByValue(image, rule.color as string, GetTrueWidth(rule, text? text.length : 1)?? width, height) as OffscreenCanvas;
            FinalizeLayoutAndDraw(recanv, rule, ctx, width, height, curX, curY);
          } else {
            FinalizeLayoutAndDraw(image, rule, ctx, width, height, curX, curY);
          }
          ctx.globalCompositeOperation = "source-over";
          ctx.restore();
          resolve(index);
        }
      };
      image.src = rule.src;
    });
  }

  const loadDiv: HTMLDivElement | null = document.getElementById("loadDiv") as HTMLDivElement;
  const c: HTMLCanvasElement | null = document.getElementById("comboArea") as HTMLCanvasElement;
  if (c !== null) {
    c.height = canvasHeight;
  }
  const ctx = c?.getContext("2d");
  ctx?.reset();

  await drawToCanvas();
  return canvasCurrent; // + marginY + 5;
}

function determineWidth(rules: ConstructingRule[], length: number, defWidth: number): number {
  let w: number = 0;
  for (let i = 0; i < rules.length; i++)
  {
    if (rules[i].overrideWidth != undefined) {
      const newWidth = GetTrueWidth(rules[i], length);
      w += newWidth?? 0;
    }
  }
  if (w == 0) { return defWidth; }
  return w;
}
