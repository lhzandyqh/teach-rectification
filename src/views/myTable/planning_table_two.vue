<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="mingchen"
        label="规划名称"
        width="180"
      />
      <el-table-column
        prop="cenmian"
        label="规划层面"
        width="100"
      />
      <el-table-column
        prop="guihua"
        label="关联规划"
        width="180"
      />
      <el-table-column
        prop="bumen"
        label="责任部门"
        width="180"
      />
      <el-table-column
        prop="zerenren"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="zhuangtai"
        label="状态"
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
  name: 'PlanningTableOne',
  data() {
    return {
      tableData: [{
        mingchen: '学生综合素质建设',
        cenmian: '学生',
        guihua: '河北工业职业技术学院',
        bumen: '学工部',
        zerenren: '段志群',
        zhuangtai: '进行中',
        kaishi: '2016-05-02',
        jiezhi: '2017-05-02',
        address: '上海市'
      }, {
        mingchen: '实验实训设施建设',
        cenmian: '学校',
        guihua: '河北工业职业技术学院',
        bumen: '教务处',
        zerenren: '乔哲',
        zhuangtai: '进行中',
        kaishi: '2015-01-02',
        jiezhi: '2016-01-02',
        address: '上海市'
      }, {
        mingchen: '校园基础建设',
        cenmian: '学校',
        guihua: '河北工业职业技术学院',
        bumen: '后勤管理处',
        zerenren: '丁洪涛',
        zhuangtai: '逾期未完成',
        kaishi: '2016-08-02',
        jiezhi: '2018-08-02',
        address: '上海市'
      }, {
        mingchen: '国际教育交流合作',
        cenmian: '学校',
        guihua: '河北工业职业技术学院',
        bumen: '国际教育交流中心',
        zerenren: '刘永红',
        zhuangtai: '进行中',
        kaishi: '2013-05-02',
        jiezhi: '2013-07-02',
        address: '上海市'
      }, {
        mingchen: '科研能力建设',
        cenmian: '学校',
        guihua: '河北工业职业技术学院',
        bumen: '科研处',
        zerenren: '张丽',
        zhuangtai: '进行中',
        kaishi: '2013-05-02',
        jiezhi: '2013605-02',
        address: '上海市'
      }, {
        mingchen: '师资队伍建设',
        cenmian: '教师',
        guihua: '河北工业职业技术学院',
        bumen: '人事处',
        zerenren: '李玉龙',
        zhuangtai: '进行中',
        kaishi: '2016-08-02',
        jiezhi: '2019-02-02',
        address: '上海市'
      }]
    }
  }
}
</script>

<style scoped>

</style>
