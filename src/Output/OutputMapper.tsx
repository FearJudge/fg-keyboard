import { Fallback } from "../GameProfiles/ButtonStyling"
import { GameFormat, Games } from "../GameProfiles/Games";

export function DrawImageByRule(id: number){
  const g = Games.StreetFighter2;
  return g.displayRules[id] ? g.displayRules[id] : [Fallback];
}