// Contains a mapping of various inputs and their corresponding buttons.
export const RANGEOFMODIFIERS: number[] = [200, 250];
export const RANGEOFLABELS: number[] = [300, 320];

// The somewhat readable names of various ids.
export const ButtonIDToReadableName: [number, string][]= [
  [0, "Next_Move"],
  [8, "Up"],
  [6, "Right"],
  [2, "Down"],
  [4, "Left"],
  [9, "Up_Right"],
  [7, "Up_Left"],
  [3, "Down_Right"],
  [1, "Down_Left"],
  [5, "Neutral"],
  [10, "Attack_1"],
  [11, "Attack_2"],
  [12, "Attack_3"],
  [13, "Attack_4"],
  [14, "Attack_5"],
  [15, "Attack_6"],
  [16, "Attack_7"],
  [17, "Attack_8"],
  [18, "Special_Action_1"],
  [19, "Special_Action_2"],
  [20, "Special_Action_3"],
  [21, "Special_Action_4"],
  [30, "Motion_QCF"],
  [31, "Motion_QCB"],
  [32, "Motion_HCF"],
  [33, "Motion_HCB"],
  [34, "Motion_DP"],
  [35, "Motion_RDP"],
  [200, "Modifier_Standing"],
  [201, "Modifier_Crouching"],
  [202, "Modifier_Jumping"],
  [203, "Modifier_NeutralJumping"],
  [204, "Modifier_Close"],
  [205, "Modifier_Far"],
  [206, "Modifier_Whiff"],
  [300, "UserLabel_Raw"],
  [301, "UserLabel_Label"],
  [302, "UserLabel_Arrow"],
  [303, "UserLabel_Footnote"]
]

// Regular expressions for typical non numpad-notation movement.
// Typically used with ground based 2d fighters, may work for 3d aswell.
// May not work in all games, but helps clean-up code on the games
// section and can be re-used.
export const GenericMovement: {[key: string]: [RegExp, number, string?]} = {
  upRight: [/[uU]p?-?[fF](wd|orward)?/, 9, "UF"],
  upLeft: [/[uU]p?-?[bB](a?ck(ward)?)?/, 7, "UB"],
  downRight: [/[dD](own)?-?[fF](wd|orward)?/, 3, "DF"],
  downLeft: [/[dD](own)?-?[bB](a?ck(ward)?)?/, 1, "DB"],
  up: [/([uU](p)?|[jJ]ump)/, 8, "U"],
  down: [/[dD](own)?/, 2, "D"],
  left: [/[bB](a?ck(ward)?)?/, 4, "B"],
  right: [/[fF]((wd)|(orward))?/, 6, "F"]
}

// Regular Expressions for user labels.
export const UserLabels: {[key: string]: [RegExp, number, string?]} = {
  userInput: [/\[(?!min:).*?\]/, 300],
  userInputLabeled: [/\((?!to:).*?\)/, 301],
  userInputTransition: [/\((?=to:).*?\)/, 302],
  userInputSmall: [/\[(?=min:).*?\]/, 303]
}

// A set of replacements for motions.
// When using motion replacements, tells the parser, what ids to show
// instead of the motions id picture.
// EX: ID 34 or (Dragon Punch) turns into the IDs 6, 2, 3
// Forward -> Down -> Down+Forward
export const MotionReplacements: {[key: number]: number[]} = {
  30: [2, 3, 6],
  31: [2, 1, 4],
  32: [4, 1, 2, 3, 6],
  33: [6, 3, 2, 1, 4],
  34: [6, 2, 3],
  35: [4, 2, 1]
}

// Regular expressions for typical non numpad-notation motion inputs.
// Typically used with ground based 2d fighters.
export const GenericMotions: {[key: string]: [RegExp, number, string?]} = {
  quarterCircleForward: [/[qQ][cC][fF]/, 30, "QCF"],
  quarterCircleBackward: [/[qQ][cC][bB]/, 31, "QCB"],
  halfCircleForward: [/[hH][cC][fF]/, 32, "HCF"],
  halfCircleBackward: [/[hH][cC][bB]/, 33, "HCB"],
  dragonPunchBackward: [/[Rr](ev(erse)?)?[dD](ragon)?[pP](unch)?/, 35, "DP"],
  dragonPunchForward: [/[dD](ragon)?[pP](unch)?/, 34, "Rev-DP"],
}

// Regular expressions for typical modifiers for fighting game "stances".
export const NarrowGenericStances: {[key: string]: [RegExp, number, string?, number?]} = {
  crouching: [/[Cc](rouch(ing)?.?|r\.?|\.)/, 201, "Cr.", 2],
  airborne: [/[Jj]([.]|u?mp(ing)?\.?)/, 202, "J.", 2],
  airborneNeutral: [/([Nn]eutral?\s?)[Jj](ump(ing)?\.?|\.)/, 203, "NJ.", 2],
  whiff: [/([Ww]hiff?\.?|[Mm]iss?\.)/, 206, "(miss).", 2]
}

// Regular expressions for typical modifiers for fighting game "stances".
export const FullGenericStances: {[key: string]: [RegExp, number, string?, number?]} = {
  ...NarrowGenericStances,
  standing: [/[Ss]([Tt]\.?|tand(ing)?\.?|\.)|[Nn]((eu)?tr(al)?\.?|\.)/, 200, "St.", 2],
  close: [/[Cc][Ll](ose)?\.?/, 204, "Cl.", 2],
  far: [/[Ff](ar\.?|\.)/, 205, "F.", 2],
}

// Regular expressions for typical numpad-notation movement.
// Typically used with "Anime" or "Airdash" fighters.
// May not work in all games, but helps clean-up code on the games
// section and can be re-used.
export const numPadMovement: {[key: string]: [RegExp, number, string?]} = {
  up: [/8/, 8, "8"],
  down: [/2/, 2, "2"],
  left: [/4/, 4, "4"],
  right: [/6/, 6, "6"],
  upRight: [/9/, 9, "9"],
  upLeft: [/7/, 7, "7"],
  downRight: [/3/, 3, "3"],
  downLeft: [/1/, 1, "1"],
}