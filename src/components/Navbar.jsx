import React from 'react'
import {BrowserRouter as Router, Link, Routers, Route} from "react-router-dom"
import '../App.css';

export default function Navbar() {
  return (
    <nav>
        
        <img src={require("../image/TENNISAPP.jpeg")}></img>
        <Link to="/" className='title' style={{ textDecoration: 'none' }}><h3>Tennis Mate</h3> </Link>
        <Link to="/Login">Log in</Link>

    </nav>
  )
}
