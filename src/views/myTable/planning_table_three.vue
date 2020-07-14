<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="yiji"
        label="一级指标"
        width="150"
      />
      <el-table-column
        prop="erji"
        label="二级指标"
        width="150"
      />
      <el-table-column
        prop="jiance"
        label="监测点"
        width="150"
      />
      <el-table-column
        prop="jibie"
        label="监测点重要级别"
        width="180"
      />
      <el-table-column
        prop="bumen"
        label="责任部门"
        width="100"
      />
      <el-table-column
        prop="zeren"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="address"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">查看</el-button>
          <el-button type="text" @click="console.log(scope.row)">复制</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PlanningTableOne',
  data() {
    return {
      tableData: [{
        yiji: '师资',
        erji: '教学与专业能力',
        jiance: '师资周课时',
        jibie: '重要',
        bumen: '教务处',
        zeren: '李哲'
      }, {
        yiji: '学校',
        erji: '师资',
        jiance: '市级奖项',
        jibie: '一般',
        bumen: '人事处',
        zeren: '李玉龙'
      }, {
        yiji: '学校',
        erji: '师资',
        jiance: '社团老师人数',
        jibie: '一般',
        bumen: '学工部',
        zeren: '吴志群'
      }, {
        yiji: '学校',
        erji: '师资',
        jiance: '师资社团总数',
        jibie: '一般',
        bumen: '学工部',
        zeren: '吴志群'
      }]
    }
  }
}
</script>

<style scoped>

</style>
