import React from 'react'

import * as Styled from './styles'

interface ButtonInterface {
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({ onClick }) => {
  return (
    <Styled.Button onClick={() => !!onClick ? onClick() : {}}>
      <Styled.ArrowIcon />
    </Styled.Button>
  )
}

export default Button