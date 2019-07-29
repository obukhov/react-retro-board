import { actions } from '../actions'
import uuidv4 from 'uuid/v4'

const cards = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_CARD:
            return [
                ...state,
                {
                    id: uuidv4(),
                    column: action.column,
                    text: action.text,
                    editing: true
                }
            ]
        case actions.DELETE_CARD:
            return state.filter(card => card.id !== action.id)

        case actions.UPDATE_CARD_TEXT:
            return state.map(card => card.id === action.id ? { ...card, text: action.text } : card);

        case actions.SET_CARD_EDIT_MODE:
            return state.map(card => card.id === action.id ? { ...card, editing: action.mode } : card)

        default:
            return state
    }
}

export default cards