import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from '../actions'
import Card from './Card'
import CardForm from './CardForm'
import './Column.css'

function Column(props)  {
    const cards = useSelector(state => state.cards.filter(card => (card.column === props.id)));
    const dispatch = useDispatch()

    return (
        <div className="retro-column">
            <h1 className="header">{props.id}. {props.name}</h1>
            {cards.map((item) => item.editing ? <CardForm key={item.id} {...item} /> : <Card key={item.id} {...item}  />)}
            <button onClick={() => dispatch(addCard(props.id, ''))}>Add</button>
        </div>
    )
}

export default Column