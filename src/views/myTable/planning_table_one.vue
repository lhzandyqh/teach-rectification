<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="date"
        label="规划名称"
        width="180"
      />
      <el-table-column
        prop="date"
        label="规划层面"
        width="100"
      />
      <el-table-column
        prop="date"
        label="关联规划"
        width="180"
      />
      <el-table-column
        prop="date"
        label="责任部门"
        width="180"
      />
      <el-table-column
        prop="date"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="date"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="date"
        label="开始时间"
        width="100"
      />
      <el-table-column
        prop="date"
        label="截止时间"
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
