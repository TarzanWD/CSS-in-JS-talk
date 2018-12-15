import React, { useState } from 'react'
import { assocPath } from 'ramda'

import Todo from './Todo'
import AddTodo from './AddTodo'
import './TodoList.css'

export default () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'Im a Todo',
      done: false,
    },
    {
      id: 1,
      text: 'Im a Todo 2',
      done: false,
    },
    {
      id: 2,
      text: 'Im a Todo 3',
      done: false
    }
  ])

  const [isAsideShown, setIsAsideShown] = useState(false);

  const setDone = (id) => {
    const index = todos.findIndex(todo => todo.id === id)

    setTodos(assocPath([index, 'done'], true, todos))
  }

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        done: false
      }
    ]

    setTodos(newTodos)
  }

  const closeAside = () => {
    setIsAsideShown(false)
  }
  
  return (
    <section className="todos">
      <h1 className="todos__heading">
        Todo List
      </h1>
        <div className="todos__list">
          {todos.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
              setDone={setDone}
            />
          ))}
        </div>
        {isAsideShown && (
          <AddTodo
            addTodo={addTodo}
            closeAside={closeAside}
          />
        )}
        <button
          type="button"
          className="button button--primary"
          onClick={() => setIsAsideShown(!isAsideShown)}
        >
          Přidat
      </button>
    </section>
  )
}
