import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import AppBarLanding from "../../components/AppBarLanding/AppBarLanding";

//MUI imports
import { Button, Container, Paper, Typography,Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1604339454409-701c5278c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxGcUY2VHl1NHoyUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <AppBarLanding />
     
      
    </Container>
  );
};

export default LandingPage;
