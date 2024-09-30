import { createContext } from "react";

export type ReadableOutputCtx = {
  width: number;
  bg: string;
  additionalFields: string[];
}

type OutputCtx = {
  width: number;
  bg: string;
  additionalFields: string[];
  setter: (w?: number, bg?: string) => void;
  addSetter: (option: string[]) => void;
};

export const OutputStyleContext = createContext<OutputCtx>({
  width: 404,
  bg: "normal",
  additionalFields: [],
  setter: () => {},
  addSetter: () => {}
});