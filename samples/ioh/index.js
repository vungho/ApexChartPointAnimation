const rippleConfig = {
  borderColor: '#f06',
  borderColorZoom: '#ffc1e3',
  insRadius: 2,
  insRadiusZoom: 10,
  insStrokeWidth: 2,
  outRadius: 5,
  outRadiusZoom: 15,
  outStrokeWidth: 2
};
const makerConfig =  {
  size: 3,
  fillColor: "#fff",
  strokeColor: "#f06",
  radius: 2

}
var options = {
  annotations: {
    yaxis: [
      {
        y: 8200,
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396"
          },
          text: "Y Axis Annotation"
        }
      }
    ],
    xaxis: [
      {
        // in a datetime series, the x value should be a timestamp, just like it is generated below
        x: new Date("11/17/2017").getTime(),
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "X Axis Anno Vertical"
        }
      },
      {
        x: new Date("03 Dec 2017").getTime(),
        borderColor: "#FEB019",
        label: {
          borderColor: "#FEB019",
          style: {
            color: "#fff",
            background: "#FEB019"
          },
          orientation: "horizontal",
          text: "X Axis Anno Horizonal"
        }
      }
    ],
    points: [
      {
        x: new Date("29 Nov 2017").getTime(),
        y: 8668.95,
        marker: makerConfig,
        label: {
          borderColor: "#FF4560",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#FF4560"
          },

          text: "Ngưỡng nguy hiểm"
        },
        ripple : rippleConfig
      },
      {
        x: new Date("22 Nov 2017").getTime(),
        y: 8514.30,
        marker: makerConfig,
        label: {
          borderColor: "#FF4560",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#FF4560"
          },

          text: "Bất thường"
        },
        ripple : rippleConfig
      }
    ]
  },
  chart: {
    height: 380,
    type: "line",
    id: "areachart-2",
    events: {
      markerClick: function(chartContext, seriesIndex, dataPointIndex, config) {
        //  console.log(chartContext);
        //  console.log(seriesIndex);
        //  console.log(dataPointIndex);
        // console.log(config);
      }
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  series: [
    {
      data: series.monthDataSeries1.prices
    }
  ],
  title: {
    text: "Line with Annotations",
    align: "left"
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime"
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
