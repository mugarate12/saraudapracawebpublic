import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Button = styled.button`
  height: 30px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: #333;

  border: 0 none;
  border-radius: 15%;
`

export const ArrowIcon = styled(FaArrowRight)`
  font-size: 12px;

  color: #FFF;
`
