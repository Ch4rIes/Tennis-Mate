import React from 'react'
import '../App.css';
export default function CardDetailModal(props) {
  return (
    <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>{props.courtName}</h2>
              <button onClick={ ()=>{props.setModal(false);}} className="close-button">&times;</button>
            </header>
            <main className="modal__main">
            <img src={props.imgurl} className='cardimg'></img> 
            <div className='cardInfo'>
                Level: {props.skillLevel}
            </div>
            <div className='cardInfo'>
                location: {props.location}
            </div>
            <div className='cardInfo'>
            Date: {props.date}
            </div>
            <div className='cardInfo'>
            OP: {props.OP}
            </div>
            <div className='cardInfo'>
            Email: {props.Email}
            </div>
            <div className='cardInfo'>
            People: {props.People}
            </div>


                
            </main>
          </div>
        </>
  )
}
