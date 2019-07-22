import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from '../actions/actions'
import Card from './Card'
// import CardForm from './CardForm'
import './Column.css'

function Column(props)  {
    const cards = useSelector(state => state.cards.filter(card => (card.column === props.columnId)));
    const dispatch = useDispatch()

    return (
        <div className="retro-column">
            <h1 className="header">{props.columnId}. {props.header}</h1>
            {cards.map((item) => <Card key={item.id} id={item.id} text={item.text} />)}
            <button onClick={() => dispatch(addCard(props.columnId, 'test'))}>Add</button>
        </div>
    )
}

export default Column