import React, { ChangeEvent } from 'react'

import * as Styled from './styles'

interface InputInterface {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
} 

const Input: React.FC<InputInterface> = ({ value, onChange, placeholder }) => {
  return <Styled.Input value={value} onChange={onChange} placeholder={placeholder}/>
} 

export default Input
