import { DefaultTheme } from "styled-components"
const theme: DefaultTheme = {
    colors: {
        neutral: {
            contrast: "#FFFFFF",
            lightest: "#F8F8F8",
            light: "#F1F1F5",
            default: "#BFC7D0",
            dark: "#6256C",
            darkest: "#1C1E2A",
            0: "#FFFFFF",
            50: "#F8F8F8",
            100: "#F8F9FB",
            200: "#F1F1F5",
            300: "#BFC7D0",
            400: "#909196",
            500: "#62656C",
            600: "#1C1E2A"
        },
        danger: {
            default: "#FF7777",
            light: "#FFBEB8",
            contrast: "#1C1E2A"
        },
        success: {
            default: "#9BE7B7",
            light: "#DBF2E3",
            contrast: "#1C1E2A"
        },
        primary: {
            default: "#2678FF",
            light: "#ECF4FF",
            contrast: "#1C1E2A"
        }
    },
    spacing: {
        xs: "0.375em", //6px
        sm: "0.5em", //8px
        md: "1em", //16px
        lg: "1.5em", //24px
        xl: "2em" //32px
    },
    typography: {
        font: {
            body: "'Open Sans', sans-serif",
            heading: "'Open Sans', sans-serif"
        },
        size: {
            xs: "0.5em", //8px
            sm: "0.875em", //14px
            md: "1em", //16px
            lg: "1.25em", //20px
            xl: "1.5em" //24px
        },
        weight: {
            regular: "400",
            semibold: "600",
            bold: "700"
        }
    },
    animation: {
        duration: '120ms',
        timingFunction: 'linear',
        shorthand: '120ms linear'
    }
}

export default theme