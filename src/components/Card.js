import React from 'react'
import './Card.css'

function Card(props)  {
    return (
        <div className="retro-card">
            <div>{props.text}</div>
            <small>{props.id}</small>
        </div>
    )
}

export default Card