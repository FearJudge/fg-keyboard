import { GenericMotions, GenericMovement, numPadMovement } from "./ButtonMapping";
import { ConstructingRule, GenericArrowStyling, GenericMotionStyling } from "./ButtonStyling";
import * as OutputImages from "../Output/SVGImport"

// Type that defines the format in which games should be structured with.
// You may add to this if needed.
export type GameFormat = {
    displayName: string;
    replaceMotions?: boolean;
    buttonRegexes: {[key: string]: [RegExp, number, string?]};
    displayRules: { [key: number]: ConstructingRule[] };
}

// A listing of games.
export const Games: {[key: string]: GameFormat} = {
    StreetFighter2: {
        displayName: "Street Fighter 2",
        replaceMotions: false,
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
            ...GenericArrowStyling,
            ...GenericMotionStyling,
            10: [{ src: OutputImages.SingleButtonBase, color: "#FF9E9E" },
                { src: OutputImages.SingleButtonFist, color: "#ffffff" }],
            11: [{ src: OutputImages.SingleButtonBase, color: "#FF9E9E" },
                { src: OutputImages.SingleButtonFist, color: "#ffffff" }],
            12: [{ src: OutputImages.SingleButtonBase, color: "#FF9E9E" },
                { src: OutputImages.SingleButtonFist, color: "#ffffff" }]}
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

        }
    }
};
