// Contains a mapping of various inputs and their corresponding buttons.

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
    [35, "Motion_RDP"]
]

// Regular expressions for typical non numpad-notation movement.
// Typically used with ground based 2d fighters, may work for 3d aswell.
// May not work in all games, but helps clean-up code on the games
// section and can be re-used.
export const genericMovement: {[key: string]: [RegExp, number]} = {
    upRight: [/[uU]p?-?[fF](wd|orward)?/, 9],
    upLeft: [/[uU]p?-?[bB](a?ck(ward)?)?/, 7],
    downRight: [/[dD](own)?[fF](wd|orward)?/, 3],
    downLeft: [/[dD](own)?-?[bB](a?ck(ward)?)?/, 1],
    up: [/([uU](p)?|[jJ]ump)/, 8],
    down: [/[dD](own)?/, 2],
    left: [/[bB](a?ck(ward)?)?/, 4],
    right: [/[fF](wd|orward)?/, 6]
}

// A set of replacements for motions.
// When using motion replacements, tells the parser, what ids to show
// instead of the motions id picture.
// EX: ID 34 or (Dragon Punch) turns into the IDs 6, 2, 3
// Forward -> Down -> Down+Forward
export const MotionReplacements = {
    30: [2, 3, 6],
    31: [2, 1, 4],
    32: [4, 1, 2, 3, 6],
    33: [6, 3, 2, 1, 4],
    34: [6, 2, 3],
    35: [4, 2, 1]
}

// Regular expressions for typical non numpad-notation motion inputs.
// Typically used with ground based 2d fighters.
export const genericMotions: {[key: string]: [RegExp, number]} = {
    quarterCircleForward: [/[qQ][cC][fF]/, 30],
    quarterCircleBackward: [/[qQ][cC][bB]/, 31],
    halfCircleForward: [/[hH][cC][fF]/, 32],
    halfCircleBackward: [/[hH][cC][bB]/, 33],
    dragonPunchBackward: [/[Rr](ev(erse)?)?[dD](ragon)?[pP](unch)?/, 35],
    dragonPunchForward: [/[dD](ragon)?[pP](unch)?/, 34],
}

// Regular expressions for typical numpad-notation movement.
// Typically used with "Anime" or "Airdash" fighters.
// May not work in all games, but helps clean-up code on the games
// section and can be re-used.
export const numPadMovement: {[key: string]: [RegExp, number]} = {
    up: [/NOT IMPLEMENTED/, 0],
    down: [/NOT IMPLEMENTED/, 0],
    left: [/NOT IMPLEMENTED/, 0],
    right: [/NOT IMPLEMENTED/, 0],
    upRight: [/NOT IMPLEMENTED/, 0],
    upLeft: [/NOT IMPLEMENTED/, 0],
    downRight: [/NOT IMPLEMENTED/, 0],
    downLeft: [/NOT IMPLEMENTED/, 0],
}