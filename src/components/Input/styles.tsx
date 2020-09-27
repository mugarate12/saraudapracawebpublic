import styled from 'styled-components'

export const Input = styled.input`
  height: 15px;
  width: 80%;

  margin-bottom: 10px;

  border: 0 none;

  border-bottom: 1px solid #333;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;

    border-bottom: 1px solid blueviolet;
  }
`