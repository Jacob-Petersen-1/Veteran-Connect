import { createTheme } from "@mui/material";

export const theme = createTheme({
  primary: {
    // Main color used for primary UI elements, such as buttons and links.
    main: "#002868",
    // Lighter variation of the main color, used for hover and active states.
    light: "#ffffff",
    // Darker variation of the main color, used for shadows and depth effects.
    dark: "#bf0a30",
    // Text color that provides the best contrast with the primary colors.
    contrastText: "#ffffff",
  },
  secondary: {
    // Main color used for secondary UI elements, such as backgrounds and borders.
    main: "#ffffff",
    // Lighter variation of the main color, used for hover and active states.
    light: "#f1f1f1",
    // Darker variation of the main color, used for shadows and depth effects.
    dark: "#000000",
    // Text color that provides the best contrast with the secondary colors.
    contrastText: "#000000",
  },
  error: {
    // Main color used to indicate errors or warnings in the UI.
    main: "#bf0a30",
    // Lighter variation of the main color, used for hover and active states.
    light: "#ff867c",
    // Darker variation of the main color, used for shadows and depth effects.
    dark: "#8f0021",
    // Text color that provides the best contrast with the error color.
    contrastText: "#ffffff",
  },
  text: {
    // Color used for primary text, such as body text and headings.
    primary: "#000000",
    // Color used for secondary text, such as captions and labels.
    secondary: "#ffffff",
  },
  background: {
    // Default background color used for the whole page.
    default: "#f1f1f1",
    // Background color used for paper elements, such as cards and dialogs.
    paper: "#ffffff",
  },
});
