const themeDark={
    neutral: {
        // text
      main:"#ffffff",
      light:"#f0f6fc",
      100: "#ffffff",
      200: "#f0f6fc", 
        300: "#f0f0f0",
      400:"#ffffff"  // manually adjusted
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
        default:"#171941",
        alt: "#2d323a",
        // default:"rgb(0,0,0)",
        mainGradient:"linear-gradient(133deg, rgba(0,0,0,1) 0%, rgba(41,41,161,1) 38%, rgba(0,103,175,1) 100%)"
    }
}
// import { textTransform } from "@mui/system";

const themeLight = {
    neutral: {
        // text
      main:"#000000",
      light:"#f0f6fc",
      300: "#ffffff",
      200: "#f0f6fc", 
        100: "#f0f0f0",
      400:"#ffffff"  // manually adjusted
    },
    primary: {
        // Light Blue
        300:"#0d1a2c",
        200: "#00264c",
        100: "#033b72",
        400:"#a1ffea",
        main: "#66b2ff",
    },
    secondary: {
      // green
      300:"#00a520",
      200: "#075606", // manually adjusted
      100: "#02b100",
      main: "#00dd30",
    },
    ternary: {
        //black
        300: "#ffd166",
        200: "#555555",
        100: "#080707",
        main:"#0e0b0b",
    },
    background: {
        default:"#8cdfff",
        // default: "rgb(3,24,108)",
        mainGradient:"linear-gradient(137deg, rgba(3,24,108,1) 0%, rgba(155,230,235,1) 67%)",
        alt:"",
    }
};




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
            fontFamily:["Poppins","sans-serif"].join(","),
        }

    }
}

export {themeSettings,themeDark,themeLight};