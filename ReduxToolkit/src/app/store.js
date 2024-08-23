import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Feature/Todo/Todoslice'

export const Store=configureStore({
    reducer:todoReducer
})

