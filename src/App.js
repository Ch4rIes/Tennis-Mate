import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import {useState} from 'react'
import CardDetailModal from './components/CardDetailModal';

function App() {
  
  return (
    <Router>
      <div className="App">
      <Navbar/>
      
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
