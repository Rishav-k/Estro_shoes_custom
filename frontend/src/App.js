import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Navbar from './componenets/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App"> 
    <Navbar/>
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
