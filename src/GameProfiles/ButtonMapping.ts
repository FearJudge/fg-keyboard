// Contains a mapping of various inputs and their corresponding buttons.
// Multiple keys can have the same value.

// Generic Buttons that we can assign game-specific buttons to.
export const GeneralButtons: string[] = [
    "Next_Move",
    "Up",
    "Right",
    "Down",
    "Left",
    "Up_Right",
    "Up_Left",
    "Down_Right",
    "Down_Left",
    "Neutral",
    "Attack_1",
    "Attack_2",
    "Attack_3",
    "Attack_4",
    "Attack_5",
    "Attack_6",
    "Attack_7",
    "Attack_8",
    "Special_Action_1",
    "Special_Action_2",
    "Special_Action_3",
    "Special_Action_4"
]

const genericMovement = {
    up: ["([uU](p)?|[jJ](ump)?)", "Up"],
    down: [],
    left: [],
    right: [],
    upRight: [],
    upLeft: [],
    downRight: [],
    downLeft: []
}

const numPadMovement = {
    up: [],
    down: [],
    left: [],
    right: [],
    upRight: [],
    upLeft: [],
    downRight: [],
    downLeft: []
}

export const Games = {
    StreetFighter2 : {
        displayName: "Street Fighter 2",
        buttonRegexes: {
            ...genericMovement,
            lp: ["([lL](ight)?[pP](unch)?)", "Attack_1"],
            mp: ["([mM](ed)?(ium)?[pP](unch)?)", "Attack_2"],
            hp: ["([hH](ard|eavy)?[pP](unch)?)", "Attack_3"],
            lk: ["([lL](ight)?[kK](ick)?)", "Attack_4"],
            mk: ["([mM](ed)?(ium)?[kK](ick)?)", "Attack_5"],
            hk: ["([hH](ard|eavy)?[kK](ick)?)", "Attack_6"]
        },
    },
    AnotherGame : {
        displayName: "Street Fighter 2 but with Numpad",
        buttonRegexes: {
            ...numPadMovement,
            lp: ["[lL](ight)?[pP](unch)?", "Attack_1"],
            mp: ["[mM](ed)?(ium)?[pP](unch)?", "Attack_2"],
            hp: ["[hH](ard|eavy)?[pP](unch)?", "Attack_3"],
            lk: ["[lL](ight)?[kK](ick)?", "Attack_4"],
            mk: ["[mM](ed)?(ium)?[kK](ick)?", "Attack_5"],
            hk: ["[hH](ard|eavy)?[kK](ick)?", "Attack_6"]
        },
    }
}

/*
    SF2:

    d, dwn, down as Down Arrow
    b, bck, back as Left Arrow
    f, fwd, forward as Right Arrow
    u, up, jump as Up Arrow
    d+f, df or down-forward as Down-Right Arrow
    u+f, uf, up-forward, jump forward as Up-Right Arrow
    d+b, db or down-backward as Down-Left Arrow
    u+b, ub, up-backward, jump backward as Up-Left Arrow
    lp, light punch as Light Punch
    mp, med punch, medium punch as Medium Punch
    hp, hard punch as Hard Punch
    lk, light kick as Light Kick
    mk, med kick, medium kick as Medium Kick
    hk, hard kick as Hard Kick
    p, punch as Any Punch
    k, kick as Any Kick
*/