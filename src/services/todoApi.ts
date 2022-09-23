import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type TodoData = {
  completed: boolean
  id: number
  title: string
  userId: number
}

export const todoApiService = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    // builder.query 幫你把 baseUrl 與 path 做配對
    getTodoList: builder.query<TodoData, string>({
      query: (id) => `todos/${id}`,
    })
  }),
})

export const { useGetTodoListQuery } = todoApiService