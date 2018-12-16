import React, { useState } from 'react'
import { assocPath } from 'ramda'
import styled from '@emotion/styled'

import Todo from './Todo'
import AddTodo from './AddTodo'
import Button from './Button'

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

  const Todos = styled.section`
    margin-bottom: 1rem;
  `

  const TodosList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    margin-bottom: 3.5rem;
  `

  const TodosHeading = styled.h1`
    font-weight: 700;
    color: ${props => props.theme.primary};
    font-size: ${props => props.theme.fontSizeSubtitle};
  `
  
  return (
    <Todos>
      <TodosHeading>
        Todo List
      </TodosHeading>
        <TodosList>
          {todos.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
              setDone={setDone}
            />
          ))}
        </TodosList>
        {isAsideShown && (
          <AddTodo
            addTodo={addTodo}
            closeAside={closeAside}
          />
        )}
        <Button
          primary
          onClick={() => setIsAsideShown(!isAsideShown)}
        >
          Přidat
        </Button>
    </Todos>
  )
}
