export const generateLineChartOptions = (
  categoriesChart: unknown,
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
