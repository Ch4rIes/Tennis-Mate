import React from 'react'

export default function Card(props) {
  return (
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
            <button> View Details </button>
    </div>
    </div>
    
  )
}
