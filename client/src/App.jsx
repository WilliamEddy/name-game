import React, {useState} from 'react'
import './App.css'
import {Route, Router, Routes} from "react-router-dom";
import Gameplay from "./pages/Gameplay.jsx";
import Results from "./pages/Results.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" ={<Home/>}/>
        <Route path="/gameplay" element={<Gameplay/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </Router>
  )
}

export default App
