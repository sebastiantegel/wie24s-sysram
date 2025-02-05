import { createContext } from "react";

export interface ITheme {
  background: string;
  foreground: string;
  name: string;
}

export interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const themes: IThemes = {
  light: {
    background: "beige",
    foreground: "black",
    name: "Day",
  },
  dark: {
    background: "blue",
    foreground: "white",
    name: "Night",
  },
};

export const ThemeContext = createContext<ITheme>(themes.light);
