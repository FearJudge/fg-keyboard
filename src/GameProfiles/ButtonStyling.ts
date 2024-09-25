import * as Images from "../Output/SVGImport"
// Contains general presentation layout of IDs
// Helps avoid repetition, especially until we get more art to use.

export type ConstructingRule = {
  src: string;
  color?: string;
  offset?: [number, number];
}

export const Fallback: ConstructingRule = {
  src: Images.SingleButtonA,
  color: "#ffffff",
  offset: [0, 0],
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
