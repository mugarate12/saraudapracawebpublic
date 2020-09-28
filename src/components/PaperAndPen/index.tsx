import React from 'react'

import * as Styled from './styles'

interface PaperAndPenInterface {
  linelenght: number;
  numberline: number;
  lineOneContent?: string;
  lineTwoContent?: string;
}

const PaperAndPen: React.FC<PaperAndPenInterface> = ({ linelenght, numberline, lineOneContent, lineTwoContent }) => {
  function movePenInPaper() {
    let top = -56
    let left = 38
    let topNextLine = 11
    let topIncrement = -1
    let leftIncrement = 6
    let lineLimit = 14
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
    } else if (numberline === 2) {
      let topAlteration
      let leftAlteration

      if (linelenght > lineLimit) {
        topAlteration = lineLimit * topIncrement
        leftAlteration = lineLimit * leftIncrement
      } else {
        topAlteration = linelenght * topIncrement
        leftAlteration = linelenght * leftIncrement
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

  // 14 letras por linha
  function renderLinesInPaper() {
    // preciso pegar um estado, verificar seu tamanho e se passar de .length == 14 dividir esse conteudo
    // será dividido em 14 letras por linha
    // no máximo duas linhas por estado

    return (
      <>
        <Styled.paperLine >
          <Styled.PaperLineContent>{lineOneContent}</Styled.PaperLineContent>
        </Styled.paperLine>
        
        <Styled.paperLine >
          <Styled.PaperLineContent>{lineTwoContent}</Styled.PaperLineContent>
        </Styled.paperLine>

        <Styled.paperLine />
        <Styled.paperLine />
        <Styled.paperLine />
        <Styled.paperLine />
        <Styled.paperLine />
        <Styled.paperLine />
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
