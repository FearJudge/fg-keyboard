import { ConstructingRule } from "./ButtonStyling";
import StreetFighter2 from "./Games/StreetFighter2";
import Persona4AU from "./Games/Persona4ArenaUltimax";

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
  replacements?: { [key: number]: number[] }
}

export const GameListing = [
  StreetFighter2,
  Persona4AU
]
