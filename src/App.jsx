
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage';
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Ativ06-CloneNetflix" element={<Login />} />
        <Route path="/Ativ06-CloneNetflix/home" element={<Home/>}/>
        <Route path="/Ativ06-CloneNetflix/landingpage" element={<LandingPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
