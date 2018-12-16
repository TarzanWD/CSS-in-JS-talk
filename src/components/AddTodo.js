import React, { useState } from 'react'
import styled from '@emotion/styled'

import Button from './Button'

const AddTodoAside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30vw;
  display: flex;
  flex-flow: column nowrap;
  background: ${props => props.theme.ternary};
  border-left: ${props => props.theme.borderWidth} solid ${props => props.theme.primary};
  padding: 1rem;

  @media (max-width: 40rem) {
    width: 90vw;
  }
`

const AddTodoHeading = styled.h2`
  color: ${props => props.theme.primary};
  font-weight: 700;
`

const AddTodoInput = styled.input`
  background: transparent;
  border: 0;
  padding: 0.5rem;
  border-bottom: ${props => props.theme.borderWidth} solid ${props => props.theme.primary};
  margin-bottom: 1rem;
`

const AddTodoInputGroup = styled.div`
  button {
    margin-right: 1rem;
  }
`

export default ({ addTodo, closeAside }) => {
  const [text, setText] = useState('')

  return (
    <AddTodoAside>
      <AddTodoHeading>
        Add new  Todo
      </AddTodoHeading>
      <AddTodoInput
        placeholder="Really important todo.."
        onChange={(e) => setText(e.target.value)}
      />
      <AddTodoInputGroup>
        <Button
          primary={text.length !== 0}
          disabled={text.length === 0}
          onClick={() => addTodo(text)}
        >
          Připnout
        </Button>
        <Button onClick={() => closeAside()}>
          Zavřít
        </Button>
      </AddTodoInputGroup>
    </AddTodoAside>
  )
}
