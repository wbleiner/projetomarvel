import './Card.css'
import React from 'react'


const Card = props => {
    return (
        <div className="Card">
            <img src={props.image} alt={props.image} />
            <p>{props.name}</p>

        </div>

    )
}
export default Card