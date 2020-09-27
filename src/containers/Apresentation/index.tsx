import React from 'react'

import * as Styled from './styles'

import Title from './../../components/Title/index'
import TextApresentation from './../../components/TextApresentation/index'

export default function Apresentation() {
  return (
    <Styled.Container>
      <Title>Sarau da Praça</Title>

      <Styled.TextApresentationContainer>
        <TextApresentation>O Sarau da praça é um evento cultural realizado em Teotônio Vilela com o intuito de promover toda e qualquer expressão artistica de maneira livre e aberta</TextApresentation>
        <TextApresentation>Você pode participar do próximo evento se inscrevendo abaixo</TextApresentation>
        <TextApresentation>Você receberá um email de confirmação e, caso esteja na grade do próximo evento, receberá além de um email, com o cronograma</TextApresentation>
      </Styled.TextApresentationContainer>
    </Styled.Container>
  )
}
