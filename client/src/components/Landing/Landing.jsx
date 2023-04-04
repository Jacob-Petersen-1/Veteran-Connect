import React from "react";

import LoginComponent from "../LoginComponent/LoginComponent";
// MUI Imports

import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";


import Typewriter from "../TypeWriter/TypeWriter";

const Landing = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      marginTop="5rem"
    >
      <Grid item xs={false} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Typewriter text="Terminal Talk" variant="h2" />
          </Grid>
          <Grid item>
            
            <Fade easing="ease-in" timeout={2000} in={true}>
              <CardMedia
                component="img"
                height={{ xs: "20vw", sm: "30vw", md: "30vw", lg: "30vw" }}
                image="./images/service-logos.png"
                alt="service logos"
                sx={{ maxWidth: "90%",mx:"auto" }}
              />
            </Fade>
            <Card sx={{ backgroundColor: "#111111", padding: "1rem" }}>

              <Typography
                textAlign="center"
                variant="subtitle1"
                gutterBottom
                padding="1rem"
              >
                Join the community of veterans breaking into tech
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <LoginComponent />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2}></Grid>
    </Grid>
  );
};

export default Landing;
