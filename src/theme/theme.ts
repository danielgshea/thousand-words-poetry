type theme = {
    palette: {
        background: {
            main: string,
            secondary: string,
        },
        color1: string,
        color2: string,
        color3: string,
        color4: string,
        color5: string,
        text: {
            main: string,
            secondary: string,
            tertiary: string,
        }
    }
}

const appTheme: theme = {
    palette: {
        background: {
            main: "#533A71",
            secondary: "#6184D8",
        },
        color1: "#50C5B7",
        color2: "#9CEC5B",
        color3: "#F0F465",
        color4: "#f8f9fa",
        color5: "#e9ecef",
        text: {
            main: "#ffffff",
            secondary: "#fafafa",
            tertiary: "#999999"
        }
    }
}

export default appTheme as theme;