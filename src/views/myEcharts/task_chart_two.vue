<template>
  <div class="app-container">
    <el-row>
      <div id="task_chart_two" style="height: 250px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'TaskChartTwo',
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [20, 32, 12, 14, 12, 3, 28],
          type: 'line'
        }]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('task_chart_two'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
