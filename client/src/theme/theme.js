import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#007fff', // green
        },
        secondary: {
          main: '#ff5722', // orange
        },
        error: {
          main: '#f44336', // red
        },
        warning: {
          main: '#ffeb3b', // yellow
        },
        info: {
          main: '#2196f3', // blue
        },
        success: {
          main: '#9c27b0', // purple
        },
        background: {
          default: '#121212', // dark grey
          paper: '#212121', // darker grey
        },
        text: {
          primary: '#ffffff', // white
          secondary: '#b0bec5', // light grey
        },
      },
  });
  
  

