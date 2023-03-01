// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Pages Imports
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";

//Utils Imports
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
