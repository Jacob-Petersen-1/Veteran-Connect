import React from "react";

import LoginComponent from "../LoginComponent/LoginComponent";
// MUI Imports

import {Grid, Typography } from "@mui/material";

import Typewriter from "../TypeWriter/TypeWriter";



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
      <Typewriter text="Terminal Talk" variant="h2"/>
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
