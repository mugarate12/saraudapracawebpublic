import React from 'react'

import * as Styled from './styles'

import Title from './../../components/Title/index'
import TextApresentation from './../../components/TextApresentation/index'

export default function Apresentation() {
  return (
    <Styled.Container>
      <Title>Sarau da Praça</Title>
      <TextApresentation>olá, sou um evento cultural</TextApresentation>
    </Styled.Container>
  )
}
