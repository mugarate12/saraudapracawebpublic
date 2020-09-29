import React from 'react'

import * as Styled from './styles'

interface PaperAndPenInterface {
  linelenght: number;
  numberline: number;
  linesStates: Array<string>;
}

const PaperAndPen: React.FC<PaperAndPenInterface> = ({ linelenght, numberline, linesStates }) => {
  function movePenInPaper() {
    let top = -49
    let left = 38
    let topNextLine = 13
    let topIncrement = -1
    let leftIncrement = 7
    let lineLimit = 28
    let rotationPen
    
    // mudar a regra de como muda a caneta de linha
    if (numberline === 1) {
      let topAlteration
      let leftAlteration

      if (linelenght > lineLimit) {
        topAlteration = lineLimit * topIncrement
        leftAlteration = lineLimit * leftIncrement
      } else {
        topAlteration = linelenght * topIncrement
        leftAlteration = linelenght * leftIncrement
      }

      top = top + topAlteration
      left = left + leftAlteration
    } else if (numberline !== 1) {
      let topAlteration
      let leftAlteration

      if (linelenght > lineLimit) {
        topAlteration = lineLimit * topIncrement
        leftAlteration = lineLimit * leftIncrement
      } else {
        topAlteration = linelenght * topIncrement
        leftAlteration = linelenght * leftIncrement
      }

      let nextLine = topNextLine * (numberline - 1)

      top = top + nextLine + topAlteration
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

  function renderLinesInPaper() {
    // Vou renderizar 8 linhas portanto, depois de receber os 5 estados, completo com outras linhas vazias.
    // Caso não receba 5 estados, vou completar com o máximo de linhas possivel
    let EmptyLines: Array<number> = []
    EmptyLines.length = 8 - linesStates?.length
    EmptyLines.fill(0)

    return (
      <>
        {linesStates.map((lineContent, index) => {
          return (
            <Styled.paperLine key={index}>
              <Styled.PaperLineContent>{lineContent}</Styled.PaperLineContent>
            </Styled.paperLine>
          )
        })}

        {EmptyLines.map((number, index) => {
          return <Styled.paperLine key={index}/>
        })}
      </>
    )
  }

  return (
    <Styled.ContainerG>
      <Styled.Container>
        <Styled.paperContainer>
          {renderLinesInPaper()}
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
