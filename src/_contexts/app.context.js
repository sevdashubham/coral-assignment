import React, { createContext, useReducer } from 'react'
import PT from 'prop-types'

export const AppContext = createContext()
export const AppConsumer = AppContext.Consumer

const initialState = {
    favoriteList: [],
    // currentPersonId: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return { ...state, favoriteList: [...state.favoriteList, action.payload] }
        case 'REMOVE_FAVORITE':
            return { ...state, favoriteList: state.favoriteList.filter((favorite) => favorite !== action.payload) }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export const setFavorite = (id) => ({ type: 'SET_FAVORITE', payload: id })
export const removeFavorite = (id) => ({ type: 'REMOVE_FAVORITE', payload: id })
export const reset = () => ({ type: 'RESET' })

export function AppProvider({ children }) {
    const value = useReducer(reducer, initialState)

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
    children: PT.node.isRequired,
}
