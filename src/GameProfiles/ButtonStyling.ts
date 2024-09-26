import * as Images from "../Output/SVGImport"
// Contains general presentation layout of IDs
// Helps avoid repetition, especially until we get more art to use.
export const NOIMAGESTRING: string = "No-Printable-Image";

export type ConstructingRule = {
  src: string;
  color?: string;
  printoffset?: [number, number];
  printoverride?: string;
  print?: string;
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
    src: NOIMAGESTRING,
    printoffset: [-3, 33]
  }],
  301: [{
    src: NOIMAGESTRING,
    printoffset: [-3, 33]
  }],
  302: [{
    src: NOIMAGESTRING,
    printoffset: [-3, 33]
  }],
  303: [{
    src: NOIMAGESTRING,
    printoffset: [-3, 33]
  }],
  304: [{
    src: NOIMAGESTRING,
    printoffset: [-3, 33]
  }],
  305: [{
    src: NOIMAGESTRING,
    printoffset: [-3, 33]
  }]
};
