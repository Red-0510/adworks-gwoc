import React from 'react'
import {Button} from "@mui/material"
import styled from '@emotion/styled';

const MyButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.secondary.main,
    color:theme.palette.neutral.main,
    "&:hover, :active" : {
      backgroundColor:theme.palette.secondary[300],
      boxShadow: `0 0.5em 0.5em -0.4em ${theme.palette.primary.main}`,
      // transform: `translateY(-0.25em)`,
      "@media (hover: none)": {
        backgroundColor: theme.palette.secondary[300],
      }
    },
}));

export default MyButton;