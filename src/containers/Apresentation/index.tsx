import React from 'react'

import * as Styled from './styles'

import Title from './../../components/Title/index'
import TextApresentation from './../../components/TextApresentation/index'

export default function Apresentation() {
  return (
    <Styled.Container>
      <Title>Sarau da Praça</Title>
      <TextApresentation>O Sarau da praça é um evento cultural realizado em Teotônio Vilela com o intuito de promover toda e qualquer expressão artistica de maneira livre e aberta</TextApresentation>
      <TextApresentation>Você pode participar do evento abaixo</TextApresentation>
    </Styled.Container>
  )
}
