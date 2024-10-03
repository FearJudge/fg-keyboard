import * as Images from "../Output/SVGImport"
// Contains general presentation layout of IDs
// Helps avoid repetition, especially until we get more art to use.
export const NOIMAGESTRING: string = "No-Printable-Image";

export type ConstructingRule = {
  src: string;
  srcoffset?: [number, number];
  color?: string;
  overrideWidth?: number | { perCharacter: number };
  printoffset?: [number, number];
  printoverride?: string;
  print?: string;
  additionaCommand?: string;
}

export const Fallback: ConstructingRule = {
  src: Images.SingleButtonA,
  color: "#ffffff",
  printoffset: [0, 0],
}

export const GenericDetails: { [key: number]: ConstructingRule[] } = {
  0: [{
    src: Images.NextMove,
    color: "#ffffff"
  }]
}

// General presentation of arrow ids.
export const GenericArrowStyling: { [key: number]: ConstructingRule[] } = {
  1: [{
    src: Images.ButtonDownLeft,
  }],
  2: [{
    src: Images.ButtonDown
  }],
  3: [{
    src: Images.ButtonDownRight
  }],
  4: [{
    src: Images.ButtonLeft
  }],
  5: [{
    src: Images.ButtonNeutral
  }],
  6: [{
    src: Images.ButtonRight
  }],
  7: [{
    src: Images.ButtonUpLeft
  }],
  8: [{
    src: Images.ButtonUp
  }],
  9: [{
    src: Images.ButtonUpRight
  }]
};

// General presentation of motion ids.
export const GenericMotionStyling: { [key: number]: ConstructingRule[] } = {
  30: [{
    src: Images.JoystickBase
  },
  {
    src: Images.JoystickQCF
  }],
  31: [{
    src: Images.JoystickBase
  },
  {
    src: Images.JoystickQCB
  }]
};

// General presentation of position modifier.
export const GenericPositionModifiers: { [key: number]: ConstructingRule[] } = {
  200: [{
    src: NOIMAGESTRING,
    print: "St.",
    printoffset: [-3, 33]
  }],
  201: [{
    src: NOIMAGESTRING,
    print: "Cr.",
    printoffset: [-3, 33]
  }],
  202: [{
    src: NOIMAGESTRING,
    print: "J.",
    color: "#E2E2FF",
    printoffset: [-3, 33]
  }],
  203: [{
    src: NOIMAGESTRING,
    print: "N.J.",
    printoffset: [-3, 33]
  }],
  204: [{
    src: NOIMAGESTRING,
    print: "Cl.",
    printoffset: [-3, 33]
  }],
  205: [{
    src: NOIMAGESTRING,
    print: "Far.",
    printoffset: [-3, 33]
  }],
  206: [{
    src: NOIMAGESTRING,
    print: "(Miss).",
    printoverride: "10px Dosis",
    printoffset: [-3, 33]
  }]
};

export const Labels: { [key: number]: ConstructingRule[] } = {
  300: [{
    src: Images.LabelStart,
    color: "{0}",
    overrideWidth: 24
  },
  {
    src: Images.LabelMid,
    srcoffset: [24, 0],
    additionaCommand: "STRETCH[-48]",
    color: "{0}",
    print: "@UI@",
    printoffset: [20, 23],
    printoverride: "22px Monospace",
    overrideWidth: { perCharacter: 12 }
  },
  {
    src: Images.LabelEnd,
    additionaCommand: "END",
    color: "{0}",
    overrideWidth: 24
  }],
  301: [{
    src: Images.ArrowLabelStart,
    overrideWidth: 24
  },
  {
    src: Images.LabelMid,
    srcoffset: [24, 0],
    additionaCommand: "STRETCH[-48]",
    print: "@UI@",
    printoffset: [20, 23],
    printoverride: "11px Monospace",
    overrideWidth: { perCharacter: 6 }
  },
  {
    src: Images.ArrowLabelEnd,
    additionaCommand: "END",
    overrideWidth: 24
  }],
  302: [{
    src: Images.LabelStart,
    color: "{0}",
    overrideWidth: 24
  },
  {
    src: Images.LabelMid,
    srcoffset: [24, 0],
    additionaCommand: "STRETCH[-48]",
    color: "{0}",
    print: "@UI@",
    printoffset: [20, 23],
    printoverride: "22px Monospace",
    overrideWidth: { perCharacter: 12 }
  },
  {
    src: Images.ArrowLabelEnd,
    additionaCommand: "END",
    color: "{0}",
    overrideWidth: 24
  }],
  303: [{
    src: Images.BracketOpen,
    overrideWidth: 24
  },
  {
    src: NOIMAGESTRING,
    print: "@UI@",
    printoffset: [25, 23],
    printoverride: "16px Monospace",
    overrideWidth: { perCharacter: 9 }
  },
  {
    src: Images.BracketClose,
    additionaCommand: "END",
    overrideWidth: 24
  }],
};
