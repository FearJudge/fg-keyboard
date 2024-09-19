import testimage from '../assets/Input_SVGs/1B_A.svg';
import testImage2 from '../assets/Input_SVGs/1B_B.svg';

export default function ComboCanvas({ buttonsToMap } : {commands: string[], buttonsToMap: number[]}) {
  const MARGIN_X = 5;
  const MARGIN_Y = 5;
  const MARGIN_BETWEEN_X = 0;
  const MARGIN_BETWEEN_Y = 0;

  let canvasWidth = 300;
  let canvasHeight = 150;
  let posX = MARGIN_X;
  let posY = MARGIN_Y;

  const c : HTMLCanvasElement | null = document.getElementById("comboArea") as HTMLCanvasElement;
  const ctx = c?.getContext("2d");
  ctx?.reset();

  if (buttonsToMap.length > 0 && ctx !== null) {
    drawToCanvas();
  }

  function drawToCanvas() {
    for (let i = 0; i < buttonsToMap.length; i++) {
      // Tried drawing another test image, too.
      // TODO: Check the SVGs as the images don't seem to align vertically.
      const imageSrc = getImageSrc(buttonsToMap[i]);
      const imgWidth: number = 32;
      const imgHeight: number = 32;
      const baseImage = new Image(imgWidth, imgHeight);
      baseImage.src = imageSrc;
      drawImage(baseImage, imgWidth, imgHeight);
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
  function drawImage(imageSrc: CanvasImageSource, imgWidth: number, imgHeight: number) {
    if (ctx !== null) {
      ctx.drawImage(imageSrc, posX, posY);
      posX = posX + imgWidth + MARGIN_BETWEEN_X;
      if (posX > (canvasWidth - imgWidth - MARGIN_X)) {
        posX = MARGIN_X;
        posY = posY + imgHeight + MARGIN_BETWEEN_Y;
      }
    }
  }

  return <>
    <canvas id="comboArea" style={{ color: 'blue',   backgroundColor: 'lightgray'}}>
    </canvas>
  </>
}