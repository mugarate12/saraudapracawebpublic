import React from 'react'

import * as Styled from './styles'
import Logo from './../../assets/imgs/logo.svg'

export default function Loading() {
  return (
    <Styled.Container>
      <Styled.Logo src={Logo} />
    </Styled.Container>
  )
}
