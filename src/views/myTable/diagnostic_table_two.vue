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
        prop="address"
        label="预览"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">预览</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DiagnosticTableOne',
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
