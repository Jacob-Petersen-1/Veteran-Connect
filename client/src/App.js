// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

//Utils Imports
import PrivateRoute from "./utils/PrivateRoute";
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
          }/>

          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
     
      </ThemeProvider>
    </>
  );
}

export default App;
