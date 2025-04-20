const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [900,450,200,750,50,450,50,270,600,490],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Dataset 2',
                data: [600, 50,650,900,760,490,700,500,280,480],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                min:0,
                max:9,
            },
            y: {
                        min:0,
                        max:1000,
                        ticks: {
                            stepSize: 250
                        }
                
            }
        }
    }
    

});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [900,450,200,750,50,450,50,270,600,490],
                borderColor: 'rgba(100, 100, 50, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Dataset 2',
                data: [600, 50,650,900,760,490,700,500,280,480],
                borderColor: 'rgba(80, 200, 250, 1)',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                min:0,
                max:9,
            },
            y: {
                        min:0,
                        max:1000,
                        ticks: {
                            stepSize: 250
                        }
                
            }
        }
    }
    

});