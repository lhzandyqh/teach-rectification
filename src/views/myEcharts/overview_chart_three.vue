<template>
  <div class="app-container">
    <el-row>
      <div id="overview_chart_three" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OverviewChartTwo',
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['指标点正常', '指标点预警', '预警指标点诊改完成']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '个',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              // formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '个',
            min: 0,
            max: 10,
            interval: 1,
            axisLabel: {
              // formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '指标点正常',
            type: 'bar',
            data: [214, 214, 214, 210, 213, 210, 212, 214, 214, 210, 212, 214]
          },
          {
            name: '指标点预警',
            type: 'bar',
            data: [0, 0, 0, 4, 1, 4, 2, 0, 0, 4, 2, 4]
          },
          {
            name: '预警指标点诊改完成',
            type: 'line',
            yAxisIndex: 1,
            data: [0, 0, 0, 2, 3, 0, 3, 4, 0, 1, 0, 2]
          }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('overview_chart_three'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
