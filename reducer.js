export const initialState = {
    user: '',
}

export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            // reducer must always return a new state
            return {
                ...state,
                user: action.user,
            }

        // if an unknown action get passed, we return the old state as it is
        default:
            return state
    }
}

// export default reducer