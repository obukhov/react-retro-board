export const actions = {
    ADD_CARD: 'ADD_CARD',
    SET_CARD_EDIT_MODE: 'SET_CARD_EDIT_MODE',
    DELETE_CARD: 'DELETE_CARD',
    UPDATE_CARD_TEXT: 'UPDATE_CARD_TEXT'
}

export const addCard = (column, text) => ({
    type: actions.ADD_CARD,
    column,
    text
})

export const deleteCard = (id) => ({
    type: actions.DELETE_CARD,
    id
})

export const updateCard = (id, text) => ({
    type: actions.UPDATE_CARD_TEXT,
    id,
    text
})

export const setCardEditMode = (id, mode) => ({
    type: actions.SET_CARD_EDIT_MODE,
    id,
    mode 
})