import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState, AppDispatch } from '../../app/store'
import { addTodo, toggleTodo, removeTodo } from './todosSlice'

const TodoList: React.FC = () => {
  const [text, setText] = useState('')
  // 取得需要的 state（todos items）
  const todos = useSelector((state: RootState) => state.todos.items)
  // 使用 useDispatch 來取得 dispatch() 用來發送 action
  const dispatch = useDispatch<AppDispatch>()

  const handleAddTodo = () => {
    if (text.trim() === '') {
      alert('請輸入 Todo 內容！')
      return
    }
    // addTodo 需要 payload
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className="container">
      <h2 className="title">Todo List</h2>
      <div className="inputGroup">
        <input
          type="text"
          value={text}
          placeholder="新增待辦事項"
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleAddTodo()
          }}
          className="input"
        />
        <button onClick={handleAddTodo} className="addButton">
          新增
        </button>
      </div>

      <ul className="list">
        {todos.length === 0 && <li className="empty">目前沒有待辦事項</li>}
        {todos.map(todo => (
          <li key={todo.id} className="listItem">
            <label className={`label ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="checkbox"
              />
              {todo.text}
            </label>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="deleteButton">
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList