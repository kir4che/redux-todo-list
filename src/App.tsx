import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { useGetTodoListQuery } from './services/todoApi'
import { addTimestamp, addTodo } from './slices/todo'
import './style.css'

function App() {
	const todoReducer = useAppSelector((state) => state.todoReducer)
	const todoList = todoReducer.todoList

	const [text, setText] = useState('')

	const dispatch = useAppDispatch()

	const { data, error, isLoading } = useGetTodoListQuery('1')

	console.log('data', data)
	console.log('error', error)
	console.log('isLoading', isLoading)

	const { userId = '', title = '' } = data || {}

	return (
		<>
			<div className='wrapper'>
				<h2>TODO LIST</h2>
				<input
					value={text}
					type='text'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setText(e.target.value)
					}}
				/>
				<div className='btnGroup'>
					<button
						onClick={() => {
							if (text === '') {
								alert('請輸入 Todo 內容！')
								return
							}
							// addTodo() 需要 payload
							dispatch(addTodo(text))
							setText('')
						}}
					>
						Submit
					</button>
					<button
						onClick={() => {
							// dispatch 帶一個 action
							dispatch(addTimestamp())
						}}
					>
						Record Timestamp
					</button>
				</div>
				<h2>List</h2>
				{todoList.map((data, index) => {
					return (
						<div className='list' key={data}>
							<b>{index + 1}</b>
							{data}
						</div>
					)
				})}
				<h2>List2</h2>
				{isLoading && <p>Loading</p>}
				{!isLoading && (
					<div>
						{/* ? 表示 undefined 不會回傳 */}
						<p>USER ID: {userId}</p>
						<p>USER TITLE: {title}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default App
