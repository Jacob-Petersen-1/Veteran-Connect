import React, { useState, useEffect, useContext } from "react";

//Util
import AuthContext from "../../Auth/AuthContext";
import { Link } from "react-router-dom";

//MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LanIcon from "@mui/icons-material/Lan";
import { Stack } from "@mui/material";

const AppBarCustom = () => {
  const { logoutUser, user } = useContext(AuthContext);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
        <Link to={user?"/home": "/"} style={{color:"white", textDecoration:"none"}}>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            startIcon={<LanIcon />}
            sx={{ mr: 1 }}
          >
            Veteran Connect
          </Button>
        </Link>

          <Box component="div" sx={{flexGrow:2}}/>
        
            {user ? (
              <Button
                variant="contained"
                sx={{ color: "white" }}
                onClick={logoutUser}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={{ color: "white" }}>
                    Login
                  </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={{ color: "white" }}>
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarCustom;
