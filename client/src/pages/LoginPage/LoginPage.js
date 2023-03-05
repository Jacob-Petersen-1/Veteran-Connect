import React from "react";

//MUI Components/Custom Imports
import LoginForm from "../../components/LoginForm/LoginForm";
import AppBarUser from "../../components/AppBar/AppBar";

const LoginPage = () => {
  return (
    <>
    <AppBarUser/>
      <LoginForm />
    </>
  );
};

export default LoginPage;
