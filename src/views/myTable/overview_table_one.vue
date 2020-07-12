<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="排名"
        width="80"
      />
      <el-table-column
        prop="name"
        label="部门"
        width="130"
      />
      <el-table-column
        prop="address"
        label="完成率"
      >
        <template slot-scope="scope">
          <el-progress :percentage="scope.row.per" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OverviewTableOne',
  data() {
    return {
      tableData: [{
        date: '1',
        name: '研究机构',
        address: '上海市普陀区金沙江路 1518 弄',
        per: 80
      }, {
        date: '2',
        name: '教学辅助机构',
        address: '上海市普陀区金沙江路 1517 弄',
        per: 65
      }, {
        date: '3',
        name: '教学机构',
        address: '上海市普陀区金沙江路 1519 弄',
        per: 53
      }, {
        date: '4',
        name: '党政群管理机构',
        address: '上海市普陀区金沙江路 1516 弄',
        per: 50
      }]
    }
  }
}
</script>

<style scoped>

</style>
