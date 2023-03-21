import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00274c', // dark blue
    },
    secondary: {
      main: '#bf0a30', // red
    },
    background: {
      default: '#424242', // gray
    },
    text: {
      primary: '#black',
      secondary: 'white', // white
    },
  },
});

//            size="large"
// edge="start"
// color="inherit"
// aria-label="menu"
// sx={{ mr: 2 }}