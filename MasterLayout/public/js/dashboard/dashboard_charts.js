var line_chart = c3.generate({
    bindto: '#chart',
    data: {
        x:'x',
        columns: [
            ['x', '2013-01-01', '2013-01-04', '2013-01-07', '2013-01-10', '2013-01-13', '2013-01-16', '2013-01-19', '2013-01-22',
                '2013-01-25', '2013-01-28', '2013-01-31'],
            ['Selected range', 30000, 10125, 12425, 40321, 15543, 2523, 30654, 20123, 12102, 3666, 1500, 4012],
            ['Previous period', 20489, 30354, 15156, 30123, 15987, 32452]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                count: 6,
                format: 'May %d'
            }
        },
        y : {
            tick: {
                format: function (d) { return d/1000 + "k"; }
            }
        }
    },
    grid: {
        y: {
            lines: [
                {value: 0},
                {value: 10000},
                {value: 20000},
                {value: 30000},
                {value: 40000}
            ]
        }
    },
    color: {
        pattern: ['#00C3B0', '#7E7874']
    },
    zoom: {
        enabled: true
    }

});



var cols = [
    ['data1', 1850],
    ['data2', 1850],
    ['data3', 1120],
    ['data4', 1120],
];
cols[0][0] = "SEARCH: " + cols[0][1];
cols[1][0] = "SEARCH2: " + cols[1][1];
cols[2][0] = "REFERRALS: " + cols[2][1];
cols[3][0] = "SOCIAL: " + cols[3][1];


var sources = c3.generate({
    bindto: '#chart_sources',
    size: {
        height: 265
    },
    data: {
        // iris data from R
        columns: cols,
        type : 'donut'
    },
    donut: {
        width: 30,
        label: {
            show: false
        }
    },
    color: {
        pattern: ['#00C3B0', '#7E7874','#FA5A28','#C2C2C2']
    }
});

var browsers = c3.generate({
    bindto: '#chart_browsers',
    size: {
        height: 265
    },
    data: {
        // iris data from R
        columns: [
            ['SEARCH', 1850],
            ['SEARCH2', 1850],
            ['REFERRALS', 1120],
            ['SOCIAL', 1120],
        ],
        type : 'donut'
    },
    donut: {
        width: 30,
        label: {
            show: false
        }
    },
    color: {
        pattern: ['#00C3B0', '#7E7874','#FA5A28','#C2C2C2']
    }
});

var os = c3.generate({
    bindto: '#chart_os',
    size: {
        height: 265
    },
    data: {
        // iris data from R
        columns: [
            ['SEARCH', 1850],
            ['SEARCH2', 1850],
            ['REFERRALS', 1120],
            ['SOCIAL', 1120],
        ],
        type : 'donut'
    },
    donut: {
        width: 30,
        label: {
            show: false
        }
    },
    color: {
        pattern: ['#00C3B0', '#7E7874','#FA5A28','#C2C2C2']
    }
});

var sourcec_2 = c3.generate({
    bindto: '#chart_sources_2',
    size: {
        height: 265
    },
    data: {
        // iris data from R
        columns: [
            ['SEARCH', 1850],
            ['SEARCH2', 1850],
            ['REFERRALS', 1120],
            ['SOCIAL', 1120],
        ],
        type : 'donut'
    },
    donut: {
        width: 30,
        label: {
            show: false
        }
    },
    color: {
        pattern: ['#00C3B0', '#7E7874','#FA5A28','#C2C2C2']
    }
});

var sourcec_2 = c3.generate({
    bindto: '#chart_sources_3',
    size: {
        height: 265
    },
    data: {
        // iris data from R
        columns: cols,
        type : 'donut'
    },
    donut: {
        width: 30,
        label: {
            show: false
        }
    },
    color: {
        pattern: ['#00C3B0', '#7E7874','#FA5A28','#C2C2C2']
    }
});
