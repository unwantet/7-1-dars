import { createSlice } from '@reduxjs/toolkit'

function dataFromLocal (){
  return JSON.parse(localStorage.getItem('todos')) || []
}


const initialState = {
  todos: dataFromLocal(),
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo : (state, {payload}) => {
      state.todos.push(payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeTodo : (state , {payload}) => {
      state.todos = state.todos.filter(todo => todo.id !== payload) 
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    completeTodo : (state, {payload}) => {
      state.todos = state.todos.map(todo => todo.id === payload ? {...todo, completed: !todo.completed} : todo)
    }
  },
})

export const { addTodo, removeTodo , completeTodo} = todosSlice.actions
export default todosSlice.reducer