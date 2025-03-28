import { ConstructingRule, Fallback, Labels } from "../GameProfiles/ButtonStyling"
import { GameFormat } from "../GameProfiles/Games";
import { Styles, AddRules, AddRuleForStyling } from "../GameProfiles/OutputStyling";

/**
  * A function that takes in the current game and button id, and returns rules for
  * drawing the output.
  *
  * @param id - the unique id of the command being printed
  * @param game - the GameFormat of the currently selected game
  * 
  * @returns - A unique set of rules for the chosen game on how to print the button input.
  * If id is not found on the game rules, returns a fallback rule set.
  **/
export function DrawImageByRule(id: number, game: GameFormat){
  if (id >= 300 && id <= 305) { return Labels[id]; }
  return game?.displayRules[id] ? game.displayRules[id] : [Fallback];
}

/**
  * A function that takes in a unique name and returns rules for drawing the image background.
  *
  * @param name - a string id describing the output bg.
  * 
  * @returns - A unique set of rules for the background drawing. (color etc.)
  **/
export function GetCanvasStyleRule(name: string){
  return Styles[name] ? Styles[name] : Styles["default"];
}

/**
  * A function that takes in a set of optional modifiers and returns commands
  * on how to manipulate the output image.
  *
  * @param modifiers - a string array containing options describing modifiers.
  * 
  * @returns - A unique set of rules for additional image styling. (title, effects etc.)
  **/
export function GetCanvasModifiers(modifiers: string[]){
  const rules: AddRuleForStyling[] = [];
  for (let i = 0; i < modifiers.length; i++) {
    if (AddRules[modifiers[i]]) {rules.push(AddRules[modifiers[i]])};
  }
  return rules;
}

/**
  * A function that gets a base SVG and a tint hex and tints the image for 
  * drawing into the output.
  * This means we can use white images and recolor them as needed.
  *
  * @param source - an image element to tint.
  * @param tint - a hex string containing color values
  * @param w - an optional width, if not given uses a default value.
  * @param h - an optional height, if not given uses a default value.
  * 
  * @returns - A new offscreencanvas with the recolored image.
  **/
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

/**
  * A function that adds the image element into the canvas using a specific
  * constructing rule and the current "brush position" to ensure the image is
  * printed on the canvas consistantly and correctly.
  *
  * @param src - an image element or canvas to add into the output.
  * @param rule - a ConstructingRule containing instructions on how to print the image.
  * @param ctx - the output canvas as a context.
  * @param width - an optional width, which determines the images required size.
  * @param height - an optional height, which determines the images required size.
  * @param curX - an optional number, which represents the current horizontal position
  * on where to draw on the canvas.
  * @param curY - an optional number, which represents the current vertical position
  * on where to draw on the canvas.
  **/
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

/**
  * A function that takes in a constructing rule and returns the required space for
  * the output.
  *
  * @param rule - the current image output rules.
  * @param chars - the amount of characters of user input in case the rule prints user input.
  * 
  * @returns - a width for the output.
  **/
export function GetTrueWidth(rule: ConstructingRule, chars: number)
{
  return (rule.overrideWidth !== undefined) ? (typeof(rule.overrideWidth) == "number")?
      rule.overrideWidth as number : (rule.overrideWidth as {
        perCharacter: number })["perCharacter"] * (chars) : undefined;
}