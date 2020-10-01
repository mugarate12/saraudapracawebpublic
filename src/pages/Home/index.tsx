import React, { useState, ChangeEvent } from 'react'

import GlobalStyle from './../../styles/global'
import * as Styled from './styles'

import Header from './../../components/Header/index'
import Apresentation from './../../containers/Apresentation/index'
import About from './../../containers/About/index'
import Contact from './../../containers/Contact/index'
import CommumText from './../../components/CommumText/index'
import PaperAndPen from './../../components/PaperAndPen/index'
import Input from './../../components/Input/index'
import Button from './../../components/Button/index'
import Footer from './../../components/Footer/index'

import api from './../../config/axios'

export default function Home() {
  const [participantName, setParticipantName] = useState<string>('')
  const [participantActivity, setParticipantActivity] = useState<string>('')
  const [participantEmail, setParticipantEmail] = useState<string>('')
  const [participantPhone, setParticipantPhone] = useState<string>('')
  const [participantInstagram, setParticipantInstagram] = useState<string>('')

  // estados pra manipulação da "animação" do papel e caneta
  const [lineLenght, setLineLenght] = useState<number>(0)
  const [numberLine, setNumberLine] = useState<number>(1)

  function handleParticipantContent(e: ChangeEvent<HTMLInputElement>, state: string, setState: React.Dispatch<React.SetStateAction<string>>, numberLine: number) {
    setNumberLine(numberLine)
    setState(e.target.value)
    setLineLenght(state.length)
  }

  async function handleButton() {
    const filledFields = !!participantName && !!participantActivity && !!participantEmail && !!participantPhone && !!participantInstagram

    if (filledFields) {
      await api.post('/participants', {
        name: participantName,
        activity: participantActivity,
        email: participantEmail,
        num_phone: participantPhone,
        instagram: participantInstagram
      })
        .then(response => {
          alert('verifique seu email, e boa sorte! <3')
        })
        .catch(error => {
          alert('Não há eventos disponiveis pra cadastrar, por favor, entre em contato conosco e nos acompanhe pra saber quando haverá um novo evento. <3')
        })

    } else {
      alert('preencha todos os campos!')
    }
  }

  return (
    <>
      <GlobalStyle />

      <Header />
      
      <Apresentation />

      <About />

      <Contact />

      <Styled.PaperAndPenContainer>
        <CommumText>Preencha os campos com os dados pedidos e confira nessa ficha logo abaixo como está ficando. Vamos avaliar com todo carinho, ta?</CommumText>
        <PaperAndPen linelenght={lineLenght} numberline={numberLine} linesStates={[participantName, participantActivity, participantEmail, participantPhone, participantInstagram]} />
      </Styled.PaperAndPenContainer>

      <Styled.FormContainer>
        <Input value={participantName} onChange={(e) => handleParticipantContent(e, participantName, setParticipantName, 1)} placeholder='Qual seu nome?' />
        <Input value={participantActivity} onChange={(e) => handleParticipantContent(e, participantActivity, setParticipantActivity, 2)} placeholder='cantar, tocar, o que você quer apresentar?'/>
        <Input value={participantEmail} onChange={(e) => handleParticipantContent(e, participantEmail, setParticipantEmail, 3)} placeholder='Qual seu email?'/>
        <Input value={participantPhone} onChange={(e) => handleParticipantContent(e, participantPhone, setParticipantPhone, 4)} placeholder='Me passa teu whatsapp?'/>
        <Input value={participantInstagram} onChange={(e) => handleParticipantContent(e, participantInstagram, setParticipantInstagram, 5)} placeholder='E teu @ no instagram, conta pra mim?'/>
      </Styled.FormContainer>
      
      <Styled.ButtonContainer>
        <Button onClick={handleButton} />
      </Styled.ButtonContainer>

      <Footer />
    </> 
  )
}
