import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  height: 100px;
  width: 100px;

  /* column-rule-color: blueviolet */
  --cor-neon: black;

  animation: neon 2s alternate infinite ease-in-out;

  @keyframes neon {
    from {
      filter: drop-shadow(0 0 0 var(--cor-neon));
    }
    to {
      filter: drop-shadow(0 0 30px var(--cor-neon));
    }
  }
`
