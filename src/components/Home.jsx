import React from 'react'
import '../App.css'
import Card from './Card'
import {useState, useEffect} from 'react'

export default function Home(props) {
  const [card , setCard] = useState([]);
  useEffect(()=>{
    fetch("/get_post").then(
      res => res.json()
    ).then(
       card =>{
        setCard(card)
        console.log(card)
       }
    )
  }, [])
  const allCards = []
  card.map( cur => {
        allCards.push(<Card 
        imgurl={cur.img_url}
        location={cur.location}
        People = {cur.currentPeople}
        skillLevel = {cur.skillLevel}
        Email = {cur.email}
        date = {cur.date}
        OP = "charles"
        courtName = {cur.courtName}
        idf = {cur.id}
        login = {props.login}
      />)
  });
  console.log(allCards)

  return (
    <div className="cards">
      {allCards}
        <Card imgurl="https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        courtName="Jericho beach"
        date="July 20th"
        location="Vancouver"
        skillLevel="Advanced"
        OP = "Charles"
        Email ="xxx@outlook.com"
        People ="2/4"
        />
        <Card imgurl="https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
        courtName="Palo Alto city center"
        date="July 22th"
        location="Vancouver"
        skillLevel="Beginner"
        OP ="Chuck"
        Email ="xxx@outlook.com"
        People ="2/4"
        />
        <Card imgurl="https://images.unsplash.com/photo-1620742820748-87c09249a72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
        courtName="Richmond"
        date="July 24th"
        location="Richmond"
        skillLevel="Beginner"
        OP ="Charlie"
        Email ="xxx@outlook.com"
        People ="2/4"
        />
        
    </div>
    
  )
}
