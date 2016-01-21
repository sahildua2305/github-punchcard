/* 
* @Author: sahildua2305
* @Date:   2016-01-21 12:05:05
* @Last Modified by:   sahildua2305
* @Last Modified time: 2016-01-21 12:21:19
*/


$(document).ready(function() {
    var new_data = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i][2] != 0) {
            new_data.push([data[i][1], data[i][0], data[i][2]]);
        }
    }

    $('#container').highcharts({
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',

            // Explicitly tell the width and height of a chart
            width: window.innerWidth * 0.95,
            height: null
        },

        legend: {
            enabled: false,
        },

        credits : {
            enabled : false,
        },

        title: {
            text: 'GitHub Punch card',
        },

        subtitle: {
            text: 'Based on your public commits',
        },

        xAxis: {
            minorGridLineDashStyle: 'dash',
            minorTickInterval: 1,
            minorTickWidth: 0,
            title: {
                text: null,
            },
            labels: {
                formatter: function() {
                    var val = this.value;
                    if (val == 0)
                        return "12a";
                    else if (val == 12)
                        return "12p";
                    else if (val > 12)
                        return (val - 12) + "p";
                    else
                        return val + "a";
                }
            },
        },

        yAxis: {
            reversed: true,
            categories: ['Sun', 'Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat"],
            startOnTick: false,
            title: {
                text: null,
            },
            endOnTick: false,
            maxPadding: 0.9,
            maxPadding: 0.9,
            lineWidth: 0,
        },
        
        tooltip: {
            formatter: function() {
                var val = this.point.z;
                return val + " commit" + ((val > 1) ? "s" : "");
            }
        },
        
        plotOptions: {
            bubble:{
                minSIze:'8%',
                maxSize:'12%'
            }
        },

        series: [{
            data: new_data,
            color: "grey",
        }]
    });
});
