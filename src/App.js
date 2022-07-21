import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import {useState} from 'react'
import CardDetailModal from './components/CardDetailModal';
import AddEvent from './components/AddEvent';
import SignUp from './components/SignUp';

function App() {
  const [emodal , setEmodal] = useState(false);
  const [login , setLogin] = useState(false);
  return (
    <Router>
      <div className="App">
      <Navbar setEmodal = {setEmodal} login = {login} setLogin = {setLogin}/>
      {emodal && <AddEvent setEmodal = {setEmodal}/>}
      <Routes>
        <Route path="/" element={<Home login = {login}/>} />
        <Route path="/Login" element={<Login login = {login} setLogin = {setLogin}/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
