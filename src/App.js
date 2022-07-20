import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import {useState} from 'react'
import CardDetailModal from './components/CardDetailModal';
import AddEvent from './components/AddEvent';

function App() {
  const [emodal , setEmodal] = useState(false);

  return (
    <Router>
      <div className="App">
      <Navbar setEmodal = {setEmodal}/>
      {emodal && <AddEvent setEmodal = {setEmodal}/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
