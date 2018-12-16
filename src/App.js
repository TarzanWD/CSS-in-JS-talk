import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'

import TodoList from './components/TodoList'

const theme = {
  font: '\'Poppins\', sans-serif',
  primary: '#368F8B',
  primaryDarken: '#246A73',
  secondary: '#160F29',
  ternary: '#eee',
  black: '#222',
  white: '#fff',
  borderRadius: '0.25rem',
  borderWidth: '0.05rem',
  fontSizeTitle: 'calc(2rem + 2vw)',
  fontSizeSubtitle: 'calc(1.25rem + 2vw)'
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <TodoList />
      <Global styles={{
          'body': {
            margin: 0,
            fontFamily: theme.font,
            color: theme.white,
          }
        }} />
    </Container>
  </ThemeProvider>
)
