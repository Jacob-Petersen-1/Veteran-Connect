//General Imports
import React, { useState, useEffect,useContext } from 'react';

import { Link } from 'react-router-dom';

//Utils Imports
import AuthContext from '../../Auth/AuthContext';
import useCustomForm from "../../hooks/useCustomForm";


//MUI imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




const LoginForm  = () => {
    const { loginUser, isServerError } = useContext(AuthContext);
    const defaultValues = { username: "", password: "" };
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
        
        
        
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

            <Typography variant='h4'>{"Veteran Connect"}</Typography>
        

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{textDecoration:"none"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" style={{textDecoration:"none"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
     );
}
 
export default LoginForm ;