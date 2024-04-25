import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdd : (state, action) => {
      state.todos.push(action.payload)
    }
  },
})

export const { todoAdd, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer