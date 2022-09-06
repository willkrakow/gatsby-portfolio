import React from "react";
import { DefaultTheme } from "styled-components";

export const myTheme: DefaultTheme = {
  borderRadius: "5px",
  borderRadii: ["5px", "10px", "20px"],

  colors: {
    primary: `hsl(204, 69%, 53%)`,
    primaryTint: `hsl(204, 69%, 90%)`,
    secondary: `hsl(264, 69%, 53%)`,
    secondaryTint: `hsl(264, 69%, 90%)`,
    tertiary: `hsl(15, 69%, 52%)`,
    tertiaryTint: `hsl(15, 69%, 90%)`,
    dark: `hsl(204, 20%, 5%)`,
    darkTint: `hsl(204, 20%, 8%)`,
    darkShade: `hsl(204, 10%, 1%)`,
    light: `hsl(204, 20%, 95%)`,
    lightTint: `hsl(204, 10%, 99%)`,
    lightShade: `hsl(204, 20%, 90%)`,
    muted: `hsl(204, 20%, 75%)`,
    error: `hsl(350, 69%, 53%)`,
    success: `hsl(130, 69%, 53%)`,
    white: `hsl(204, 5%, 99%)`,
    black: `hsl(204, 5%, 2%)`,
  },

  fontSizes: {
    xs: `0.875rem`,
    sm: `1rem`,
    md: `1.125rem`,
    lg: `1.5rem`,
    xl: `1.875rem`,
    xxl: `2.25rem`,
    xxxl: `3rem`,
  },
  fontWeights: {
    thin: 200,
    light: 300,
    body: 400,
    heavy: 500,
    bold: 700,
  },
  spacing: ["0px", "4px", "8px", "12px", "16px", "20px", "24px"],
  gradients: {
    blueGreen: "linear-gradient(70deg, #002c86 0%, #17a4ba 50%, #89a4e5 100%);",
  },
}

export const darkTheme = (theme: DefaultTheme): DefaultTheme => {
  console.log(theme);
  return {
    ...theme,
    colors: {
      ...theme.colors,
      light: theme.colors.dark,
      lightTint: theme.colors.darkTint,
      lightShade: theme.colors.darkShade,
      dark: theme.colors.light,
      darkTint: theme.colors.lightTint,
      darkShade: theme.colors.lightShade,
      primary: theme.colors.primaryTint,
      primaryTint: theme.colors.primary,
      secondary: theme.colors.secondaryTint,
      secondaryTint: theme.colors.secondary,
      tertiary: theme.colors.tertiaryTint,
      tertiaryTint: theme.colors.tertiary,
    },
    gradients: {
      blueGreen:
        "linear-gradient(70deg, #002c86 0%, #17a4ba 50%, #89a4e5 100%);",
    },
  }}

interface IThemeToggleContext {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}
export const ThemeToggleContext = React.createContext<IThemeToggleContext>({
  toggleTheme: () => {},
  currentTheme: 'light',
})