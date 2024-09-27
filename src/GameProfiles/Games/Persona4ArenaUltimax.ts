import { GenericMotions, numPadMovement, NarrowGenericStances } from "../ButtonMapping";
import { GenericDetails, GenericPositionModifiers, GenericArrowStyling, GenericMotionStyling, NOIMAGESTRING } from "../ButtonStyling";
import * as OutputImages from "../../Output/SVGImport";
import { GameFormat } from "../Games";

export const Persona4AU: GameFormat = 
{
  displayName: "Persona 4 Arena Ultimax",
  characters: [
    "Margaret", "SHO Minazuki", "Naoto Kurogane", "Teddie", "Yukiko Amagi", 
    "Yu Narukami", "Yosuke Hanamura" , "Chie Satonaka", "Kanji Tatsumi", "Sho MINAZUKI", "Marie",
    "Ken Amada", "Yukari Takeba", "Labrys", "Mitsuru Kirijo", "Aigis", 
    "Tohru Adachi", "Elizabeth", "Akihiko Sanada", "Shadow Labrys", "Junpei Iori", "Rise Kujikawa"
  ],
  replaceMotions: true,
  buttonRegexes: {
    ...NarrowGenericStances,
    ...GenericMotions,
    ...numPadMovement,
    a: [/[aA]/, 10, "A", 1],
    b: [/[bB]/, 11, "B", 1],
    c: [/[cC]/, 12, "C", 1],
    d: [/[dD]/, 13, "D", 1],
  },
  displayRules: {
    ...GenericDetails,
    ...GenericPositionModifiers,
    ...GenericArrowStyling,
    ...GenericMotionStyling,
    10: [{ src: OutputImages.SingleButtonBase, color: "#6E6EFF" },
      { src: NOIMAGESTRING, print: "A", "printoffset": [8, 27], "printoverride": "32px Dosis" }],
    11: [{ src: OutputImages.SingleButtonBase, color: "#2323FF" },
      { src: NOIMAGESTRING, print: "B", "printoffset": [8, 27], "printoverride": "32px Dosis" }],
    12: [{ src: OutputImages.SingleButtonBase, color: "#FF6E6E" },
      { src: NOIMAGESTRING, print: "C", "printoffset": [8, 27], "printoverride": "32px Dosis" }],
    13: [{ src: OutputImages.SingleButtonBase, color: "#FF2323" },
      { src: NOIMAGESTRING, print: "D", "printoffset": [8, 27], "printoverride": "32px Dosis" }],
  }
}

export default Persona4AU;