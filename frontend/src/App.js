import React from "react"
import Home from './components/Home.js';
import NavBar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App"> 
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
