<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="hao"
        label="序号"
        width="50"
      />
      <el-table-column
        prop="mingcheng"
        label="报告名称"
        width="350"
      />
      <el-table-column
        prop="cengji"
        label="层级"
        width="200"
      />
      <el-table-column
        prop="xuenian"
        label="学年"
        width="150"
      />
      <el-table-column
        prop="fuze"
        label="负责人"
        width="150"
      />
      <el-table-column
        prop="chaungjian"
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
      tableData: [{
        hao: '1',
        mingcheng: '[2018-2019]学年学工部诊断报告',
        cengji: '部门',
        xuenian: '2018-2019',
        fuze: '李老师',
        chaungjian: '2019-12-01'
      }, {
        hao: '2',
        mingcheng: '[2018-2019]学年人事处诊断报告',
        cengji: '部门',
        xuenian: '2018-2019',
        fuze: '张老师',
        chaungjian: '2019-12-01'
      }, {
        hao: '3',
        mingcheng: '[2018-2019]学年教务处诊断报告',
        cengji: '部门',
        xuenian: '2018-2019',
        fuze: '李老师',
        chaungjian: '2019-12-01'
      }, {
        hao: '4',
        mingcheng: '[2018-2019]学年后勤管理处诊断报告',
        cengji: '部门',
        xuenian: '2018-2019',
        fuze: '刘老师',
        chaungjian: '2019-12-01'
      }, {
        hao: '5',
        mingcheng: '[2018-2019]学年高等职业教育研究所诊断报告',
        cengji: '部门',
        xuenian: '2018-2019',
        fuze: '吴老师',
        chaungjian: '2019-12-01'
      }]
    }
  }
}
</script>

<style scoped>

</style>
