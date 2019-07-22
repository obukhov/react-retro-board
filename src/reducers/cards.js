import { actions } from '../actions/actions'
import uuidv4 from 'uuid/v4'

const cards = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_CARD:
            return state.concat([{
                id: uuidv4(),
                column: action.column,
                text: action.text
            }]) 
        case actions.DELETE_CARD:
            return state.filter(card => (card.id !== action.id)) 
        default:
            return state
    }
}

export default cards