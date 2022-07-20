export interface ThemePalette {
    darkest?: string
    dark?: string
    default: string
    light: string
    lightest?: string
    contrast: string
}

export interface NeutralPalette extends ThemePalette {
    0: string
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
}

export interface Sizing {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}

export interface Typography {
    size: Sizing,
    weight: {
        regular: string
        semibold: string
        bold: string
    },
    font: {
        heading: string
        body: string
    }
}

export interface Theme {
    colors: {
        neutral: NeutralPalette,
        primary: ThemePalette,
        success: ThemePalette,
        danger: ThemePalette
    },
    spacing: Sizing,
    typography: Typography
}