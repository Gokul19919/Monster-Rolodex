import React from 'react';
import './card.styles.css'

export  const Card = (props) => (
    <div className='card-container'>  
    <img alt="bike" src={`https://robohash.org/${props.bike.id}?set=set2&size=180x180`}/>
     <h2> {props.bike.name} </h2>
     <p>{props.bike.email}</p>
    </div>
)