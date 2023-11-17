import { ChartBar, ChartLine, ChartLineUp } from 'phosphor-react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
import { useParams } from 'react-router-dom'

import MOCKS_DATA from '../../mocks/mock.json'
import Styles from './styles'

export function DetailsPowerPlant() {
  const [chartIrradiationType, setChartIrradiationType] = useState('line')
  const [chartProductionType, setChartProductionType] = useState('line')

  const powerPlants = MOCKS_DATA[0].usinasSolares

  const { id } = useParams()

  const filteredPowerPlant = powerPlants.filter(
    (powerPlant) => powerPlant.id === Number(id),
  )

  const categoriesChart = filteredPowerPlant[0].irradiacao.map(
    (powerPlant) => powerPlant.mes,
  )

  const seriesIrradiationData = filteredPowerPlant[0].irradiacao.map(
    (powerPlant) => powerPlant.valor,
  )

  const seriesProductionData = filteredPowerPlant[0].producao.map(
    (powerPlant) => powerPlant.valor,
  )

  const generateLineChartOptions = (
    seriesData: unknown,
    titleText: string,
  ) => ({
    options: {
      chart: {
        id: 'line-chart',
        type: 'line',
        stacked: true,
        toolbar: {
          show: true,
          tools: {
            download: true,
          },
        },
        zoom: {
          enabled: false,
        },
        background: 'transparent',
      },
      colors: ['#FF7F0E', '#FFAE66'],
      xaxis: {
        categories: categoriesChart,
      },
      title: {
        text: titleText,
        align: 'left',
        margin: 10,
        offsetX: 10,
        offsetY: -10,
        floating: false,
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: '#FFFFFF',
        },
      },
      grid: {
        borderColor: '#FFFFFF33',
        strokeDashArray: [5],
      },
      labels: {
        style: {
          fontFamily: 'Roboto',
          colors: [
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
          ],
        },
      },
      axisBorder: {
        color: '#FFFFFF66',
      },
      axisTicks: {
        color: '#FFFFFF66',
      },
      legend: {
        position: 'bottom',
      },
      theme: {
        mode: 'dark',
      },
      fill: {
        opacity: 1,
      },
    },
    series: [
      {
        name: 'Irradiação',
        data: seriesData,
      },
    ],
  })

  const generateBarChartOptions = (seriesData: unknown, titleText: string) => ({
    options: {
      chart: {
        id: 'bar-chart',
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          tools: {
            download: true,
          },
        },
        zoom: {
          enabled: false,
        },
        background: 'transparent',
      },
      colors: ['#FF7F0E', '#FFAE66'],
      xaxis: {
        categories: categoriesChart,
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value.toLocaleString() + ' Wh/m²'
          },
        },
      },
      title: {
        text: titleText,
        align: 'left',
        margin: 10,
        offsetX: 10,
        offsetY: -10,
        floating: false,
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: '#FFFFFF',
        },
      },
      grid: {
        borderColor: '#FFFFFF33',
        strokeDashArray: [5],
      },
      labels: {
        style: {
          fontFamily: 'Roboto',
          colors: [
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
          ],
        },
      },
      axisBorder: {
        color: '#FFFFFF66',
      },
      axisTicks: {
        color: '#FFFFFF66',
      },
      legend: {
        position: 'bottom',
      },
      theme: {
        mode: 'dark',
      },
      fill: {
        opacity: 1,
      },
    },
    series: [
      {
        name: 'Irradiação',
        data: seriesData,
      },
    ],
  })

  const generateAreaChartOptions = (
    seriesData: unknown,
    titleText: string,
  ) => ({
    options: {
      chart: {
        id: 'area-chart',
        type: 'area',
        stacked: true,
        toolbar: {
          show: true,
          tools: {
            download: true,
          },
        },
        zoom: {
          enabled: false,
        },
        background: 'transparent',
      },
      colors: ['#FF7F0E', '#FFAE66'],
      xaxis: {
        categories: categoriesChart,
      },
      title: {
        text: titleText,
        align: 'left',
        margin: 10,
        offsetX: 10,
        offsetY: -10,
        floating: false,
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: '#FFFFFF',
        },
      },
      grid: {
        borderColor: '#FFFFFF33',
        strokeDashArray: [5],
      },
      labels: {
        style: {
          fontFamily: 'Roboto',
          colors: [
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
            '#FFFFFF99',
          ],
        },
      },
      axisBorder: {
        color: '#FFFFFF66',
      },
      axisTicks: {
        color: '#FFFFFF66',
      },
      legend: {
        position: 'bottom',
      },
      theme: {
        mode: 'dark',
      },
      fill: {
        opacity: 1,
      },
    },
    series: [
      {
        name: 'Irradiação',
        data: seriesData,
      },
    ],
  })

  const lineChartIrradiation = generateLineChartOptions(
    seriesIrradiationData,
    'Irradiação',
  )

  const lineChartProduction = generateLineChartOptions(
    seriesProductionData,
    'Produção',
  )

  const barChartIrradiation = generateBarChartOptions(
    seriesIrradiationData,
    'Irradiação',
  )

  const barChartProduction = generateBarChartOptions(
    seriesProductionData,
    'Produção',
  )

  const areaChartIrradiation = generateAreaChartOptions(
    seriesIrradiationData,
    'Irradiação',
  )

  const areaChartProduction = generateAreaChartOptions(
    seriesProductionData,
    'Produção',
  )

  return (
    <Styles.Container>
      <Styles.InfoPowerPlant>
        <h1>ID da planta de energia: {id}</h1>
      </Styles.InfoPowerPlant>

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
