import React, { useState, useEffect } from 'react'

import GlobalStyle from './../../styles/global'

import Header from './../../components/Header/index'
import Apresentation from './../../containers/Apresentation/index'
import Input from './../../components/Input/index'
import PaperAndPen from './../../components/PaperAndPen/index'

export default function Home() {
  const [participantName, setParticipantName] = useState<string>('')
  const [participantActivity, setParticipantActivity] = useState<string>('')

  // estados pra manipulação da "animação" do papel e caneta
  const [lineLenght, setLineLenght] = useState<number>(0)
  const [numberLine, setNumberLine] = useState<number>(1)

  useEffect(() => {
    if (participantName.length !== 0 && participantActivity.length === 0) {
      setLineLenght(participantName.length)
      setNumberLine(1)
    } else if (participantActivity.length !== 0) {
      setLineLenght(participantActivity.length)
      setNumberLine(2)
    }
  }, [participantName, participantActivity])

  return (
    <>
      <GlobalStyle />

      <Header />
      
      <h1>OLÁ</h1>
      <Apresentation />

      <PaperAndPen linelenght={lineLenght} numberline={numberLine} />

      <Input value={participantName} onChange={(e) => setParticipantName(e.target.value)} placeholder='Seu nome' />
      <Input value={participantActivity} onChange={(e) => setParticipantActivity(e.target.value)} placeholder='cantar, tocar, o que você faz?'/>
    </> 
  )
}
