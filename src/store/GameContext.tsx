import { createContext } from "react";
import { StreetFighter2 } from "../GameProfiles/Games/StreetFighter2";
import { GameFormat } from "../GameProfiles/Games";

type GameCtxType = {
  game: GameFormat;
  char: string;
  setter: (game?: GameFormat, char?: string) => void;
};

export const GameContext = createContext<GameCtxType>({
  game: StreetFighter2,
  char: "Ryu",
  setter: () => {}
});