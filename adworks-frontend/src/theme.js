import { textTransform } from "@mui/system";

const themeDark = {
    neutral: {
        // text
      main:"#ffffff",
      light:"#f0f6fc",
      100: "#ffffff",
      200: "#f0f6fc", 
      300: "#f0f0f0",  // manually adjusted
    },
    primary: {
        // Dark Blue
        main:"#0d1a2c",
        100: "#00264c",
        200: "#033b72",
        300: "#66b2ff",
    },
    secondary: {
      // green
      main:"#00a520",
      100: "#075606", // manually adjusted
      200: "#02b100",
      300: "#00dd30",
    },
    ternary: {
        //black
        main: "#ffd166",
        100: "#555555",
        200: "#080707",
        300:"#0e0b0b",
    },
    background:{
        default:"#161b22",
        alt:"#2d323a",
    }
};



const themeLight={
    primary:themeDark.neutral,
    secondary:themeDark.secondary,
    neutral:themeDark.primary,
    ternary:themeDark.ternary,
    background:{
        deafult:"#ffffff",
        alt:"#c2c2c2"
    }
}

const themeSettings=(mode)=>{
    return {
        palette:{
            mode:mode,
            ...(mode==='dark'
                ? themeDark
                : themeLight
                ),
        },
        typography:{
            fontFamily:["Verdana","Geneva","Tahoma","sans-serif"].join(","),
        }

    }
}

export {themeSettings,themeDark,themeLight};