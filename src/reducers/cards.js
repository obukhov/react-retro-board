import { actions } from '../actions/actions'
import uuidv4 from 'uuid/v4'

const cards = (state = [{id: 'asdasdsa', 'text': 'blah', column: 1}], action) => {
    switch (action.type) {
        case actions.ADD_CARD:
            return state.concat([{
                id: uuidv4(),
                column: action.column,
                text: action.text
            }]) 
        default:
            return state
    }
}

export default cards