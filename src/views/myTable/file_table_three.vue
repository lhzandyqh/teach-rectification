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
        label="文档名称"
        width="300"
      />
      <el-table-column
        prop="cenmian"
        label="层面"
        width="100"
      />
      <el-table-column
        prop="guihua"
        label="所属规划"
        width="200"
      />
      <el-table-column
        prop="ren"
        label="上传人"
        width="100"
      />
      <el-table-column
        prop="daxiao"
        label="大小"
        width="130"
      />
      <el-table-column
        prop="chuangjian"
        label="创建日期"
        width="200"
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
      tableData: [{
        hao: '1',
        mingcheng: '学生综合素质建设',
        cenmian: '学生',
        guihua: '学生综合素质建设',
        ren: '刘老师',
        daxiao: '105.50KB',
        chuangjian: '2019-09-25'
      }, {
        hao: '2',
        mingcheng: '教育国际化水平建设',
        cenmian: '学校',
        guihua: '教育国际化水平建设',
        ren: '李老师',
        daxiao: '75.50KB',
        chuangjian: '2019-09-25'
      }, {
        hao: '3',
        mingcheng: '师资队伍建设规划建设',
        cenmian: '教师',
        guihua: '师资队伍建设',
        ren: '李老师',
        daxiao: '155.80KB',
        chuangjian: '2019-09-25'
      }, {
        hao: '4',
        mingcheng: '专业建设发展规划',
        cenmian: '学生',
        guihua: '专业建设发展',
        ren: '李老师',
        daxiao: '102.50KB',
        chuangjian: '2019-09-25'
      }, {
        hao: '5',
        mingcheng: '智能校园建设',
        cenmian: '校园',
        guihua: '智能校园建设',
        ren: '刘老师',
        daxiao: '101.50KB',
        chuangjian: '2019-09-25'
      }]
    }
  }
}
</script>

<style scoped>

</style>
