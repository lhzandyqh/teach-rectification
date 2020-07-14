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
        width="300"
      />
      <el-table-column
        prop="xuenian"
        label="学年"
        width="100"
      />
      <el-table-column
        prop="xueqi"
        label="学期"
        width="100"
      />
      <el-table-column
        prop="zhuanye"
        label="专业名称"
        width="150"
      />
      <el-table-column
        prop="ren"
        label="专业带头人"
        width="100"
      />
      <el-table-column
        prop="chuangjian"
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
        mingcheng: '【经济贸易类】诊断报告',
        xuenian: '2018-2019',
        xueqi: '1',
        zhuanye: '经济贸易类',
        ren: '程杰',
        chuangjian: '2019-10-10'
      }, {
        hao: '2',
        mingcheng: '【国际贸易实务】诊断报告',
        xuenian: '2018-2019',
        xueqi: '1',
        zhuanye: '国际贸易实务',
        ren: '王慧芳',
        chuangjian: '2019-10-10'
      }, {
        hao: '3',
        mingcheng: '【网络营销】诊断报告',
        xuenian: '2018-2019',
        xueqi: '1',
        zhuanye: '网络营销',
        ren: '李晶晶',
        chuangjian: '2019-10-14'
      }, {
        hao: '4',
        mingcheng: '【物流类】诊断报告',
        xuenian: '2018-2019',
        xueqi: '1',
        zhuanye: '经济贸易类',
        ren: '段权至',
        chuangjian: '2019-10-10'
      }, {
        hao: '5',
        mingcheng: '【物流管理】诊断报告',
        xuenian: '2018-2019',
        xueqi: '1',
        zhuanye: '物流管理',
        ren: '王立新',
        chuangjian: '2019-10-10'
      }]
    }
  }
}
</script>

<style scoped>

</style>
