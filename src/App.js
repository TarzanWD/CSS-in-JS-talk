import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.white};
  }
`

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
      <GlobalStyle />
    </Container>
  </ThemeProvider>
)
