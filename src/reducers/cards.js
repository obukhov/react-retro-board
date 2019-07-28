import { actions } from '../actions'
import uuidv4 from 'uuid/v4'

const cards = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_CARD:
            return state.concat([{
                id: uuidv4(),
                column: action.column,
                text: action.text,
                editing: true
            }]) 
        case actions.DELETE_CARD:
            return state.filter(card => (card.id !== action.id)) 

        case actions.UPDATE_CARD_TEXT: 
            return state.filter(card => { 
                if (card.id === action.id) {
                     return Object.assign(card, {text: action.text});  
                }; 
                return card; 
            })

        case actions.SET_CARD_EDIT_MODE: 
            return state.filter(card => { if (card.id === action.id) { card.editing = action.mode }; return card; })

        default:
            return state
    }
}

export default cards