import { createContext } from "react";

export interface IMyContext {
  text: string;
  changeTheText: () => void;
}

export const MyContext = createContext<IMyContext>({
  text: "Lorem ipsum",
  changeTheText: () => {},
});
