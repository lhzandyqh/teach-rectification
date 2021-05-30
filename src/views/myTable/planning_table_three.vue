<template>
  <div class="app-container">
    <el-table
      :data="tableDataOne.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
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
        prop="jcdmc"
        label="监测点"
        width="150"
      />
      <el-table-column
        prop="jcdzyjb"
        label="监测点重要级别"
        width="180"
      />
      <el-table-column
        prop="zrbm"
        label="责任部门"
        width="100"
      />
      <el-table-column
        prop="zrbm"
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
    <div class="block" style="text-align: center">
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDataOne.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanningTableOne',
  props: {
    tableDataOne: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage4: 1,
      pagesize: '10',
      tableData: [{
        yiji: '师资',
        erji: '教学与专业能力',
        jiance: '师资周课时',
        jibie: '重要',
        bumen: '教务处',
        zeren: '李老师'
      }, {
        yiji: '学校',
        erji: '师资',
        jiance: '市级奖项',
        jibie: '一般',
        bumen: '人事处',
        zeren: '李老师'
      }, {
        yiji: '学校',
        erji: '师资',
        jiance: '社团老师人数',
        jibie: '一般',
        bumen: '学工部',
        zeren: '吴老师'
      }, {
        yiji: '学校',
        erji: '师资',
        jiance: '师资社团总数',
        jibie: '一般',
        bumen: '学工部',
        zeren: '吴老师'
      }]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    }
  }
}
</script>

<style scoped>

</style>
