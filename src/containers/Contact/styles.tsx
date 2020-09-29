import styled from 'styled-components'
import {
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa'

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  padding-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #595959;
`

export const TextContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`

export const Text = styled.p`
  font-size: 14px;
  font-size: 0.875rem;

  margin-bottom: 6px;

  color: #FFF;
`

export const IconsContainer = styled.div`
  width: 80%;

  margin-top: 15px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const InstagramIcon = styled(FaInstagram)`
  font-size: 36px;

  color: #FFF;

  cursor: pointer;

  :hover {
    opacity: 0.8;
    transition: 0.8s;
  }
`

export const EmailIcon = styled(FaEnvelope)`
  font-size: 36px;

  margin-left: 15px;

  color: #FFF;

  cursor: pointer;

  :hover {
    opacity: 0.8;
    transition: 0.8s;
  }
`
