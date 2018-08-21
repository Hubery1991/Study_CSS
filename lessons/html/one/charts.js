var myChart = echarts.init(document.getElementById('mycharts'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '惠拼营销统计'
    },
    tooltip: {
        trigger: 'item',
        position: 'top',
        formatter: function(params) {
            console.log(params);
            if (params.seriesName === '权益订单') {
                return params.marker+params.seriesName+'<br/>'+'时间：'+params.name+'<br/>'+'订单总数：'+params.data;
            } else {
                return params.marker+params.seriesName+'<br/>'+'时间：'+params.name+'<br/>'+'订单总数：'+params.data + '<br/>'+'总积分：'+'19988';
            }
        }
    },
    legend: {
        data:[{
            name: '积分订单',
            icon: 'circle',
            textStyle: {
                color: 'red'
            }
        },{
            name: '权益订单',
            icon: 'circle',
            textStyle: {
                color: 'blue'
            }}]
    },
    xAxis: {
        name: '日期',
        nameLocation: 'end',
        position: 'bottom',
        data:[{
            value: '7月15日',
            textStyle: {
                fontSize: 20,
                color: 'yellow'
            }
        },"7月16日","7月17日","7月18日","7月19日","7月20日"]
    },
    yAxis: {
        name: '订单销量',
        nameLocation: 'end'
    },
    series: [{
        name: '积分订单',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20],
        smooth: true,
        symbol: 'emptyCircle',
        itemStyle: {
            normal: {
                color: 'red'
            }
        }
    },{
        name: '权益订单',
        type: 'line',
        data: [3,20,100,10,20,3],
        smooth: true,
        symbol: 'emptyCircle',
        itemStyle: {
            normal: {
                color: 'blue'
            }
        }
    }]
};

myChart.setOption(option);


