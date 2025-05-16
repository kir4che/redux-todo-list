import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface Todo {
  id: string
  text: string
  completed: boolean
}

// 定義 state 的 TypeScript 型別
export interface TodosState {
  items: Todo[]
}

// 定義初始狀態
const initialState: TodosState = {
  items: [],
}

// 使用 createSlice 建立一個 slice（包含 reducer 與 actions）
const todosSlice = createSlice({
  name: 'todos', // 這會變成 action type 的前綴
  initialState,  // 初始狀態
  reducers: {    // 定義 reducer 與自動產生的 actions
    // 新增 todo
    addTodo: (state, action: PayloadAction<string>) => {
      // 看似直接修改原本的 state，但實際由 Immer 負責不可變更新。
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      })
    },
    // 切換 todo 完成狀態
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    // 刪除 todo
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
  },
})

// 將 reducers 封裝成 actions，並匯出給元件使用。
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions
// 匯出 reducer 給 store 使用
export default todosSlice.reducer