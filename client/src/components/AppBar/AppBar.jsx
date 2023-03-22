import React, { useState, useEffect, useContext } from "react";

//Util
import AuthContext from "../../Auth/AuthContext";
import { Link } from "react-router-dom";

//MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";
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
  const [anchor, setAnchor] = useState(null);
  const isMobile = useMediaQuery("(min-width:600px)");

  const handleMenuOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    setAnchor(null);
  };

  return (
    <AppBar
      sx={{ background: "transparent", boxShadow: "none" }}
      position="fixed"
    >
      <Toolbar>
        <Link
          to={user ? "/home" : "/"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            startIcon={<LanIcon />}
            sx={{ mr: 1 }}
          >
            Terminal Talk
          </Button>
        </Link>

        <Box component="div" sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            {user ? (
              <Button
                variant="text"
                sx={{ color: "white" }}
                onClick={logoutUser}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button variant="text" sx={{ color: "white" }}>
                    Login
                  </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button variant="text" sx={{ color: "white" }}>
                    Sign Up
                  </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button variant="text" sx={{ color: "white" }}>
                    Contact Developer
                  </Button>
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <IconButton edge="start" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </>
        )}
         <Menu
            id="menu-appbar"
            anchorEl={anchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Join The Discussion</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact The Developer</MenuItem>
            {user?(<MenuItem onClick={logoutUser}>Log Out</MenuItem>):(null)}
            
          </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
