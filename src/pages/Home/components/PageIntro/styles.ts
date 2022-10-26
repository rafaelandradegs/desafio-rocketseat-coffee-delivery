import styled from 'styled-components'
import imageBlur from '../../../../assets/image-blur.svg'

export const PageIntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url(${imageBlur});
  margin-left: -10rem;
  align-items: center;
  padding: 0 10rem;
  height: 34rem;
  width: 90rem;

  .boxText {
    width: 36.75rem;
  }

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .subTitleSlogan {
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 130%;
    font-size: 1.25rem;
  }

  section {
    display: flex;
    justify-content: flex-end;

    img {
      width: 30rem;
      height: 23rem;
    }
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
    color: ${({ theme }) => theme['base-text']};
    line-height: 130%;
    font-size: 1rem;
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
