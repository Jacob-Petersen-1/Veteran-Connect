import React, { useState, useEffect,useContext } from "react";

//Utils Imports
import AuthContext from "../../Auth/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";

//MUI Imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const RegisterComponent = () => {
    const { registerUser, isServerError } = useContext(AuthContext);
    const defaultValues = { email: "", password: "",name: "" };
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
      defaultValues,
      registerUser
    );
  
    useEffect(() => {
      if (isServerError) {
        reset();
      }
    }, [isServerError]);
    
    
    return ( 
        <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp4428421.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                label="Name"
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
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
}
 
export default RegisterComponent;