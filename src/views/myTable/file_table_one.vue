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
        prop="leixing"
        label="任务类型"
        width="100"
      />
      <el-table-column
        prop="shuxing"
        label="任务属性"
        width="100"
      />
      <el-table-column
        prop="guihua"
        label="所属规划"
        width="100"
      />
      <el-table-column
        prop="renwu"
        label="所属任务"
        width="230"
      />
      <el-table-column
        prop="shangchuan"
        label="上传人"
        width="80"
      />
      <el-table-column
        prop="daxiao"
        label="大小"
        width="80"
      />
      <el-table-column
        prop="chuangjian"
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
      tableData: [{
        hao: '1',
        mingcheng: '重大项目备案表.xls.',
        leixing: '临时任务',
        shuxing: '部门内部任务',
        guihua: '学校',
        renwu: '协助省教育厅职成处撰写河北省职业教育体制机制改革',
        ren: '',
        shangchuan: '张老师',
        daxiao: '20KB',
        chuangjian: '2020-05-20 '
      }]
    }
  }
}
</script>

<style scoped>

</style>
