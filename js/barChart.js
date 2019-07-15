var yLabels = {
	  0 : '',
    1 : 'Basic',
    2 : 'Proficient',
    3 : 'Advanced',
    4 : 'Expert',
}
var data = [1.5, 2, 2.5, 3, 1.5, 2, 1.5, 1];

var bar = document.getElementById("barChart").getContext('2d');
var myChart = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels: ['C13', 'HTML & CSS', 'Java', 'MATLAB', 'Python', 'SQL', 'SystemVerilog', 'Swift'],
        datasets: [{
            data: data,
            backgroundColor: 'rgba(68, 108, 179, 1)',
        }]
    },
    options: {
        responsive: true,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
            xAxes: [{
              ticks: {
                    beginAtZero: true,
                    callback: function(value, _index, _values) {
                        return yLabels[value];
                    },
                    fontSize: 13,
										min: 0.5,
                    max: 4,
										autoSkip: false,
										minRotation: 0,
										maxRotation: 90,
                }
            }],
            yAxes: [{
              ticks: {
                    fontSize: 13,
										autoSkip: false,
										minRotation: 45,
										maxRotation: 45,
                }
            }]
        }
    }
});
