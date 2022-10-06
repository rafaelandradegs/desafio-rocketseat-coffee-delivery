import styled from 'styled-components'

export const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  height: 6.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.875rem;
  }
  span {
    background: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-dark']};
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    gap: 0.25rem;
  }
`

export const CartBase = styled.button`
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  justify-content: center;
  border-radius: 6px;
  position: relative;
  padding: 0.5rem;
  border: none;

  span {
    background: ${({ theme }) => theme['yellow-dark']};
    border-radius: 50%;
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    right: -0.52rem;
    color: white;
    top: -0.5rem;
  }
`
