import React from "react";

import LoginComponent from "../LoginComponent/LoginComponent";
// MUI Imports

import { Box, Container, Grid, Typography } from "@mui/material";
import { theme } from "../../theme/theme";







const Landing = () => {

  
  
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      marginTop="7rem"
      style={{ minHeight: "100vh" }}
    >
      <Grid padding="1rem" item xs={1}>
      <Typography lineHeight="1"  variant="h2" gutterBottom>
        Terminal Talk <span className="blink">|</span>
      </Typography>
      <Typography variant="subtitle1" gutterBottom padding="1rem">
        Join the community of veterans breaking into tech
      </Typography>

      </Grid>
      <Grid item xs={3}>
        <LoginComponent />
      </Grid>
    </Grid>
  );
};

export default Landing;
