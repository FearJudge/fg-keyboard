import { Fallback } from "../GameProfiles/ButtonStyling"
import { Games } from "../GameProfiles/Games";

export function DrawImageByRule(id: number){
  const g = Games.StreetFighter2;
  return g.displayRules[id] ? g.displayRules[id] : [Fallback];
}

export function TintSVGByValue(source: HTMLImageElement, tint: string)
{
  const coloringCanvas: OffscreenCanvas = new OffscreenCanvas(32, 32);
  const coloringContext: OffscreenCanvasRenderingContext2D | null = coloringCanvas.getContext("2d");
  if (coloringContext == null) { return null; }
  coloringContext.fillStyle = tint;
  coloringContext.fillRect(0, 0, 32, 32);
  coloringContext.globalCompositeOperation = "destination-in";
  coloringContext.drawImage(source, 0, 0)
  coloringContext.globalCompositeOperation = "source-over";
  
  return coloringCanvas;
}