import { createTheme } from "@mui/material";
import { blinkKeyFrames } from "./blinkingAnimation";





export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#007acc',
    },
    secondary: {
      main: '#a6e22e',
    },
    background: {
      paper: '#1e1e1e',
      default: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d4d4d4',
    },
  },
  typography: {
    fontFamily: [
      'Consolas',
      'Menlo',
      'Monaco',
      'source-code-pro',
      'Courier New',
      'monospace',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: '#007acc',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: '#0062cc',
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      elevation2: {
        boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 7px -3px rgba(0, 0, 0, 0.08)',
      },
      elevation3: {
        boxShadow: '0 8px 18px -4px rgba(0, 0, 0, 0.1), 0 5px 12px -5px rgba(0, 0, 0, 0.06)',
      },
      elevation4: {
        boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.1), 0 7px 16px -7px rgba(0, 0, 0, 0.04)',
      },
      elevation5: {
        boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.1), 0 9px 28px -9px rgba(0, 0, 0, 0.03)',
      },
    },
  },
});


//            size="large"
// edge="start"
// color="inherit"
// aria-label="menu"
// sx={{ mr: 2 }}