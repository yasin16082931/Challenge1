
function lineChart(){
var ctx = document.getElementById('fuel').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    lineTension: 0,

    // The data for our dataset
    data: {
        labels: ['Launch', 'inSpace', 'Landing'],

        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#a65e2e',
            borderColor: '#b2b2b2',
            data: [100, 30, 10]
        }]
    },

    options: {
      scales: {
          yAxes: [{
              ticks: {
                  fontSize: 20,
                  padding: 10
              }
          }],
          xAxes: [{
              ticks: {
                  fontSize: 18,
                  padding: 20,
                  fontStyle: "bold"
              },

          }]
      },
      elements:{
      line:{
        tension: 0.8
      }
    },
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
}
  });
}

function pieChart(){
  var ctx = document.getElementById('supply').getContext('2d');
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {

      datasets: [{
        backgroundColor: ['#bec2cb', '#256d7b', '#485E28'],
        data: [40, 25, 35]
    }],


    labels: [
        'INVENTARIS',
        'WATER',
        'FOOD'
    ]
  },
  options:{
    legend:{
      labels:{
        fontSize: 20
      }

    }
  }

});
}

function radarChart(){
  var ctx = document.getElementById('scheme').getContext('2d');
  var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['RUNNING', 'RESTING', 'EATING', 'CYCLING', "WORK(prep)"],
        datasets: [{
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          data: [16, 30, 20, 20, 25]

   },
 {
   fill: true,
   backgroundColor: "rgba(255,99,132,0.0)",
   borderColor: "rgba(255,99,132,0)",
   data: [5, 1, 2, 3, 4]
 },
{
  fill: true,
  backgroundColor: "rgba(255,99,132,0)",
  borderColor: "rgba(255,99,132,0)",
  data: [10, 20, 40, 15, 30]
}
]
},
options: {
  scale: {
    pointLabels: {
      fontSize: 15

}
},

legend: {
  display: false
}
}
});
}


lineChart();
pieChart();
radarChart();
