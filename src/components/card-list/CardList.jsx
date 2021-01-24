import React from 'react'
import './CardListStyles.css';
import Card from '../CardComponent/Card'

const CardList = ( props ) => {
    return (
        <div className="card-list">
            {
                props.monsters.map( ( m, i ) => {
                    return (
                        <Card key={m.id} monster={m}/>
                    )
                } )
            }
        </div>
    )
}

export default CardList
