import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
	todoList: Array<string>
}

// 初始 state
const initialState = {
	todoList: ['todo...'],
}

// 使用 createSlice 創建一個 Redux slice
export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	// store 核心：根據 reducers 的邏輯以產生 action 內容
	reducers: {
		// 定義 reducers，根據 action 來更新當前 state
		addTodo: (state, action) => {
			// 在 todoList 陣列中添加新的 todo，新的 todo 內容由 action 提供
			state.todoList.push(action.payload)
		},
		addTimestamp: (state) => {
			// 在 todoList 陣列中添加當前的時間戳
			state.todoList.push(Date.now().toString())
		},
	},
})

// 將 reducers 封裝成 actions，告知 store 如何更新 state，以便在應用中使用。
export const { addTodo, addTimestamp } = todoSlice.actions
export default todoSlice.reducer
