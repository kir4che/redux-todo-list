import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  todoList: Array<string>
}

const initialState = {
  todoList: ['todo...']
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // store 核心：根據 reducers 的邏輯以產生 action 內容
  reducers: {
    // 1. state 當前狀態
    // 2. action 對應動作
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString())
    },
  }
})

// 告知 store 如何更新 state，更新完後重新渲染頁面。
export const {addTodo, addTimestamp} = todoSlice.actions
export default todoSlice.reducer