import React from 'react'

import * as Styled from './styles'

interface PaperAndPenInterface {
  linelenght: number;
  numberline: number;
}

const PaperAndPen: React.FC<PaperAndPenInterface> = ({ linelenght, numberline }) => {
  function movePenInPaper() {
    let top = -60
    let left = 40
    let rotationPen

    if (numberline === 1) {
      let topAlteration
      let leftAlteration

      if (linelenght > 8) {
        topAlteration = 8 * -2
        leftAlteration = 8 * 10
      } else {
        topAlteration = linelenght * -2
        leftAlteration = linelenght * 10
      }

      top = top + topAlteration
      left = left + leftAlteration
    } else if (numberline === 2) {
      let topNextLine = 12
      let topAlteration
      let leftAlteration

      if (linelenght > 8) {
        topAlteration = 8 * -2
        leftAlteration = 8 * 10
      } else {
        topAlteration = linelenght * -2
        leftAlteration = linelenght * 10
      }

      top = top + topNextLine + topAlteration
      left = left + leftAlteration
    }

    if (linelenght % 2 === 0) {
      rotationPen = 60
    } else {
      rotationPen = 56
    }
    
    return {
      top: `${top}px`,
      left: `${left}px`,
      transform: `rotate(${rotationPen}deg)`
    }
  }

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

        <Styled.penContainer style={movePenInPaper()}>
          <Styled.penCable>
            <Styled.penCableCenter></Styled.penCableCenter>
          </Styled.penCable>

          <Styled.penBeforeTheTip />
        </Styled.penContainer>
      </Styled.Container>
    </Styled.ContainerG>
  )
}

export default PaperAndPen
