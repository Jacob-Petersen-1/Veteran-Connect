import React, { useState, useEffect, useContext } from "react";

//Utils Imports
import AuthContext from "../../Auth/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";

//MUI Imports

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockPersonSharpIcon from "@mui/icons-material/LockPersonSharp";
import { Stack } from "@mui/material";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { email: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <Box
      component="form"
      padding="2rem"
      maxWidth="50rem"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <LockPersonSharpIcon />
        <Typography>Sign In</Typography>
      </Stack>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        id="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            onClick={() => setShowPassword(!showPassword)}
            value="remember"
            color="primary"
          />
        }
        label="Show Password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>

        </Grid>
        <Grid item>
          <Link to="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginComponent;
