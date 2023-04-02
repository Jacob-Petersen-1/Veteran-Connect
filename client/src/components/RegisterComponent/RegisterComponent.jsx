import React, { useState, useEffect, useContext } from "react";

//Utils Imports
import AuthContext from "../../Auth/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

//MUI Imports

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, AlertTitle } from "@mui/material";
import Typewriter from "../TypeWriter/TypeWriter";

const RegisterComponent = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser, isServerError } = useContext(AuthContext);
  const defaultValues = { email: "", password: "", name: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    registerUser
  );

  const passwordCheck = (e) => {
    if (e.target.value !== formData.password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };



  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        marginTop="6rem"
        style={{ minHeight: "100vh" }}
      >
        <Box
          padding="2rem"
          component="form"
          maxWidth="50rem"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <Typewriter text={"Register to join the Community"} variant={"h5"}/>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Full-Name"
            type="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Verify Password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={passwordCheck}
          />
          {passwordError ? (
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              Passwords do not match — <strong>verify your password!</strong>
            </Alert>
          ) : null}

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onClick={() => setShowPassword(!showPassword)}
              />
            }
            label="Show Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register!
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default RegisterComponent;
