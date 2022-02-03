import { createContext, useReducer, useContext } from 'react'

const StateContext = createContext()

export const StateProvider = ({ children, reducer, initialState }) => {
    return <StateContext.Provider value={useReducer( reducer, initialState )}>
        {children}
    </StateContext.Provider>
}

// custom Hook that will make it easier to provide the StateContext
export const useStateValue = () => useContext(StateContext)
