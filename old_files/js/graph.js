// Data retrieved from http://vikjavev.no/ver/index.php?spenn=2d&sluttid=16.06.2015.

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Course Grades'
    },
    subtitle: {
        text: 'Summer 2017 Quarter'
    },
    xAxis: {
        type: 'linear',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Grade'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{
            from: 0,
            to: 16.74,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'F',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 16.75,
            to: 24.99,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'D-',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 25,
            to: 33.24,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'D',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 33.25,
            to: 41.74,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'D+',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 41.75,
            to: 49.99,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'C-',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 50,
            to: 58.24,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'C',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 58.25,
            to: 66.74,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'C+',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 66.75,
            to: 74.99,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'B-',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 75,
            to: 83.24,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'B',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 83.25,
            to: 91.74,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'B+',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 91.75,
            to: 99.99,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'A-',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: 100,
            to: 110.99,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'A',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
        }
    },
    series: [{
        name: 'User Progress',
        data: [1, 80, 99, 75, 88, 100, 110]
    }, {
        name: 'Overall Students\' Averages',
        data: [5, 80, 90, 80, 90, 88, 101]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});