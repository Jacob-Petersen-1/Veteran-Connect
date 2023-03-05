import React, { useState, useEffect, useContext } from "react";

//Utils Imports
import AuthContext from "../../Auth/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";


//MUI Imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Alert, AlertTitle, IconButton } from "@mui/material";

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

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(true);
  };

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp4428421.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterComponent;
