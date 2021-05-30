<template>
  <div class="app-container">
    <el-table
      :data="tableDataOne.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="planningName"
        label="规划名称"
        width="180"
      />
      <el-table-column
        prop="planningLevel"
        label="规划层面"
        width="100"
      />
      <el-table-column
        prop="parentId"
        label="关联规划"
        width="180"
      />
      <el-table-column
        prop="responseDepartment"
        label="责任部门"
        width="180"
      />
      <el-table-column
        prop="responsePeople"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="state"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="startTime"
        label="开始时间"
        width="100"
      />
      <el-table-column
        prop="endTime"
        label="截止时间"
        width="100"
      />
      <el-table-column
        prop="address"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">上传附件</el-button>
          <el-button type="text" @click="lookItemDetails(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="text-align: center">
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[5,10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDataOne.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      title="整体规划查看详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!--      <span>fdfdfd</span>-->
      <indicators-table :table-data="tableData" :table-style="{ width:'100%' }" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import IndicatorsTable from '@/views/myVueFiles/planningManage/IndicatorsTable'
export default {
  name: 'PlanningTableOne',
  components: {
    IndicatorsTable
  },
  props: {
    tableDataOne: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false,
      itemData: [],
      currentPage4: 1,
      pagesize: '5',
      tableData: [
        { key: '规划层面', value: '1001' },
        { key: '关联规划', value: '篮球' },
        { key: '责任部门', value: '120.00' },
        { key: '责任人', value: '2017-03-01' },
        { key: '开始时间', value: '在线支付' },
        { key: '截止时间', value: '北京市海淀区西北旺镇' },
        { key: '创建人', value: '1001' },
        { key: '创建时间', value: '篮球' }
      ]
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    },
    lookItemDetails: function(row) {
      this.dialogVisible = true
      // this.itemData = row
      console.log('测试查看详情')
      console.log(row)
      // this.tableData.push(row)
      // console.log(this.tableData)
      this.tableData[0].value = row.planningLevel
      this.tableData[1].value = row.parentId
      this.tableData[2].value = row.responseDepartment
      this.tableData[3].value = row.responsePeople
      this.tableData[4].value = row.startTime
      this.tableData[5].value = row.endTime
      this.tableData[6].value = row.approvalProcess
      this.tableData[7].value = row.updateTime
    }
  }
}
</script>

<style scoped>

</style>
