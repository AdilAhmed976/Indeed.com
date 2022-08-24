import { Box, Typography } from "@mui/material";
import React from "react";
import HelpIcon from '@mui/icons-material/Help';

const PostNavbar = () => {
  return (
    <>
      <Box  sx={{
        paddingX:"10px",
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center"
      }} width="auto" height="55px" bgcolor="#2d2d2d">
        <Box>
          <img src="ind.jpg" alt="Logo" />
        </Box>
        <Box sx={{
            display:{
                xs:"none",
                sm:"none",
                md:"block",
                lg:"block",
                xl:"block"
            },
            cursor:"pointer"
        }}>
            <Typography color="white">Need help <HelpIcon color="white" /></Typography>
        </Box>
      </Box>
    </>
  );
};

export default PostNavbar;
