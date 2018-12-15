import React from 'react'

import './Todo.css'

export default ({ todo, setDone }) => (
  <div className="todo">
    {todo.text}
    <button
      type="button"
      className="button button-primary"
      onClick={() => setDone(todo.id)}
    >
      Done
    </button>
  </div>
)
