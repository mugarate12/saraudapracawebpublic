import React from 'react'

import * as Styled from './styles'

interface InputInterface {
  value?: string;
  onChange: () => void;
} 

const Input: React.FC<InputInterface> = ({ value, onChange }) => {
  return <Styled.Input value={value} onChange={() => onChange()} />
} 

export default Input
