import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  margin-top: 52px;
  width: 100%;
  height: 100%;
  padding-bottom: 32px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

const Content = styled.div`
  width: 100%;

  h2 {
    font-size: ${({ theme }) => theme.fontsSize.mediam}rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontsSize.mediam}rem;

    padding: 0 38px;
    margin-bottom: 24px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .title-and-description {
    padding: 24px 38px;

    p {
      color: ${({ theme }) => theme.colors.gray_100};
      font-size: ${({ theme }) => theme.fontsSize.regular}rem;
      line-height: 1.4;

      width: 50%;
      margin-top: 24px;
    }
  }

  img {
    width: 40%;
  }

  @media (max-width: 820px) {
    flex-direction: column-reverse;

    p {
      width: 100% !important;
    }

    img {
      width: 100%;
    }
  }
`

const Specifications = styled.div`
  display: flex;

  gap: 5%;
  padding: 0 38px;

  p {
    font-size: ${({ theme }) => theme.fontsSize.newSmall}rem;
    font-weight: 500;

    padding: 8px 0;

    strong {
      font-size: ${({ theme }) => theme.fontsSize.newSmall}rem;
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export default {
  Container,
  Specifications,
  Header,
  Content,
}
