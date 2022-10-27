import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  background-color: ${({ theme }) => theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  gap: 1rem;

  img {
    width: 110px;
    height: 110px;
    margin-top: -20px;
  }

  .additional {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1.35rem;
    gap: 4px;
  }

  .additional p {
    font-size: 10px;
    line-height: 130%;
    color: ${({ theme }) => theme['yellow-dark']};
    background: ${({ theme }) => theme['yellow-light']};
    border-radius: 100px;
    font-weight: bold;
    padding: 4px 8px;
    line-height: 130%;
    text-transform: uppercase;
  }

  .coffeeFlavor {
    display: flex;
    text-align: center;
    align-items: flex-end;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  .description {
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    padding: 0 1.25rem;

    color: ${({ theme }) => theme['base-label']};
  }

  .footerCard {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 29px;
    margin-top: 1rem;
  }

  .footerCard span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
    text-align: right;
  }

  .footerCard span strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
    text-align: right;
  }

  .itemAndCart {
    display: flex;
    gap: 8px;
  }

  .numberItems {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme['base-button']};
    width: 72px;
    border-radius: 6px;
    padding: 0.5rem;
    gap: 4px;

    span {
      color: ${({ theme }) => theme['base-title']};
    }

    button {
      display: flex;
      align-items: center;
      border-style: none;
      background: transparent;
      color: ${({ theme }) => theme['purple-base']};
    }
  }
  .cart {
    width: 2.375rem;
    height: 2.375rem;
    background: ${({ theme }) => theme['purple-dark']};
    border-style: none;
    border-radius: 6px;
    color: ${({ theme }) => theme['base-card']};
  }
`
