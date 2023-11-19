import styled from 'styled-components'

const Container = styled.main``

const Content = styled.main`
  padding: 3.2rem 4.375rem;

  .header-home {
    h1 {
      font-size: ${({ theme }) => theme.fontsSize.large}rem;

      margin-bottom: 2px;
    }

    p {
      color: ${({ theme }) => theme.colors.gray_100};
      font-size: ${({ theme }) => theme.fontsSize.regular}rem;
      font-weight: 500;
    }
  }

  @media (max-width: 520px) {
    padding: 3.2rem 1.375rem;
  }
`

const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 1.5rem;

  gap: 52px;
`

export default {
  CardsList,
  Container,
  Content,
}
