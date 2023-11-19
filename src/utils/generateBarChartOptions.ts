export const generateBarChartOptions = (
  categoriesChart: unknown,
  seriesData: unknown,
  titleText: string,
) => ({
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
