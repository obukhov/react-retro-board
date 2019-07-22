import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux';
import { deleteCard } from '../actions/actions'
function Card(props)  {
    const dispatch = useDispatch()
    return (
        <div className="retro-card">
            <div>{props.text}</div>
            <small>{props.id}</small>
            <button onClick={() => dispatch(deleteCard(props.id))}>Delete</button>
        </div>
    )
}

export default Card