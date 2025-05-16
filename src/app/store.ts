import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer, // 把 todos slice 放進 store
  },
})

// 推導 store 的型別
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// 根據 store 推導出 dispatch 的型別
export type AppDispatch = AppStore['dispatch']
// 定義可重複使用的 Thunk 函式型別
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>