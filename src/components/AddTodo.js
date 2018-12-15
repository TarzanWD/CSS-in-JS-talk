import React, { useState } from 'react'
import classNames from 'classnames'
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
          className={classNames({
            'button': true,
            'button--primary': text.length !== 0,
            'button--disabled': text.length === 0
          })}
          disabled={text.length === 0}
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
