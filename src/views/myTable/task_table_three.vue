<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="mingcheng"
        label="任务名称"
        width="180"
      />
      <el-table-column
        prop="bumen"
        label="责任部门"
        width="150"
      />
      <el-table-column
        prop="zeren"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="youxian"
        label="优先级"
        width="80"
      />
      <el-table-column
        prop="zhuangtai"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="shuxing"
        label="任务属性"
        width="150"
      />
      <el-table-column
        prop="leixing"
        label="任务类型"
        width="100"
      />
      <el-table-column
        prop="kaishi"
        label="开始时间"
        width="100"
      />
      <el-table-column
        prop="jiezhi"
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
      tableData: [{
        mingcheng: '担任河北省教改课题评审',
        bumen: '高等职业教育研究所',
        zeren: '祝云霞',
        youxian: '高',
        zhuangtai: '逾期未完成',
        shuxing: '部门内部任务',
        leixing: '临时任务',
        kaishi: '2019-11-21',
        jiezhi: '2019-12-21'
      }, {
        mingcheng: '担任国家教学能力大赛评审',
        bumen: '高等职业教育研究所',
        zeren: '谢园',
        youxian: '高',
        zhuangtai: '完成',
        shuxing: '部门内部任务',
        leixing: '临时任务',
        kaishi: '2019-10-21',
        jiezhi: '2019-12-21'
      }, {
        mingcheng: '担任国家资源库评审',
        bumen: '高等职业教育研究所',
        zeren: '刘艳辉',
        youxian: '高',
        zhuangtai: '逾期未完成',
        shuxing: '部门内部任务',
        leixing: '临时任务',
        kaishi: '2019-11-20',
        jiezhi: '2019-12-21'
      }, {
        mingcheng: '政治建设',
        bumen: '组宣组',
        zeren: '吕方',
        youxian: '高',
        zhuangtai: '逾期未完成',
        shuxing: '部门内部任务',
        leixing: '临时任务',
        kaishi: '2019-10-21',
        jiezhi: '2019-12-21'
      }, {
        mingcheng: '干部工作',
        bumen: '组宣组',
        zeren: '吕方',
        youxian: '高',
        zhuangtai: '完成',
        shuxing: '部门内部任务',
        leixing: '临时任务',
        kaishi: '2019-8-21',
        jiezhi: '2019-12-21'
      }]
    }
  }
}
</script>

<style scoped>

</style>
