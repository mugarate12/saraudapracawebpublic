import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'

export const FooterContainer = styled.footer`
  height: 30px;
  width: 100%;

  margin-top: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #333;
`

export const Text = styled.p`
  font-size: 14px;
  font-size: 0.875rem;

  margin-left: 15px;

  color: #FFF;
`

export const HeartIcon = styled(FaHeart)`
  font-size: 12px;

  margin-left: 5px;

  color: red;
`
