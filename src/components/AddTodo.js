import React, { useState } from 'react'
import './AddTodo.css'

export default ({ addTodo, closeAside }) => {
  const [text, setText] = useState('')

  return (
    <aside className="add-todo">
      <h2 className="add-todo__heading">
        Add new  Todo
      </h2>
      <input
        className="add-todo__input"
        placeholder="Really important todo.."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="add-todo__input-group">
        <button
          type="button"
          className="button button-primary"
          onClick={() => addTodo(text)}
        >
          Připnout
        </button>
        <button
          type="button"
          className="button"
          onClick={() => closeAside()}
        >
          Zavřít
        </button>
      </div>
    </aside>
  )
}
