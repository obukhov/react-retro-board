import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux';
import { deleteCard, setCardEditMode } from '../actions'

function Card(props)  {
    const dispatch = useDispatch()
    return (
        <div className="retro-card">
            <div>{props.text}</div>
            <button onClick={() => dispatch(setCardEditMode(props.id, true))}>Edit</button>
            <button onClick={() => dispatch(deleteCard(props.id))}>Delete</button>
        </div>
    )
}

export default Card