import React , {useState}from 'react'
import {BrowserRouter as Router, Link, Routers, Route} from "react-router-dom"
import '../App.css';

export default function Navbar(props) {
  const logout = (e) => {
    props.setLogin(false)
    fetch("/logout")
  };
  return (
  
    <nav>
        
        <img src={require("../image/TENNISAPP.jpeg")}></img>
        <Link to="/" className='title' style={{ textDecoration: 'none' }}><h3>Tennis Mate</h3> </Link>
        <button onClick={()=>{props.setEmodal(true);}}> Start an event </button> 
        {/* when clicked, render the add_descirption modal */}
        {!props.login && 
        <Link to="/Login" style={{ textDecoration: 'none'}}>Log in</Link>
        }
        {!props.login && 
        <Link to="/signup" style={{ textDecoration: 'none',margin: "10px"}}>Sign up</Link>
        }
        {props.login && <button onClick={logout}> log out </button> }
    </nav>
  )
}
