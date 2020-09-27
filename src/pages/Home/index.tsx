import React, { useState, ChangeEvent } from 'react'

import GlobalStyle from './../../styles/global'
import * as Styled from './styles'

import Header from './../../components/Header/index'
import Apresentation from './../../containers/Apresentation/index'
import Input from './../../components/Input/index'
import PaperAndPen from './../../components/PaperAndPen/index'
import Button from './../../components/Button/index'
import Footer from './../../components/Footer/index'

export default function Home() {
  const [participantName, setParticipantName] = useState<string>('')
  const [participantActivity, setParticipantActivity] = useState<string>('')

  // estados pra manipulação da "animação" do papel e caneta
  const [lineLenght, setLineLenght] = useState<number>(0)
  const [numberLine, setNumberLine] = useState<number>(1)

  function handleParticipantName(e: ChangeEvent<HTMLInputElement>) {
    setNumberLine(1)
    setParticipantName(e.target.value)
    setLineLenght(participantName.length)
  }

  function handleParticipantActivity(e: ChangeEvent<HTMLInputElement>) {
    setNumberLine(2)
    setParticipantActivity(e.target.value)
    setLineLenght(participantActivity.length)
  }

  return (
    <>
      <GlobalStyle />

      <Header />
      
      <Apresentation />

      <Styled.PaperAndPenContainer>
        <PaperAndPen linelenght={lineLenght} numberline={numberLine} lineOneContent={participantName} lineTwoContent={participantActivity} />
      </Styled.PaperAndPenContainer>

      <Styled.FormContainer>
        <Input value={participantName} onChange={(e) => handleParticipantName(e)} placeholder='Seu nome' />
        <Input value={participantActivity} onChange={(e) => handleParticipantActivity(e)} placeholder='cantar, tocar, o que você faz?'/>
      </Styled.FormContainer>
      
      <Styled.ButtonContainer>
        <Button />
      </Styled.ButtonContainer>

      <Footer />
    </> 
  )
}
