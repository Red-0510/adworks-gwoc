import React from 'react'
import {Button} from "@mui/material"
import styled from '@emotion/styled';

const MyButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.secondary.main,
    color:theme.palette.neutral.main,
    "&:hover": {
      backgroundcolor:theme.palette.secondary.main,
      "@media (hover: none)": {
        backgroundColor: theme.palette.secondary.main,
      }
    }
}));

export default MyButton;