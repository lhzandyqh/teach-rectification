<template>
  <div class="app-container">
    <el-row>
      <div id="overview_chart_two" style="height: 300px" />
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
        title: {
          text: '任务完成情况分析'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: ['科研论文', '院级课题', '厅级课题', '省级课题', '国家级课题', '技术转让', '技术开发']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'outside'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 33, name: '科研论文' },
              { value: 31, name: '院级课题' },
              { value: 23, name: '厅级课题' },
              { value: 13, name: '省级课题' },
              { value: 48, name: '国家级课题' },
              { value: 53, name: '技术转让' },
              { value: 18, name: '技术开发' }
            ]
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
      this.chart = echarts.init(document.getElementById('overview_chart_two'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
