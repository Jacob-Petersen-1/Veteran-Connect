import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

//MUI imports
import { Container, Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <Container
      maxWidth=""
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "dark" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        minHeight:"100vh",
        minWidth: "100%"

      }}
    >
      <Grid container justify="center">
        <LoginForm />
      </Grid>
    </Container>
  );
};

export default LandingPage;
