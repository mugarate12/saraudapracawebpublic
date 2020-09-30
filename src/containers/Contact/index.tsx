import React from 'react'

import * as Styled from './styles'

export default function Contact() {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Text>Você pode entrar em contato com a gente pra conversar ou nos seguir e se manter atualizado sobre os próximos eventos, o que estamos fazendo.</Styled.Text>
      </Styled.TextContainer>

      <Styled.IconsContainer>
          <Styled.InstagramIcon onClick={() => window.open('https://www.instagram.com/saraudapraca/')} />
          <Styled.EmailIcon onClick={() => window.open('mailto:saraudapraca.poesia@gmail.com')} />
      </Styled.IconsContainer>
    </Styled.Container>
  )
}
