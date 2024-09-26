import { GenericMotions, GenericMovement, GenericStances, numPadMovement } from "./ButtonMapping";
import { ConstructingRule, GenericArrowStyling, GenericDetails, GenericMotionStyling, GenericPositionModifiers } from "./ButtonStyling";
import * as OutputImages from "../Output/SVGImport"

// Type that defines the format in which games should be structured with.
// You may add to this if needed.
export type GameFormat = {
  displayName: string;
  characters?: string[];
  replaceMotions?: boolean;
  // Definitions:
  // RegExp: The expression to define this button.
  // number: the id number
  // string?: an optional clean input representation.
  // number?: an optional type. 
  //   1 for combinable attacks (displayed with +)
  //   2 for modifiers.
  buttonRegexes: { [key: string]: [RegExp, number, string?, number?] };
  displayRules: { [key: number]: ConstructingRule[] };
}

// A listing of games.
export const Games: { [key: string]: GameFormat } = {
  StreetFighter2: {
    displayName: "Ultra Street Fighter 2: The Final Challenger",
    characters: [
      "Akuma",    "Balrog",   "Blanka",       "Cammy",    "Chun-Li",
      "Dee Jay",  "Dhalsim",  "E. Honda",     "Evil Ryu", "Fei Long",
      "Guile",    "Ken",      "M. Bison",     "Ryu",      "Sagat",
      "T. Hawk",  "Vega",     "Violent Ken",  "Zangief"
    ],
    replaceMotions: true,
    buttonRegexes: {
      ...GenericStances,
      ...GenericMotions,
      ...GenericMovement,
      lp: [/([lL](ight)?[pP](unch)?)/, 10, "LP", 1],
      mp: [/([mM](ed)?(ium)?[pP](unch)?)/, 11, "MP", 1],
      hp: [/([hH](ard|eavy)?[pP](unch)?)/, 12, "HP", 1],
      lk: [/([lL](ight)?[kK](ick)?)/, 13, "LK", 1],
      mk: [/([mM](ed)?(ium)?[kK](ick)?)/, 14, "MK", 1],
      hk: [/([hH](ard|eavy)?[kK](ick)?)/, 15, "HK", 1]
    },
    displayRules: {
      ...GenericDetails,
      ...GenericPositionModifiers,
      ...GenericArrowStyling,
      ...GenericMotionStyling,
      10: [{ src: OutputImages.SingleButtonBase, color: "#6E6EFF" },
      { src: OutputImages.SingleButtonFist }],
      11: [{ src: OutputImages.SingleButtonBase, color: "#AEAE3F" },
      { src: OutputImages.SingleButtonFist }],
      12: [{ src: OutputImages.SingleButtonBase, color: "#FF5E5E" },
      { src: OutputImages.SingleButtonFist }],
      13: [{ src: OutputImages.SingleButtonBase, color: "#6E6EFF" },
      { src: OutputImages.SingleButtonLeg }],
      14: [{ src: OutputImages.SingleButtonBase, color: "#AEAE3F" },
      { src: OutputImages.SingleButtonLeg }],
      15: [{ src: OutputImages.SingleButtonBase, color: "#FF5E5E" },
      { src: OutputImages.SingleButtonLeg }]
    }
  },
  AnotherGame: {
    displayName: "Street Fighter 2 but with Numpad",
    buttonRegexes: {
      ...numPadMovement,
      lp: [/[lL](ight)?[pP](unch)?/, 10],
      mp: [/[mM](ed)?(ium)?[pP](unch)?/, 11],
      hp: [/[hH](ard|eavy)?[pP](unch)?/, 12],
      lk: [/[lL](ight)?[kK](ick)?/, 13],
      mk: [/[mM](ed)?(ium)?[kK](ick)?/, 14],
      hk: [/[hH](ard|eavy)?[kK](ick)?/, 15]
      },
    displayRules: {
      ...GenericDetails
    }
  }
};
