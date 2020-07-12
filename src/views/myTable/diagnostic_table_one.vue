<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop=""
        label="序号"
        width="50"
      />
      <el-table-column
        prop="date"
        label="报告名称"
        width="350"
      />
      <el-table-column
        prop="date"
        label="层级"
        width="200"
      />
      <el-table-column
        prop="date"
        label="学年"
        width="150"
      />
      <el-table-column
        prop="date"
        label="创建日期"
        width="200"
      />
      <el-table-column
        prop="date"
        label="预览"
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
  name: 'DiagnosticTableOne',
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
