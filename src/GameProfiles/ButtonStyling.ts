import * as Images from "../Output/SVGImport"
// Contains general presentation layout of IDs
// Helps avoid repetition, especially until we get more art to use.

export type ConstructingRule = {
    src: string;
    color?: string;
    offset?: [number, number];
}

// General presentation of arrow ids.
export const GenericArrowStyling: { [key: number]: ConstructingRule[] } = {
    1: [{
        src: Images.ButtonUpLeft,
        color: "#ffffff",
        offset: [0, 0],
    }],
    2: [{
        src: Images.ButtonUp
    }],
    3: [{
        src: Images.ButtonUpRight
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
        src: Images.ButtonDownLeft
    }],
    8: [{
        src: Images.ButtonDown
    }],
    9: [{
        src: Images.ButtonDownRight
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
