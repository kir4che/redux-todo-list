import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoApiService } from './services/todoApi'
import todoReducer from './slices/todo'

// 整合 Redux 的 reducer
const reducers = combineReducers({
	todoReducer,
	[todoApiService.reducerPath]: todoApiService.reducer, // 由 API service 生成的 reducer
})

// 配置 Redux store
const store = configureStore({
	reducer: reducers, // 使用整合後的 reducer
	middleware: (getCuurentMiddleware) => {
		// 將由 todoApiService 提供的 middleware 添加到預設 middleware 中
		return getCuurentMiddleware().concat(todoApiService.middleware)
	},
})

// 定義用於 dispatch action 的類型
export type AppDispatch = typeof store.dispatch
// 定義全局 state 的類型
export type RootState = ReturnType<typeof reducers>

export default store
