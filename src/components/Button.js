import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.white};
  padding: 0.33rem 1rem;
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.ternary};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.black};
  cursor: ${props => props.disabled ? 'not-allowed' : 'cursor'};
`

const PrimaryButton = styled(Button)`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.ternary};
  &:hover {
    background: ${props => props.theme.primaryDarken};
    color: ${props => props.theme.ternary};
  }
`


export default ({ primary, disabled, children, onClick }) => (
  <Button
    type="button"
    disabled={disabled}
    as={primary ? PrimaryButton : Button}
    onClick={() => onClick()}
  >
    {children}
  </Button>
)
