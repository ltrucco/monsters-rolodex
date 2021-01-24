import React from 'react'
import './CardStyles.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id + 100}?set=set2&size=180x300`}/>
            <h1> {props.monster.name} </h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}

export default Card
