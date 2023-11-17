import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  height: 540px;

  background-color: ${({ theme }) => theme.colors.gray_700};
  border-radius: 5px;
`

const BackgroundHeader = styled.div`
  width: 100%;
  height: 50%;

  background-image: url('https://i.imgur.com/8BPlNq0.jpeg');
  background-size: cover;
  background-position: center;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 24px;

  @media (max-width: 420px) {
    padding: 12px;
  }

  .name-and-location {
    p {
      color: ${({ theme }) => theme.colors.gray_100};
      font-size: ${({ theme }) => theme.fontsSize.newSmall}rem;
      text-transform: uppercase;

      margin-bottom: 6px;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontsSize.newSmall}rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .state {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 22px;

      border-radius: 22px;
      background: #ffd6b2;

      margin-top: 6px;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 12px;
      font-weight: 500;
    }
  }

  .longitude-and-latitude {
    p {
      font-size: ${({ theme }) => theme.fontsSize.small};
      font-weight: 500;
    }

    strong {
      color: ${({ theme }) => theme.colors.gray_100};
      font-size: ${({ theme }) => theme.fontsSize.small};
      font-weight: 400;
    }
  }
`

const InfoCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;

  @media (max-width: 420px) {
    padding: 12px;
  }

  p {
    display: flex;
    align-items: center;

    margin-bottom: 12px;

    font-size: ${({ theme }) => theme.fontsSize.small};

    svg {
      margin-right: 4px;
    }
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsSize.small};
    font-weight: 500;
  }
`

export default {
  BackgroundHeader,
  InfoCards,
  Container,
  Footer,
  Header,
}
