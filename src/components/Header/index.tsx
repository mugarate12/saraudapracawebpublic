import React from 'react'

import * as Styled from './styles'

import Logo from './../../assets/imgs/logo.svg'

export default function Header() {
  return (
    <Styled.Container>
      <Styled.LogoImg src={Logo} />
    </Styled.Container>
  )
}
