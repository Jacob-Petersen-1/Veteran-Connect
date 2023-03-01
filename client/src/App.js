// General Imports
import {Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage/HomePage";

//Pages Imports
import LandingPage from "./pages/LandingPage/LandingPage";


//Utils Imports


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={ <HomePage/>} />
    </Routes>
    </>
    

    
  );
}

export default App;
