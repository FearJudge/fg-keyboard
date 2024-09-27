import { FullGenericStances, GenericMotions, GenericMovement } from "../ButtonMapping";
import { GenericDetails, GenericPositionModifiers, GenericArrowStyling, GenericMotionStyling } from "../ButtonStyling";
import * as OutputImages from "../../Output/SVGImport";
import { GameFormat } from "../Games";

export const StreetFighter2: GameFormat = 
{
  displayName: "Ultra Street Fighter 2",
  characters: [
    "Akuma",    "Balrog",   "Blanka",       "Cammy",    "Chun-Li",
    "Dee Jay",  "Dhalsim",  "E. Honda",     "Evil Ryu", "Fei Long",
    "Guile",    "Ken",      "M. Bison",     "Ryu",      "Sagat",
    "T. Hawk",  "Vega",     "Violent Ken",  "Zangief"
  ],
  replaceMotions: false,
  buttonRegexes: {
    ...FullGenericStances,
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
}

export default StreetFighter2;