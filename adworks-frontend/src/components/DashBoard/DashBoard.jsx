import React from "react";
import {
    Collapse,
    Button,
    Typography,
} from "@mui/material";
import {
    EqualizerOutlined,
} from "@mui/icons-material"
import { useTheme } from "@emotion/react";

import "./DashBoard.css";

const DashBoard = ({dashBoardOpen}) => {

    const theme=useTheme();

  return (
    <div className="dashboard">
      <Collapse in={dashBoardOpen}>
        <Button
          sx={{
            backgroundColor: theme.palette.primary[100],
          }}
        >
          <EqualizerOutlined />
          <Typography >DashBoard</Typography>
        </Button>
        <Button
          sx={{
            flex:1,
            backgroundColor: theme.palette.primary[100],
          }}
        >
          <EqualizerOutlined />
          <Typography>DashBoard</Typography>
        </Button>
        <Button
          sx={{
            flex:1,
            backgroundColor: theme.palette.primary[100],
          }}
        >
          <EqualizerOutlined />
          <Typography>DashBoard</Typography>
        </Button>
      </Collapse>
    </div>
  );
};

export default DashBoard;
