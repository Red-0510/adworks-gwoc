import { textTransform } from "@mui/system";

const themeDark = {
    neutral: {
      main:"#a3a3a3",
      light:"#525252",
      0: "#ffffff",
      10: "#f6f6f6", 
      50: "#f0f0f0", 
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
      1000: "#000000", // manually adjusted
    },
    primary: {
        main:"#061321",
        100: "#cdd1d4",
        200: "#9ca3a9",
        300: "#6a747f",
        400: "#394654",
        500: "#071829",
        600: "#061321",
        700: "#040e19",
        800: "#030a10",
        900: "#010508"
    },
    secondary: {
      // yellow
      main:"#cca752",
      50: "#f0f0f0", // manually adjusted
      100: "#fff6e0",
      200: "#ffedc2",
      300: "#ffe3a3",
      400: "#ffda85",
      500: "#ffd166",
      600: "#cca752",
      700: "#997d3d",
      800: "#665429",
      900: "#332a14",
    },
    background:{
        default:"#394654",
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