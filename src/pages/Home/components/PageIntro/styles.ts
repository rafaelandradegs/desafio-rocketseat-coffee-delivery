import styled from 'styled-components'

export const PageIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  margin-top: 5.75rem;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 130%;
    size: 1.25rem;
  }
`
export const PageItems = styled.div`
  display: flex;
  margin-top: 4.125rem;
  gap: 2.5rem;

  p:first-child {
    margin-bottom: 1.6rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const PageIconBase = styled.span`
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  color: white;
`

export const IconCart = styled(PageIconBase)`
  background-color: ${({ theme }) => theme['yellow-dark']};
`
export const IconTimer = styled(PageIconBase)`
  background-color: ${({ theme }) => theme['yellow-base']};
`
export const IconPackage = styled(PageIconBase)`
  background-color: ${({ theme }) => theme['base-text']};
`
export const IconCoffee = styled(PageIconBase)`
  background-color: ${({ theme }) => theme['purple-base']};
`
