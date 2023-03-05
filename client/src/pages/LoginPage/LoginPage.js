import React from "react";

//MUI Components/Custom Imports
import LoginForm from "../../components/LoginForm/LoginForm";
import AppBarUser from "../../components/AppBar/AppBar";
import { Grid, Box } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <AppBarUser />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{            
        backgroundImage: "url(https://wallpapercave.com/wp/wp4428421.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",}}

      >
        <LoginForm />
      </Box>
    </>
  );
};

export default LoginPage;
