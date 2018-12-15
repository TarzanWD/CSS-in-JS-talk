import React from 'react'
import classNames from 'classnames'

import './Todo.css'

export default ({ todo, setDone }) => (
  <div className={classNames({
    'todo': true,
    'todo--done': todo.done
  })}>
    {todo.text}
    <button
      type="button"
      className={classNames({
        'button': true,
        'button--primary': true,
        'button--disabled': todo.done
      })}
      onClick={() => setDone(todo.id)}
    >
      Done
    </button>
  </div>
)
