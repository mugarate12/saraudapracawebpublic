import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  padding-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #FAFAFA;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const TextContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`

export const Text = styled.p`
  font-size: 14px;
  font-size: 0.875rem;

  margin-bottom: 6px;

  color: #333;
`

export const ImgContainer = styled.div`
  margin-top: 10px;

  @media (min-width: 600px) {
    margin-top: 0px;
    margin-right: 10%;
  }
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
`
