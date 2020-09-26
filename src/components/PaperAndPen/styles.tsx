import styled from 'styled-components'

export const ContainerG = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  padding-top: 60px;
`

export const Container = styled.div`
  position: absolute;
`

// desenhar o papel
export const paperContainer = styled.div`
  width: 100px;
  padding-bottom: 10px;

  transform: rotate(-10deg);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  background-color: #E8C374;
`

export const paperLine = styled.div`
  height: 10px;
  width: 90%;
  background-color: #E8C374;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #333333;
`

export const PaperLineContent = styled.p`
  font-size: 10px;
`

//desenhar a caneta
// a cada 10px no LEFT coloco -2 no top
// E mais 12px pra descer uma linha
export const penContainer  = styled.div`
  position: absolute;
  /* top: ${props => `-60`}px;
  left: 40px; */

  transition: 0.3s;

  width: 20px;
  /* transform: rotate(60deg); */
`

export const penCable = styled.div`
  height: 80px;
  width: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background-color: #A1F280;
`

export const penCableCenter = styled.div`
  height: 100%;
  width: 40%;

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  background-color: #7FDB83;
`

export const penBeforeTheTip = styled.div`
  border-top: 20px solid #949396;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`
