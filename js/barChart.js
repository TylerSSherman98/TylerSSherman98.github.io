var yLabels = {
	  0 : '',
    1 : 'Basic',
    2 : 'Novice',
    3 : 'Intermediate',
    4 : 'Advanced',
    5 : 'Expert',
}
var data = [2.5, 3, 3.5, 4, 2.5, 3, 2.5, 1];

var bar = document.getElementById("barChart").getContext('2d');
var myChart = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels: ['C3', 'HTML & CSS', 'Java', 'MATLAB', 'Python', 'SQL', 'SystemVerilog', 'Swift'],
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
                    fontSize: 14,
										min: 0,
                    max: 5,
										autoSkip: false,
										minRotation: 90,
										maxRotation: 90,
                }
            }],
            yAxes: [{
              ticks: {
                    fontSize: 14,
										autoSkip: false,
										minRotation: 45,
										maxRotation: 45,
                }
            }]
        }
    }
});
