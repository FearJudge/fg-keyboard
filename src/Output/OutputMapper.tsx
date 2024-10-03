import { ConstructingRule, Fallback, Labels } from "../GameProfiles/ButtonStyling"
import { GameFormat } from "../GameProfiles/Games";
import { Styles, AddRules, AddRuleForStyling } from "../GameProfiles/OutputStyling";

export function DrawImageByRule(id: number, game: GameFormat){
  if (id >= 300 && id <= 305) { return Labels[id]; }
  return game?.displayRules[id] ? game.displayRules[id] : [Fallback];
}

export function GetCanvasStyleRule(name: string){
  return Styles[name] ? Styles[name] : Styles["default"];
}

export function GetCanvasModifiers(modifiers: string[]){
  const rules: AddRuleForStyling[] = [];
  for (let i = 0; i < modifiers.length; i++) {
    if (AddRules[modifiers[i]]) {rules.push(AddRules[modifiers[i]])};
  }
  return rules;
}

export function TintSVGByValue(source: HTMLImageElement, tint: string, w?: number, h?: number, )
{
  const coloringCanvas: OffscreenCanvas = new OffscreenCanvas(w?? 32, h?? 32);
  const coloringContext: OffscreenCanvasRenderingContext2D | null = coloringCanvas.getContext("2d");
  // Customizable coloring. Uses an arbitrary value.
  if (!tint.startsWith("#")) {
    tint = tint.replace("{0}", "#667fff");
  }
  if (coloringContext == null) { return null; }
  coloringContext.fillStyle = tint;
  coloringContext.fillRect(0, 0, coloringCanvas.width, coloringCanvas.height);
  coloringContext.globalCompositeOperation = "destination-in";
  coloringContext.drawImage(source, 0, 0, w?? 32, h?? 32)
  coloringContext.globalCompositeOperation = "source-over";
  coloringContext.restore();
  
  return coloringCanvas;
}

export function FinalizeLayoutAndDraw(
  src: OffscreenCanvas | HTMLImageElement, rule: ConstructingRule, ctx: CanvasRenderingContext2D,
  width?: number, height?: number, curX?: number, curY?: number
) {
  if (rule.additionaCommand?.startsWith("STRETCH") && width && height) {
    const fnd: RegExpMatchArray | null = rule.additionaCommand?.match(/\[.*\]/);
    const w: number | undefined = fnd ? parseInt(fnd[0].replace("[", "").replace("]", "")) : undefined;
    
    ctx?.drawImage(src,
      rule.srcoffset ? rule.srcoffset[0] + (curX?? 0) : curX?? 0,
      rule.srcoffset ? rule.srcoffset[1] + (curY?? 0) : curY?? 0,
      w? width + w : width, height
    );
  } else {
    ctx?.drawImage(src,
      rule.srcoffset ? rule.srcoffset[0] + (curX?? 0) : curX?? 0,
      rule.srcoffset ? rule.srcoffset[1] + (curY?? 0) : curY?? 0
    );
  }
  ctx?.restore();
}

export function GetTrueWidth(rule: ConstructingRule, chars: number)
{
  return (rule.overrideWidth !== undefined) ? (typeof(rule.overrideWidth) == "number")?
      rule.overrideWidth as number : (rule.overrideWidth as {
        perCharacter: number })["perCharacter"] * (chars) : undefined;
}