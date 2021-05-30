<template>
  <div class="app-container">
    <el-table
      :data="tableDataOne.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="taskName"
        label="任务名称"
        width="180"
      />
      <el-table-column
        prop="responseDepartment"
        label="责任部门"
        width="150"
      />
      <el-table-column
        prop="responsePeople"
        label="责任人"
        width="100"
      />
      <el-table-column
        prop="taskPriority"
        label="优先级"
        width="80"
      />
      <el-table-column
        prop="taskState"
        label="状态"
        width="100"
      />
      <el-table-column
        prop="shuxing"
        label="任务属性"
        width="150"
      />
      <el-table-column
        prop="taskType"
        label="任务类型"
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
          <el-button type="text" @click="openDialog(scope.row)">查看</el-button>
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
    <el-dialog
      title="整体规划查看详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <indicators-table :table-data="tableData" :table-style="{ width:'100%' }" />
        </el-tab-pane>
        <el-tab-pane label="监测点信息" name="second">
          <el-table
            :data="tableDataFour"
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="序号"
            />
            <el-table-column
              prop="name"
              label="监测点名称"
            />
            <el-table-column
              prop="address"
              label="责任部门"
            />
            <el-table-column
              prop="date"
              label="序号"
            />
            <el-table-column
              prop="name"
              label="责任人"
            />
            <el-table-column
              prop="address"
              label="标准值"
            />
            <el-table-column
              prop="address"
              label="当前值"
            />
            <el-table-column
              prop="address"
              label="目标值"
            />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="沟通记录" name="third">
          <div>
            <el-input
              v-model="textarea"
              type="textarea"
              :rows="6"
              placeholder="请输入内容"
            />
          </div>
          <div style="margin-top: 20px">
            <el-button type="primary">提交</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="佐证材料" name="fourth">
          <div>
            <div style="float: right">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </div>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableDataFive"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              prop="name"
              label="附件名称"
            />
            <el-table-column
              prop="name"
              label="上传人"
            />
            <el-table-column
              prop="name"
              label="上传时间"
            />
            <el-table-column
              prop="name"
              label="文件大小"
            />
            <el-table-column
              prop="name"
              label="下载次数"
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
        </el-tab-pane>
        <el-tab-pane label="历史记录" name="fifth">
          <div style="margin-top: 20px">
            <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-tab-pane>
        <el-tab-pane label="完成情况" name="sixth">
          <el-table
            :data="tableDataSix"
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="序号"
            />
            <el-table-column
              prop="name"
              label="参与人"
            />
            <el-table-column
              prop="address"
              label="完成状态"
            />
            <el-table-column
              prop="date"
              label="截止时间"
            />
            <el-table-column
              prop="name"
              label="实际完成时间"
            />
            <el-table-column
              prop="address"
              label="任务完成情况"
            />
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import IndicatorsTable from '@/views/myVueFiles/planningManage/IndicatorsTable'
import { getAllTask } from '@/api/getData'
import axios from 'axios'
export default {
  name: 'PlanningTableTwo',
  components: {
    IndicatorsTable
  },
  data() {
    return {
      multipleSelection: [],
      activeName: 'first',
      dialogVisible: false,
      tableDataOne: [],
      itemData: [],
      currentPage4: 1,
      tableDataFour: [],
      tableDataFive: [],
      tableDataSix: [],
      pagesize: '10',
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      tableData: [
        { key: '责任部门', value: '1001' },
        { key: '责任人', value: '篮球' },
        { key: '关联任务', value: '120.00' },
        { key: '参与人', value: '2017-03-01' },
        { key: '关联规划', value: '在线支付' },
        { key: '优先级', value: '北京市海淀区西北旺镇' },
        { key: '创建人', value: '1001' },
        { key: '创建时间', value: '篮球' },
        { key: '开始时间', value: '篮球' },
        { key: '截止时间', value: '篮球' }
      ]
    }
  },
  mounted() {
    this.getAllTaskData()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
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
      console.log('测试查看任务详情')
      console.log(row)
      // this.tableData.push(row)
      // console.log(this.tableData)
      this.tableData[0].value = row.responseDepartment
      this.tableData[1].value = row.responsePeople
      this.tableData[2].value = row.responseDepartment
      this.tableData[3].value = row.zgTaskParticipantList
      this.tableData[4].value = ''
      this.tableData[5].value = row.taskPriority
      this.tableData[6].value = row.approvalProcess
      this.tableData[7].value = 'demoData'
      this.tableData[8].value = row.startTime
      this.tableData[9].value = row.endTime
    },
    getAllTaskData: function() {
      getAllTask().then(response => {
        console.log('测试获取所有的任务')
        console.log(response.data.data)
        this.tableDataOne = response.data.data
      })
    },
    openDialog: function(row) {
      this.dialogVisible = true
      console.log('测试获取某一个任务具体信息')
      console.log(row)
      var url = 'https://zhongkeruitong.top/rectification/functions/task/getTaskInfo/' + row.id
      axios.get(url).then((res) => {
        console.log('测试接口获取数据')
        console.log(res.data.data)
        this.tableData[0].value = res.data.data.responseDepartment
        this.tableData[1].value = res.data.data.responsePeople
        this.tableData[2].value = res.data.data.responseDepartment
        this.tableData[3].value = res.data.data.zgTaskParticipantList
        this.tableData[4].value = ''
        this.tableData[5].value = res.data.data.taskPriority
        this.tableData[6].value = res.data.data.approvalProcess
        this.tableData[7].value = 'demoData'
        this.tableData[8].value = res.data.data.startTime
        this.tableData[9].value = res.data.data.endTime
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped>

</style>
