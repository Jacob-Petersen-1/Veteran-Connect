import React from "react";

//MUI Import
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AppBarLanding = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {"</> Veteran Connect"}
          </Typography>
          <Button color="inherit">Developers</Button>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarLanding;
