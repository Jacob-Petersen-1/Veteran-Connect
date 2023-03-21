import React from "react";


import LoginComponent from "../LoginComponent/LoginComponent";
// MUI Imports

import { Box, Container, Grid, Typography } from "@mui/material";


const Landing = () => {
  
  
  return (
    <Box
    textAlign= "center"
   paddingTop="7rem"
      sx={{
        height: "100vh",
        background: "black",
      }}
    >
      <Typography variant="h2" gutterBottom>Terminal Talk</Typography>
      <Typography variant="subtitle1" gutterBottom padding="1rem">Join the community of Veterans Breaking Into Tech</Typography>
      <LoginComponent/>



      
    </Box>
  );
};

export default Landing;
