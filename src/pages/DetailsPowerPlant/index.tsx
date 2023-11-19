import { useState } from 'react'
import { ChartBar, ChartLine, ChartLineUp } from 'phosphor-react'
import Chart from 'react-apexcharts'
import { BoxDetailsPowerPlant } from '../../components/BoxDetailsPowerPlant'
import { useParams } from 'react-router-dom'

import { generateAreaChartOptions } from '../../utils/generateAreaChartOptions'
import { generateBarChartOptions } from '../../utils/generateBarChartOptions'
import { generateLineChartOptions } from '../../utils/generateLineChartOptions'

import MOCKS_DATA from '../../mocks/mock.json'
import Styles from './styles'

export function DetailsPowerPlant() {
  const [chartIrradiationType, setChartIrradiationType] = useState('line')
  const [chartProductionType, setChartProductionType] = useState('line')

  const powerPlants = MOCKS_DATA[0].usinasSolares

  const { id } = useParams()

  const [filteredPowerPlant] = powerPlants.filter(
    (powerPlant) => powerPlant.id === Number(id),
  )

  const categoriesChart = filteredPowerPlant.irradiacao.map(
    (powerPlant) => powerPlant.mes,
  )

  const seriesIrradiationData = filteredPowerPlant.irradiacao.map(
    (powerPlant) => powerPlant.valor,
  )

  const seriesProductionData = filteredPowerPlant.producao.map(
    (powerPlant) => powerPlant.valor,
  )

  const lineChartIrradiation = generateLineChartOptions(
    categoriesChart,
    seriesIrradiationData,
    'Irradiação',
  )

  const lineChartProduction = generateLineChartOptions(
    categoriesChart,
    seriesProductionData,
    'Produção',
  )

  const barChartIrradiation = generateBarChartOptions(
    categoriesChart,
    seriesIrradiationData,
    'Irradiação',
  )

  const barChartProduction = generateBarChartOptions(
    categoriesChart,
    seriesProductionData,
    'Produção',
  )

  const areaChartIrradiation = generateAreaChartOptions(
    categoriesChart,
    seriesIrradiationData,
    'Irradiação',
  )

  const areaChartProduction = generateAreaChartOptions(
    categoriesChart,
    seriesProductionData,
    'Produção',
  )

  return (
    <Styles.Container>
      <BoxDetailsPowerPlant />

      <Styles.IrradiationContainer>
        <Styles.ToggleChartButtons>
          <button
            className={chartIrradiationType === 'area' ? 'active' : ''}
            onClick={() => setChartIrradiationType('area')}
          >
            <ChartLineUp size={32} />
          </button>

          <button
            className={chartIrradiationType === 'bar' ? 'active' : ''}
            onClick={() => setChartIrradiationType('bar')}
          >
            <ChartBar size={32} />
          </button>

          <button
            className={chartIrradiationType === 'line' ? 'active' : ''}
            onClick={() => setChartIrradiationType('line')}
          >
            <ChartLine size={32} />
          </button>
        </Styles.ToggleChartButtons>

        <Styles.ContainerChart>
          {chartIrradiationType === 'bar' ? (
            <Chart
              options={barChartIrradiation.options as never}
              series={barChartIrradiation.series as never}
              type="bar"
              width="90%"
              height={460}
            />
          ) : chartIrradiationType === 'line' ? (
            <Chart
              options={lineChartIrradiation.options as never}
              series={lineChartIrradiation.series as never}
              type="line"
              width="90%"
              height={460}
            />
          ) : (
            <Chart
              options={areaChartIrradiation.options as never}
              series={areaChartIrradiation.series as never}
              type="area"
              width="90%"
              height={460}
            />
          )}
        </Styles.ContainerChart>
      </Styles.IrradiationContainer>

      <Styles.ProductionContainer>
        <Styles.ToggleChartButtons>
          <button
            className={chartProductionType === 'area' ? 'active' : ''}
            onClick={() => setChartProductionType('area')}
          >
            <ChartLineUp size={32} />
          </button>

          <button
            className={chartProductionType === 'bar' ? 'active' : ''}
            onClick={() => setChartProductionType('bar')}
          >
            <ChartBar size={32} />
          </button>

          <button
            className={chartProductionType === 'line' ? 'active' : ''}
            onClick={() => setChartProductionType('line')}
          >
            <ChartLine size={32} />
          </button>
        </Styles.ToggleChartButtons>

        <Styles.ContainerChart>
          {chartProductionType === 'bar' ? (
            <Chart
              options={barChartProduction.options as never}
              series={barChartProduction.series as never}
              type="bar"
              width="90%"
              height={460}
            />
          ) : chartProductionType === 'line' ? (
            <Chart
              options={lineChartProduction.options as never}
              series={lineChartProduction.series as never}
              type="line"
              width="90%"
              height={460}
            />
          ) : (
            <Chart
              options={areaChartProduction.options as never}
              series={areaChartProduction.series as never}
              type="area"
              width="90%"
              height={460}
            />
          )}
        </Styles.ContainerChart>
      </Styles.ProductionContainer>
    </Styles.Container>
  )
}
