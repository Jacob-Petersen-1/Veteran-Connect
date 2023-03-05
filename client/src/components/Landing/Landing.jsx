import React from "react";

// MUI Imports

import { Box, Container, Grid } from "@mui/material";

const Landing = () => {
  return (
    <>
      <Grid>
        <Box  sx={{  height: '150vh',
           backgroundImage:
             "url(https://wallpapercave.com/wp/wp4428421.jpg)",
             backgroundRepeat: "no-repeat",
             backgroundSize:"cover",
             backgroundPosition: "center",
             

            }}  />

      </Grid>
    </>
  );
};

export default Landing;
