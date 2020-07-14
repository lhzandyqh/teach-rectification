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
        label="流程名称"
        width="400"
      />
      <el-table-column
        prop="miaoshu"
        label="流程描述"
        width="400"
      />
      <el-table-column
        prop="zhuangtai"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="address"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">查看</el-button>
          <el-button type="text" @click="console.log(scope.row)">禁用</el-button>
          <el-button type="text" @click="console.log(scope.row)">编辑</el-button>
          <el-button type="text" @click="console.log(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ProcessTableOne',
  data() {
    return {
      tableData: [{
        hao: '1',
        mingcheng: '三级审批',
        miaoshu: '审批过程的步骤',
        zhuangtai: '可用'
      }, {
        hao: '2',
        mingcheng: '审批驳回',
        miaoshu: '审批驳回的步骤',
        zhuangtai: '可用'
      }, {
        hao: '3',
        mingcheng: '规划任务',
        miaoshu: '任务规划，分发的具体流程',
        zhuangtai: '可用'
      }, {
        hao: '4',
        mingcheng: '教师绩效评价',
        miaoshu: '年终绩效评价的具体流程',
        zhuangtai: '可用'
      }, {
        hao: '5',
        mingcheng: '评奖评优',
        miaoshu: '年终评奖评优的具体流程',
        zhuangtai: '可用'
      }]
    }
  }
}
</script>

<style scoped>

</style>
