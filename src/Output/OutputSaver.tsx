import { ReadableOutputCtx } from "../store/OutputStyleContext";
// Responsible for saving the image to a file that the user can download.
// Medium/Low Priority

export default function OpenSave(outputCtx: ReadableOutputCtx) // changing imgType not working yet
{
  const anchor: HTMLAnchorElement = document.createElement("a");
  anchor.href = (document.getElementById("comboArea") as HTMLCanvasElement).toDataURL(outputCtx.imgType, 1.0).replace(outputCtx.imgType, "");
  const date = new Date();
  const dateStr: string = "UnnamedCombo-" + date.getDay() + date.getMonth() + date.getFullYear() + "-" + date.getTime() + "." + outputCtx.imgType.replace("image/", "");
  anchor.download = dateStr;

  document.getElementById("outputDisplay")?.appendChild(anchor);
  anchor.click();
  document.getElementById("outputDisplay")?.removeChild(anchor);
}
