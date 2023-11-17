import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem 4.375rem;

  width: 100%;
  height: 72px;

  background: ${({ theme }) => theme.colors.gray_900};

  img {
    width: 150px;

    @media (max-width: 620px) {
      width: 80px;
    }

    @media (max-width: 380px) {
      width: 50px;
    }
  }

  nav {
    display: flex;

    ul {
      padding: 0 32px;

      li {
        display: flex;
        align-items: center;
        position: relative;

        &:hover {
          svg {
            color: ${({ theme }) => theme.colors.white};
          }

          a {
            color: ${({ theme }) => theme.colors.white};
          }
        }

        svg {
          margin-right: 6px;
          color: ${({ theme }) => theme.colors.gray_100};
        }

        a {
          color: ${({ theme }) => theme.colors.gray_100};
          font-size: ${({ theme }) => theme.fontsSize.small}rem;
          font-weight: 500;

          text-decoration: none;
        }

        &:after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.primary};
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        &:hover:after {
          transform: scaleX(1);
        }
      }

      .active:after {
        transform: scaleX(1);
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.colors.white};

      margin-left: 12px;
    }

    img {
      width: 32px;
      height: 32px;

      margin-left: 12px;
    }
  }
`

export default {
  Header,
}
