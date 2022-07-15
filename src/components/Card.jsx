import React from 'react'
import {useState} from 'react'
import CardDetailModal from './CardDetailModal'

export default function Card(props) {
    const [modal , setModal] = useState(false);
    return (
    <>
    <div className='wrapper'>
        <div className='Card'>
            <img src={props.imgurl} className='cardimg'></img> 
            <h3>{props.courtName}</h3>
            <p>
                Level: {props.skillLevel} 
                <br/>
                location: {props.location}     
                <br/>
                Date: {props.date}
            </p>
            <button onClick={()=>{setModal(true)}}> View Details </button>
            
    </div>
    </div>
    {modal && <CardDetailModal 
    setModal={setModal} 
    imgurl ={props.imgurl} 
    location= {props.location} 
    date= {props.date} 
    courtName={props.courtName} 
    skillLevel={props.skillLevel}
    OP= {props.OP}
    Email = {props.Email}
    People = {props.People}
    />}
    </>
    
    
  )
}
