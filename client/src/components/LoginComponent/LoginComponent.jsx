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
  const { loginUser, guestUser, isServerError } = useContext(AuthContext);
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

      <TextFieldInput
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <TextFieldInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        type={showPassword ? "text" : "password"}
      />

      <FormControlLabel
        control={
          <Checkbox
            onClick={() => setShowPassword(!showPassword)}
            color="primary"
          />
        }
        label="Show Password"
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        Sign In
      </Button>

      <Button
        variant="contained"
        onClick={guestUser}
        fullWidth
        sx={{ mt: 1, mb: 2 }}
      >
        Continue As Guest
      </Button>

      <Grid container>
        <Grid item>
          <Link to="/register" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

const TextFieldInput = ({ label, name, value, onChange, type = "text" }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id={name}
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    sx={{
      "& .MuiOutlinedInput-input": {
        color: "white",
        borderColor: "white",
        border: ".5px solid white",
        borderRadius: "5px",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },

      "& .MuiInputLabel-outlined": {
        color: "white",
        marginTop: "-.3rem",
      },
    }}
  />
);

export default LoginComponent;
