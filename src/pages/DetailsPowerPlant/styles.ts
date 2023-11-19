import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 0 4.375rem;

  @media (max-width: 520px) {
    padding: 0 1.375rem;
  }
`

const InfoPowerPlant = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 52px;
  width: 100%;
  height: 532px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

const ToggleChartButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  gap: 24px;

  margin-top: 64px;
  margin-bottom: 14px;

  button {
    display: flex;
    width: 43px;
    height: 43px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;

    background-color: ${({ theme }) => theme.colors.gray_600};
    color: ${({ theme }) => theme.colors.white};
  }

  .active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const ContainerChart = styled.div`
  margin-bottom: 24px;

  padding: 42px 0;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_700};

  div {
    div {
      margin: 0 auto;
    }
  }
`

const IrradiationContainer = styled.div`
  width: 100%;
`

const ProductionContainer = styled.div`
  width: 100%;
`

export default {
  ToggleChartButtons,
  IrradiationContainer,
  ProductionContainer,
  ContainerChart,
  InfoPowerPlant,
  Container,
}
