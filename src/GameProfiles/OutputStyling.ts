export type StyleRule = {
  srcSet?: string[];
  srcOffsets?: number[][];
  color?: string;
  defCanvasMargins?: number[];
}

export type AddRuleForStyling = {
  print?: string;
  printoffset?: number[];
  printoverride?: string;
  color?: string;
  src?: string;
  srcOffset?: number[];
  canvasMarginAdd?: number[];
}

export const Styles: {[key: string]: StyleRule} = {
  default: { },
  white: { color: "#888888" }
}

export const AddRules: {[key: string]: AddRuleForStyling} = {
  character: {
    print: "{CHAR}",
    printoffset: [16, 16],
    printoverride: "12px Dosis",
    canvasMarginAdd: [0, 32]
  },
  game: {
    print: "GAME: {GAME}",
    printoffset: [16, 16],
    printoverride: "12px Dosis",
    canvasMarginAdd: [0, 32]
  }
}
