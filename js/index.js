var options = {
  series: [
    {
      name: ' استخدام ',
      data: [11, 32, 45, 32, 34, 52, 41, 40, 28, 51, 42, 109],
    },
  ],
  chart: {
    height: 205,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
  markers: {
    size: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
  },

};

var chart = new ApexCharts(document.querySelector("#chartdiv"), options);
chart.render();
