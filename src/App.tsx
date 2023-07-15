import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Details from "./Components/Details";

function App (){


  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      
    </Router>
    
    
    
    
    
    
    
    
    
    </>
  )
}
export default App;