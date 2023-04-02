// General Imports
import { Routes, Route } from "react-router-dom";


//Pages Imports
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileCreationPage from "./pages/ProfileCreationPage/ProfileCreationPage";

//Utils Imports
import PrivateRoute from "./utils/PrivateRoute";
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:userProfile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/creation"
            element={
              <PrivateRoute>
                <ProfileCreationPage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
