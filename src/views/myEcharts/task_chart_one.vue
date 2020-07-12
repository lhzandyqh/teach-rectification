<template>
  <div class="app-container">
    <el-row>
      <div id="task_chart_one" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'TaskChartOne',
  data() {
    return {
      option: { title: {
        // text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['已完成', '进行中', '逾期未完成']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '已完成',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [20, 32, 10, 34, 60, 30, 20]
        },
        {
          name: '进行中',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [20, 12, 19, 34, 20, 30, 30]
        },
        {
          name: '逾期未完成',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [10, 2, 11, 14, 10, 30, 20]
        }
      ] }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('task_chart_one'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
