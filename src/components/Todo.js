import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.ternary};
  border-bottom: 0;
  padding: 1rem;
  color: ${props => props.done ? 'red' : props.theme.white};

  &:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
  }

  &:last-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom: ${props => props.theme.borderWidth} solid ${props => props.theme.ternary};
  }
`

export default ({ todo, setDone }) => (
  <Todo done={todo.done}>
    {todo.text}
    <Button
      primary={!todo.done}
      disabled={todo.done}
      onClick={() => setDone(todo.id)}
    >
      Done
    </Button>
  </Todo>
)
