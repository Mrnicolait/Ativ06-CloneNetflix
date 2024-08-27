
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
