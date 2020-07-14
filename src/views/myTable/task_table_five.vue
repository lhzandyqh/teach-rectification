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
        label="任务名称"
        width="250"
      />
      <el-table-column
        prop="leixing"
        label="任务类型"
        width="100"
      />
      <el-table-column
        prop="zhuangtai"
        label="预警状态"
        width="100"
      />
      <el-table-column
        prop="chuangjian"
        label="创建日期"
        width="200"
      />
      <el-table-column
        prop="jiezhi"
        label="截止时间"
        width="100"
      />
      <el-table-column
        prop="ren"
        label="责任人"
        width="80"
      />
      <el-table-column
        prop="bumen"
        label="责任部门"
        width="200"
      />
      <el-table-column
        prop="address"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">查看</el-button>
          <el-button type="text" @click="console.log(scope.row)">提醒</el-button>
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
        hao: '1',
        mingcheng: '深入学习党的十九大会议精神',
        leixing: '日常任务',
        zhuangtai: '未处理',
        chuangjian: '2019-11-02',
        jiezhi: '2019-12-02',
        ren: '刘云霞',
        bumen: '高等职业教育研究所'
      }, {
        hao: '2',
        mingcheng: '数据平台采集修改完善',
        leixing: '重点任务',
        zhuangtai: '未处理',
        chuangjian: '2019-11-02',
        jiezhi: '2019-12-02',
        ren: '吕方',
        bumen: '高等职业教育研究所'
      }, {
        hao: '3',
        mingcheng: '撰写改革发展方案',
        leixing: '重点任务',
        zhuangtai: '未处理',
        chuangjian: '2019-08-02',
        jiezhi: '2019-12-02',
        ren: '吕方',
        bumen: '高等职业教育研究所'
      }, {
        hao: '4',
        mingcheng: '省行动计划方案推动',
        leixing: '重点任务',
        zhuangtai: '未处理',
        chuangjian: '2019-05-02',
        jiezhi: '2019-11-02',
        ren: '张书艳',
        bumen: '高等职业教育研究所'
      }, {
        hao: '5',
        mingcheng: '大数据平台数据录入',
        leixing: '重点任务',
        zhuangtai: '未处理',
        chuangjian: '2019-05-02',
        jiezhi: '2019-11-02',
        ren: '张书艳',
        bumen: '高等职业教育研究所'
      }]
    }
  }
}
</script>

<style scoped>

</style>
