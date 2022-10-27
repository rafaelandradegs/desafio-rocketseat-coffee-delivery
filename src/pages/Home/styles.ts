import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 3.375rem;
    margin-top: 2rem;
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`
