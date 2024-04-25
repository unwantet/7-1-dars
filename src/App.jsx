import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {todoAdd , } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <input type="text" />
        <button onClick={() => dispatch(todoAdd())}>ADD TODO</button>
        {
          count.map((item) => <li key={item}>{item}</li>)
        }
        
      </div>
    </div>
  )
}
export default App