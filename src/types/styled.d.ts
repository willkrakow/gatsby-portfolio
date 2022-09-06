import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    borderRadii: [string, string, string];
    fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
    colors: {
      primary: string;
      primaryTint: string;
      secondary: string;
      secondaryTint: string;
      tertiary: string;
      tertiaryTint: string;
      light: string;
      lightTint: string;
      lightShade: string;
      dark: string;
      darkTint: string;
      darkShade: string;
      muted: string;
      success: string;
      error: string;
      white: string;
      black: string;
    },
    fontWeights: {
        thin: number;
        light: number;
        body: number;
        heavy: number;
        bold: number;
    },
    spacing: string[];
    gradients: {
      blueGreen: string;
    }
  }
}
