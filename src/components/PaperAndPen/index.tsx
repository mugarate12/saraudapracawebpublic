import React from 'react'

import * as Styled from './styles'

interface PaperAndPenInterface {
  linelenght?: number;
  numberline?: number;
}

export default function PaperAndPen() {
  return (
    <Styled.ContainerG>
      <Styled.Container>
        <Styled.paperContainer>
          <Styled.paperLine />
          <Styled.paperLine />
          <Styled.paperLine />
          <Styled.paperLine />
          <Styled.paperLine />
        </Styled.paperContainer>

        <Styled.penContainer>
          <Styled.penCable>
            <Styled.penCableCenter></Styled.penCableCenter>
          </Styled.penCable>

          <Styled.penBeforeTheTip />
        </Styled.penContainer>
      </Styled.Container>
    </Styled.ContainerG>
  )
}
