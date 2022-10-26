import styled from 'styled-components'

export const ProductListContainer = styled.div`
  margin-top: 2rem;
  height: 100vh;

  h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 3.375rem;
  }
`

export const CoffeeCard = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
`
