import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

//MUI Imports
import { Avatar, Container, Box, Typography, Grid, Paper } from "@mui/material";

const Profile = () => {
  const [user, token] = useAuth();
  return (
    <Container>
        <Grid >
          <Grid item xs={12}>
            <Paper
              sx={{
                padding: 5,
                textAlign: "center",
               
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Profile Picture"
                src={user.avatar}
                sx={{ width: 250, height: 250, my:4 }}
              />
              <Typography variant="h4" >
                {user.name}
              </Typography>
              <Typography variant="h6" >
                Software Developer
              </Typography>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
   

    </Container>
  );
};

export default Profile;
