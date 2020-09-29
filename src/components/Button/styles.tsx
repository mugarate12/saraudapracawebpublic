import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Button = styled.button`
  height: 50px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: #333;

  border: 0 none;
  border-radius: 10%;

  :hover {
    opacity: 0.7;
    transition: 0.8s;
  }
`

export const ArrowIcon = styled(FaArrowRight)`
  font-size: 20px;

  color: #FFF;
`
