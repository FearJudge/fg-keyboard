// Responsible for saving the image to a file that the user can download.
// Medium/Low Priority

export default function OpenSave()
{
  const anchor: HTMLAnchorElement = document.createElement("a");
  anchor.href = (document.getElementById("comboArea") as HTMLCanvasElement).toDataURL("image/png").replace("image/png", "");
  const date = new Date();
  const dateStr: string = "UnnamedCombo-" + date.getDay() + date.getMonth() + date.getFullYear() + "-" + date.getTime() + ".png";
  anchor.download = dateStr;

  document.getElementById("outputDisplay")?.appendChild(anchor);
  anchor.click();
  document.getElementById("outputDisplay")?.removeChild(anchor);
}
