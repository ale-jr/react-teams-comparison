export interface ColorVariants {
  darkest?: string;
  dark?: string;
  default: string;
  light: string;
  lightest?: string;
  contrast: string;
  "0"?: string;
  "50"?: string;
  "100"?: string;
  "200"?: string;
  "300"?: string;
  "400"?: string;
  "500"?: string;
  "600"?: string;
}

export type ColorVariantKeys = keyof ColorVariants;

export interface Sizing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type SizingKeys = keyof Sizing;

export interface Typography {
  size: Sizing;
  weight: {
    regular: string;
    semibold: string;
    bold: string;
  };
  font: {
    heading: string;
    body: string;
  };
}

export interface Colors {
  neutral: ColorVariants;
  primary: ColorVariants;
  success: ColorVariants;
  danger: ColorVariants;
}
export type ColorKeys = keyof Colors;

export interface Animation {
  duration: string;
  timingFunction: string;
  shorthand: string;
}

export interface Theme {
  colors: Colors;
  spacing: Sizing;
  typography: Typography;
  animation: Animation;
}
