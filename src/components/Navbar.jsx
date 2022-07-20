import React from 'react'
import {BrowserRouter as Router, Link, Routers, Route} from "react-router-dom"
import '../App.css';

export default function Navbar(props) {
  return (
    <nav>
        
        <img src={require("../image/TENNISAPP.jpeg")}></img>
        <Link to="/" className='title' style={{ textDecoration: 'none' }}><h3>Tennis Mate</h3> </Link>
        <button onClick={()=>{props.setEmodal(true);}}> Start an event </button> 
        {/* when clicked, render the add_descirption modal */}
        <Link to="/Login" style={{ textDecoration: 'none'}}>Log in</Link>

    </nav>
  )
}
