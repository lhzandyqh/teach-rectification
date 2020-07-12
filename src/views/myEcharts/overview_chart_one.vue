<template>
  <div class="app-container">
    <el-row>
      <div id="overview_chart_one" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OverviewChartOne',
  data() {
    return {
      option: {
        title: {
          text: '规划对比分析'
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '规划总数', '已完成', '进行中', '逾期未完成'],
            ['党政群管理机构', 43, 85, 93, 64],
            ['教学机构', 83, 73, 55, 43],
            ['教学辅助机构', 86, 65, 82, 34],
            ['研究机构', 72, 53, 39, 67]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('overview_chart_one'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
