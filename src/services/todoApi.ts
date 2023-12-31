import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type TodoData = {
	completed: boolean
	id: number
	title: string
	userId: number
}

// 創建一個用於處理 Todo 相關 API 的服務
export const todoApiService = createApi({
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		// builder.query 幫你把 baseUrl 與 path 做配對
		getTodoList: builder.query<TodoData, string>({
			// 定義一個 query，並指定其路徑（透過 id 參數）
			query: (id) => `todos/${id}`,
		}),
	}),
})

export const { useGetTodoListQuery } = todoApiService
