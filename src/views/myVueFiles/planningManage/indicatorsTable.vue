<template>
  <div style="padding: 20px;height: 500px">
    <table v-if="s_showByRow" class="mailTable" :style="styleObject">
      <tr v-for="index in rowCount" :key="index">
        <td class="column">{{ tableData[index*2-2].key }}</td>
        <td>{{ tableData[index*2-2].value }}</td>
        <td class="column">{{ tableData[index*2-1] !== undefined ? tableData[index*2-1].key : '' }}</td>
        <td>{{ tableData[index*2-1] !== undefined ? tableData[index*2-1].value : '' }}</td>
      </tr>
    </table>
    <table v-else class="mailTable" :style="styleObject">
      <tr v-for="index in rowCount" :key="index">
        <td class="column">{{ tableData[index-1].key }}</td>
        <td>{{ tableData[index-1].value }}</td>
        <td class="column">{{ tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].key : '' }}</td>
        <td>{{ tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].value : '' }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IndicatorsTable',
  /* eslint-disable */
  // eslint-disable-next-line
  props: ['tableData', 'tableStyle', 'showByRow'],
  data() {
    return {
      styleObject: {},
      s_showByRow: true
    }
  },
  computed: {
    rowCount: function() {
      return Math.ceil(this.tableData.length / 2)
    }
  },
  created() {
    this.styleObject = this.tableStyle
    if (this.showByRow !== undefined) {
      this.s_showByRow = this.showByRow
    }
  }
}
</script>

<style scoped>
  .mailTable, .mailTable tr, .mailTable tr td{ border:1px solid #E6EAEE; }
  .mailTable{ font-size: 14px; color: #71787E; }
  .mailTable tr td{ border:1px solid #f0f0f0; width: 150px; height: 50px; line-height: 50px; box-sizing: border-box; padding: 0 10px; }
  .mailTable tr td.column { background-color: #f5f7fa; color: #393C3E; }
</style>
