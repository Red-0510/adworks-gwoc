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
        main:"#00264c",
        100: "#00264c",
        200: "#033b72",
        300: "#66b2ff",
    },
    secondary: {
      // green
      main:"#238636",
      100: "#075606", // manually adjusted
      200: "#02b100",
      300: "#00dd30",
    },
    ternary: {
        //black
        main: "#000000",
        100: "000000",
        200: "#080707",
        300:"#0e0b0b",
    },
    background:{
        default:"#161b22",
        alt:"#9ca3a9",
    }
};



const themeLight={
    primary:themeDark.neutral,
    secondary:themeDark.secondary,
    neutral:themeDark.primary,
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