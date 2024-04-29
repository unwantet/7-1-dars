import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, completeTodo } from './features/todos/todosSlice'
import './App.css'

import { useState } from 'react'

function App() {
  const { todos } = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      text: todoText,
      id: Date.now(),
      completed: false // Add a completed field to your todo object
    }))
    setTodoText("")
  }

  const handleComplete = (id) => {
    dispatch(completeTodo(id))
  }

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div class="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            todo list
          </text>
        </svg>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col w-[500px] gap-5 mx-auto'>
        <input className='input input-bordered input-info w-full' type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText} />
        <button type="submit" className='btn btn-info'>Add</button>
      </form>
      <br /><br />

      <ul className='w-[500px] gap-5 mx-auto cube-wrap'>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={`cube flex gap-5 mb-8 ${todo.completed ? 'line-through' : ''}`}>
            <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{todo.text}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary " onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                {!todo.completed && <button onClick={() => handleComplete(todo.id)} className='btn btn-success'>Complete</button>}
              </div>
            </div>
          </div>
              </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
