import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './store/index'

const reducers = combineReducers({
	users: usersReducer,
})

const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production' ? true : false,
})

export default store
