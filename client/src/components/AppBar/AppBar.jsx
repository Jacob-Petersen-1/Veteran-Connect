import React, { useState, useContext } from "react";

//Util
import AuthContext from "../../Auth/AuthContext";
import { useNavigate,useHref,Link } from "react-router-dom";

//MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';

const AppBarCustom = () => {
  const navigate = useNavigate();
  const { logoutUser, user } = useContext(AuthContext);
  const [anchor, setAnchor] = useState(null);
  const isMobile = useMediaQuery("(min-width:600px)");
  const profileUrl = useHref(`/profile/${user.id}`)

  const handleMenuOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const handleProfileClick = () => {
    navigate(profileUrl)


  }

  

  return (
    <AppBar
      sx={{ background: "black", boxShadow: "none" }}
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
            startIcon={<TerminalIcon/>}
            sx={{ mr: 1 }}
          >
            Terminal Talk
          </Button>
        </Link>

        <Box component="div" sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            {user ? (
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <Avatar alt="profile-photo" src={user.avatar} />
              </IconButton>
            ) : (
              <>
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
           <MenuIcon sx={{color:"white"}}/>
            </IconButton>
          </>
        )}
        <Menu
          id="menu-appbar"
          anchorEl={anchor}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchor)}
          onClose={handleMenuClose}
        >
          {user ? (
            <MenuItem onClick={handleProfileClick} >Profile</MenuItem>
          ) : (
            <MenuItem onClick={handleMenuClose}>Join The Discussion</MenuItem>
          )}
          <MenuItem onClick={handleMenuClose}>Contact The Developer</MenuItem>
          {user ? <MenuItem onClick={logoutUser}>Log Out</MenuItem> : null}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
