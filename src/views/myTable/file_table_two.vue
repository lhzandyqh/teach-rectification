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
        label="文档名称"
        width="300"
      />
      <el-table-column
        prop="date"
        label="任务类型"
        width="100"
      />
      <el-table-column
        prop="date"
        label="任务属性"
        width="100"
      />
      <el-table-column
        prop="date"
        label="所属规划"
        width="100"
      />
      <el-table-column
        prop="date"
        label="所属任务"
        width="130"
      />
      <el-table-column
        prop="date"
        label="专业带头人"
        width="100"
      />
      <el-table-column
        prop="date"
        label="上传人"
        width="80"
      />
      <el-table-column
        prop="date"
        label="大小"
        width="80"
      />
      <el-table-column
        prop="date"
        label="创建日期"
        width="100"
      />
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
  name: 'FileTableOne',
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
