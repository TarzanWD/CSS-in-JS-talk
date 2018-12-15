import React, { useState } from 'react'

import Todo from './Todo'
import AddTodo from './AddTodo'
import './TodoList.css'

export default () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'Im a Todo',
    },
    {
      id: 1,
      text: 'Im a Todo 2',
    },
    {
      id: 2,
      text: 'Im a Todo 3',
    }
  ])

  const [isAsideShown, setIsAsideShown] = useState(false);

  const setDone = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
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
          {todos
            .map(todo => (
              <Todo
                todo={todo}
                key={todo.id}
                setDone={setDone}
              />
            ))
          }
        </div>
        {isAsideShown && (
          <AddTodo
            addTodo={addTodo}
            closeAside={closeAside}
          />
        )}
        <button
          type="button"
          className="button button-primary"
          onClick={() => setIsAsideShown(!isAsideShown)}
        >
          Přidat
      </button>
    </section>
  )
}
