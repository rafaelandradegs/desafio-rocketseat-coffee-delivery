import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme['base-background']};
  padding: 2rem 10rem;
  margin: 0 auto;
  width: 90rem;
`
