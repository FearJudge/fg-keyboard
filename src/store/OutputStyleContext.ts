import { createContext } from "react";

export type ReadableOutputCtx = {
  width: number;
  bg: string;
  additionalFields: string[];
  imgType: string; // UC
}

type OutputCtx = {
  width: number;
  bg: string;
  additionalFields: string[];
  imgType: string;
  setter: (w?: number, bg?: string, imgType?: string) => void; // UC
  addSetter: (option: string[]) => void;
};

export const OutputStyleContext = createContext<OutputCtx>({
  width: 404,
  bg: "normal",
  additionalFields: [],
  imgType: "foo",
  setter: () => {},
  addSetter: () => {}
});