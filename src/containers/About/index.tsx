import React from 'react'

import * as Styled from './styles'

import SarauImg2 from './../../assets/imgs/sarau2.jpg'

export default function About() {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Text>Apoiamos qualquer expressão artistica e sempre visamos ser mais diversos possivel, então não se sinta acanhado de participar, ta?</Styled.Text>
        <Styled.Text>Seja como participante ou visitante, só de dividir um pouco de conosco, você já faz parte do nosso "nós". Queremos sua presença!</Styled.Text>
        <Styled.Text></Styled.Text>
      </Styled.TextContainer>

      <Styled.ImgContainer>
        <Styled.Img src={SarauImg2} />
      </Styled.ImgContainer>
    </Styled.Container>
  )
}
