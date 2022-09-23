import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoApiService } from './services/todoApi'
import todoReducer from './slices/todo'

const reducers = combineReducers({
	todoReducer,
	[todoApiService.reducerPath]: todoApiService.reducer,
})

const store = configureStore({
	reducer: reducers,
	middleware: (getCuurentMiddleware) => {
		return getCuurentMiddleware().concat(todoApiService.middleware)
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducers>

export default store
