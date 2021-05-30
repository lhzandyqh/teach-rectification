<template>
  <div class="app-container">
    <div class="all_container">
      <div class="first_container">
        <div class="function_item">
          <span>任务类型:</span>
          <el-select v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请选择">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="function_item">
          <span>责任部门:</span>
          <el-cascader
            v-model="newTaskForm.responseDepartment"
            :options="optionsone"
            @change="handleChange"
          />
        </div>
        <div class="function_item">
          <span>任务优先级:</span>
          <el-select v-model="value3" style="width: 150px;margin-left: 15px" placeholder="请选择">
            <el-option
              v-for="item in option3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="button-container">
          <el-button type="primary">搜索</el-button>
        </div>
      </div>
      <div class="second_container">
        <el-table
          :data="tableData.slice((currentPage4 - 1) * pageSize, currentPage4 * pageSize)"
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="任务编号"
            width="200"
          />
          <el-table-column
            prop="type"
            label="任务类型"
          />
          <el-table-column
            prop="yxj"
            label="优先级"
          >
            <template slot-scope="scope">
              <el-tag v-if="scope.row.yxj === '低'">低</el-tag>
              <el-tag v-if="scope.row.yxj === '中'" type="warning">中</el-tag>
              <el-tag v-if="scope.row.yxj === '高'" type="danger">高</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="department"
            label="责任部门"
          />
          <el-table-column
            prop="people"
            label="部门负责人"
          />
          <el-table-column
            prop="address"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button type="text" @click="auditingForm(scope.row)">审核</el-button>
              <el-button type="text" @click="auditingForm(scope.row)">任务报告下载</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[8, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <el-dialog
      title="任务审核单"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-table
        :data="tableDataTwo"
        style="width: 100%"
      >
        <el-table-column
          prop="date1"
          label="任务开始日期"
        />
        <el-table-column
          prop="date2"
          label="任务结束日期"
        />
        <el-table-column
          prop="date3"
          label="任务预警日期"
        />
        <el-table-column
          prop="date4"
          label="提交审核日期"
        />
      </el-table>
      <div style="margin-top: 20px">
        <span style="font-weight: bold;font-size: 16px">审核备注：</span>
      </div>
      <div>
        <p style="font-size: 15px;color: #8c939d">暂时没有审核备注</p>
      </div>
      <el-divider />
      <div>
        <el-input
          v-model="textarea2"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入审核意见"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">任务未完成</el-button>
        <el-button type="primary" @click="dialogVisible = false">任务完成</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TaskReview',
  data() {
    return {
      tableDataTwo: [{
        date1: '2020-09-12',
        date2: '2020-12-12',
        date3: '2020-11-12',
        date4: '2021-01-12'
      }],
      dialogVisible: false,
      option1: [{
        value: '全部',
        label: '全部'
      }, {
        value: '规划任务',
        label: '规划任务'
      }, {
        value: '重点任务',
        label: '重点任务'
      }, {
        value: '日常任务',
        label: '日常任务'
      }, {
        value: '临时任务',
        label: '临时任务'
      }, {
        value: '个体任务',
        label: '个体任务'
      }],
      newTaskForm: {},
      optionsone: [
        {
          value: '职能部门',
          label: '职能部门',
          children: [{
            value: '党政群管理机构',
            label: '党政群管理机构',
            children: [{
              value: '后勤管理处',
              label: '后勤管理处'
            }, {
              value: '教务处',
              label: '教务处'
            }, {
              value: '教学督导办公室',
              label: '教学督导办公室'
            }, {
              value: '行政督导办公室',
              label: '行政督导办公室'
            }, {
              value: '学工部',
              label: '学工部'
            }, {
              value: '财务处',
              label: '财务处'
            }, {
              value: '工会',
              label: '工会'
            }, {
              value: '招生就业指导中心',
              label: '招生就业指导中心'
            }, {
              value: '院领导',
              label: '院领导'
            }, {
              value: '党委、院长办公室',
              label: '党委、院长办公室'
            }, {
              value: '组宣部',
              label: '组宣部'
            }, {
              value: '安全工作处',
              label: '安全工作处'
            }, {
              value: '纪检处',
              label: '纪检处'
            }, {
              value: '人事处',
              label: '人事处'
            }]
          }, {
            value: '教学辅助机构',
            label: '教学辅助机构',
            children: [{
              value: '信息中心',
              label: '信息中心'
            }, {
              value: '科研处',
              label: '科研处'
            }, {
              value: '国际教育交流中心',
              label: '国际教育交流中心'
            }]
          }, {
            value: '研究机构',
            label: '研究机构',
            children: [{
              value: '高等职业教育研究所',
              label: '高等职业教育研究所'
            }]
          }]
        }, {
          value: '教学部门',
          label: '教学部门'
        }
      ],
      option3: [
        {
          value: '高',
          label: '高'
        }, {
          value: '中',
          label: '中'
        }, {
          value: '低',
          label: '低'
        }
      ],
      tableData: [
        {
          id: '1',
          type: '规划任务',
          department: '教务处',
          people: '赵老师',
          yxj: '高'
        },
        {
          id: '2',
          type: '日常任务',
          department: '教务处',
          people: '李老师',
          yxj: '中' },
        {
          id: '3',
          type: '规划任务',
          department: '就业指导处',
          people: '邓老师',
          yxj: '中' },
        {
          id: '4',
          type: '个人任务',
          department: '教务处',
          people: '成老师',
          yxj: '低' },
        {
          id: '5',
          type: '日常任务',
          department: '保卫处',
          people: '胡老师',
          yxj: '中' },
        {
          id: '6',
          type: '规划任务',
          department: '教务处',
          people: '赵老师',
          yxj: '中' },
        {
          id: '7',
          type: '规划任务',
          department: '学生处',
          people: '杨老师',
          yxj: '低' },
        {
          id: '8',
          type: '临时任务',
          department: '学生处',
          people: '牛老师',
          yxj: '低' }
      ],
      currentPage4: 1,
      pageSize: 8
    }
  },
  methods: {
    auditingForm: function(row) {
      console.log('测试')
      this.dialogVisible = true
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    }
  }
}
</script>

<style scoped>
.all_container {
  width: 100%;
  height: 700px;
  background-color: white;
}
.first_container {
  width: 100%;
  height: 80px;
  /*background-color: pink;*/
  border-bottom-style: solid;
  border-bottom-color: #bcbcbc;
  border-bottom-width: 1px;
}
.function_item {
  font-size: 14px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.button-container {
  float: left;
  margin-top: 20px;margin-left: 20px;
}
.block {
  text-align: center;
}
.single{
  display: inline-block;
}
.biaoqian{
  display: inline-block;
}
.content{
  display: inline-block;
}
.second_container {
  padding: 20px;
}
.fenye {
  text-align: center;
  margin-top: 20px;
}
</style>
