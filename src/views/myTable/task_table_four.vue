<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="date"
        label="任务名称"
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
        prop="优先级"
        label="责任部门"
        width="80"
      />
      <el-table-column
        prop="date"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="date"
        label="任务属性"
        width="100"
      />
      <el-table-column
        prop="date"
        label="任务类型"
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
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">上传附件</el-button>
          <el-button type="text" @click="console.log(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PlanningTableTwo',
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
