<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="date"
        label="一级指标"
        width="150"
      />
      <el-table-column
        prop="date"
        label="二级指标"
        width="150"
      />
      <el-table-column
        prop="date"
        label="监测点"
        width="150"
      />
      <el-table-column
        prop="date"
        label="监测点重要级别"
        width="180"
      />
      <el-table-column
        prop="date"
        label="责任部门"
        width="100"
      />
      <el-table-column
        prop="date"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="address"
        label="操作"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PlanningTableOne',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市'
      }]
    }
  }
}
</script>

<style scoped>

</style>
