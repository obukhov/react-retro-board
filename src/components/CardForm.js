import React from 'react'
import { useDispatch } from 'react-redux'
import './CardForm.css'
import { updateCard, setCardEditMode } from '../actions'

function CardForm(props) {
    const dispatch = useDispatch()

    return (
        <div className="retro-card-form">
            <textarea onChange={(e) => dispatch(updateCard(props.id, e.currentTarget.value))} value={props.text} />
            <div>
                <button onClick={() => dispatch(setCardEditMode(props.id, false))}>Save</button>
                <span>{props.text.length}</span>
            </div>
        </div>
    )
}

export default CardForm