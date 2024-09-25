import { GenericMotions, GenericMovement, numPadMovement } from "./ButtonMapping";
import { ConstructingRule, GenericArrowStyling, GenericDetails, GenericMotionStyling } from "./ButtonStyling";
import * as OutputImages from "../Output/SVGImport"

// Type that defines the format in which games should be structured with.
// You may add to this if needed.
export type GameFormat = {
  displayName: string;
  replaceMotions?: boolean;
  buttonRegexes: { [key: string]: [RegExp, number, string?] };
  displayRules: { [key: number]: ConstructingRule[] };
}

// A listing of games.
export const Games: { [key: string]: GameFormat } = {
  StreetFighter2: {
    displayName: "Street Fighter 2",
    replaceMotions: true,
    buttonRegexes: {
      ...GenericMotions,
      ...GenericMovement,
      lp: [/([lL](ight)?[pP](unch)?)/, 10],
      mp: [/([mM](ed)?(ium)?[pP](unch)?)/, 11],
      hp: [/([hH](ard|eavy)?[pP](unch)?)/, 12],
      lk: [/([lL](ight)?[kK](ick)?)/, 13],
      mk: [/([mM](ed)?(ium)?[kK](ick)?)/, 14],
      hk: [/([hH](ard|eavy)?[kK](ick)?)/, 15]
    },
    displayRules: {
      ...GenericDetails,
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
