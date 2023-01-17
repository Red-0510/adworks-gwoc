// import React from 'react'
import {Paper} from "@mui/material"
import styled from '@emotion/styled';

const MyFlexPaper = styled(Paper)(({theme,props})=>({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    ...props,
    // backgroundColor: theme.palette.secondary.main,
    // color:theme.palette.neutral.main,
    // "&:hover": {
    //   backgroundcolor:theme.palette.secondary.main,
    //   "@media (hover: none)": {
    //     backgroundColor: theme.palette.secondary.main,
    //   }
    // }
}));

export default MyFlexPaper;