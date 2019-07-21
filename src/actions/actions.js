export const actions = {
    ADD_CARD: 'ADD_CARD'
    // TOGGLE_CARD_EDIT_MODE = 'TOGGLE_CARD_EDIT_MODE',
    // DELETE_CARD = 'DELETE_CARD',
    // EDIT_CARD_TEXT = 'EDIT_CARD_TEXT'
}

export const addCardFrom = (id, column, text) => ({
    type: actions.ADD_CARD,
    id,
    column,
    text
})

// export const toggleCardEditMode = (id, column) => ({
//     type: actions.TOGGLE_CARD_EDIT_MODE,
//     id,
//     column
// })

// export const deleteCard = (id, column) => ({
//     type: actions.DELETE_CARD,
//     id,
//     column
// })

// export const editCardText = (id, column, text) => ({
//     type: actions.EDIT_CARD_TEXT,
//     id,
//     column,
//     text
// })