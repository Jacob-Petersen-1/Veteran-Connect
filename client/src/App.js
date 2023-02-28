// General Imports
import {Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage/HomePage";

//Pages Imports
import LandingPage from "./pages/LandingPage/LandingPage";


//Utils Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={LandingPage} />
      <Route path="/home" element={<PrivateRoute> <HomePage/></PrivateRoute>} />
    </Routes>
    </>
    

    
  );
}

export default App;
