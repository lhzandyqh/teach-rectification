<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
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
              <span>任务状态:</span>
              <el-select v-model="value2" style="width: 150px;margin-left: 15px" placeholder="请选择">
                <el-option
                  v-for="item in option2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="function_item">
              <span>责任部门:</span>
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
              <el-button type="primary" icon="el-icon-plus" @click="newTask">新建任务</el-button>
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="second_container">
            <tasktablethree ref="childTableThree" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="个人相关" name="second">
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
              <span>任务状态:</span>
              <el-select v-model="value2" style="width: 150px;margin-left: 15px" placeholder="请选择">
                <el-option
                  v-for="item in option2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="function_item">
              <span>任务性质:</span>
              <el-select v-model="value4" style="width: 150px;margin-left: 15px" placeholder="请选择">
                <el-option
                  v-for="item in option4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="function_item">
              <span>责任部门:</span>
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
              <el-button type="primary" icon="el-icon-plus">新建任务</el-button>
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="second_container">
            <tasktablefour />
            <div class="block">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="0"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="新建任务"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任务名称：</span>
            </div>
            <div class="content">
              <el-input v-model="newTaskForm.taskName" placeholder="请输入内容" />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任务类型：</span>
            </div>
            <div class="content">
              <el-select v-model="newTaskForm.taskType" style="width: 185px" placeholder="请选择">
                <el-option label="规划任务" value="规划任务" />
                <el-option label="重点任务" value="重点任务" />
                <el-option label="日常任务" value="日常任务" />
                <el-option label="临时任务" value="临时任务" />
                <el-option label="个体任务" value="个体任务" />
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">优先级:</span>
            </div>
            <div class="content">
              <el-select v-model="newTaskForm.taskPriority" style="width: 185px" placeholder="请选择">
                <el-option label="低" value="低" />
                <el-option label="中" value="中" />
                <el-option label="高" value="高" />
              </el-select>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任务属性:</span>
            </div>
            <div class="content">
              <el-select v-model="newTaskForm.taskAttribute" style="width: 185px" placeholder="请选择">
                <el-option label="部门内部任务" value="部门内部任务" />
                <el-option label="部门协同任务" value="专业" />
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">开始时间：</span>
            </div>
            <div class="content">
              <el-date-picker
                v-model="newTaskForm.startTime"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">结束时间：</span>
            </div>
            <div class="content">
              <el-date-picker
                v-model="newTaskForm.endTime"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">责任部门：</span>
            </div>
            <div class="content">
              <!--              <el-input placeholder="请输入内容" v-model="form.name" />-->
              <el-cascader
                v-model="newTaskForm.responseDepartment"
                :options="optionsone"
                @change="handleChange"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">预警时间:</span>
            </div>
            <div class="content">
              <el-date-picker
                v-model="newTaskForm.warningTime"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <div v-if="newTaskForm.taskAttribute==='部门内部任务'">
          <el-row>
            <el-col :span="24">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">参与人:</span>
                </div>
                <div class="content">
                  <el-select v-model="taskAttribute.cyr" multiple placeholder="请选择">
                    <el-option
                      v-for="item in cyroptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <el-row>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">配合部门：</span>
                </div>
                <div class="content">
                  <!--              <el-input placeholder="请输入内容" v-model="form.name" />-->
                  <el-cascader
                    v-model="newTaskForm.zgTaskCooperationDepartmentList"
                    :options="optionsone"
                    @change="handleChange"
                  />
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">部门负责人：</span>
                </div>
                <div class="content">
                  <!--              <el-input placeholder="请输入内容" v-model="form.name" />-->
                  <el-cascader
                    v-model="newTaskForm.itemResPeople"
                    :options="optionsone"
                    @change="handleChange"
                  />
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" icon="el-icon-plus" @click="addDepatment">增加</el-button>
            </el-col>
          </el-row>
          <div v-for="(item) in items" :key="item.id">
            <el-row style="margin-top: 20px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">配合部门：</span>
                  </div>
                  <div class="content">
                    <!--              <el-input placeholder="请输入内容" v-model="form.name" />-->
                    <el-cascader
                      v-model="newTaskForm.zgTaskCooperationDepartmentList"
                      :options="optionsone"
                      @change="handleChange"
                    />
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">部门负责人:</span>
                  </div>
                  <div class="content">
                    <el-select v-model="newTaskForm.itemResPeople" multiple placeholder="请选择">
                      <el-option
                        v-for="ite in cyroptions"
                        :key="ite.value"
                        :label="ite.label"
                        :value="ite.value"
                      />
                    </el-select>
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <el-button type="danger" icon="el-icon-close" @click="deleteDepartment(item)">删除</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="2">
          <div class="">
            <span style="font-weight: bolder">任务描述：</span>
          </div>
        </el-col>
        <el-col :span="22">
          <el-input
            v-model="newTaskForm.taskDes"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="2">
          <div class="">
            <span style="font-weight: bolder">考核职责：</span>
          </div>
        </el-col>
        <el-col :span="22">
          <el-input
            v-model="newTaskForm.checkDes"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="2">
          <div class="">
            <span style="font-weight: bolder">关联监测点：</span>
          </div>
        </el-col>
        <el-col :span="22">
          <el-button type="success" icon="el-icon-plus" @click="addLookPoint">添加监测点</el-button>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-table
          :data="tableDataThree"
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="监测点编号"
          />
          <el-table-column
            prop="jcdmc"
            label="监测点名称"
          />
          <el-table-column
            prop="jcdzyjb"
            label="监测点级别"
          />
          <el-table-column
            prop="address"
            label="重要级别"
          />
          <el-table-column
            prop="address"
            label="数据项"
          />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="deleteTableItem(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="newMyTask">新 建</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="添加监测点"
      :visible.sync="dialogVisibleTwo"
      width="60%"
      :before-close="handleClose"
    >
      <div>
        <div style="float: right">
          <el-button type="success" @click="addFinal">添加</el-button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="id"
          label="监测点编号"
        />
        <el-table-column
          prop="jcdmc"
          label="监测点名称"
        />
        <el-table-column
          prop="jcdzyjb"
          label="监测点级别"
        />
        <el-table-column
          prop="address"
          label="重要级别"
        />
        <el-table-column
          prop="address"
          label="数据项"
        />
      </el-table>
      <div class="block" style="text-align: center">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <!--      <span slot="footer" class="dialog-footer">-->
      <!--        <el-button @click="dialogVisibleTwo = false">取 消</el-button>-->
      <!--        <el-button type="primary" @click="submitPersonalPlan">提 交</el-button>-->
      <!--      </span>-->
    </el-dialog>
  </div>
</template>

<script>
import tasktablethree from '@/views/myTable/task_table_three'
import tasktablefour from '@/views/myTable/task_table_four'
import { getAllIndicatorsItems, newTask } from '@/api/getData'
export default {
  name: 'TaskRelease',
  components: {
    tasktablethree,
    tasktablefour
  },
  data() {
    return {
      newTaskForm: {
        taskName: '',
        taskType: '',
        taskState: '',
        taskDes: '',
        taskPriority: '',
        responseDepartment: '',
        responsePeople: '',
        warningTime: '',
        taskAttribute: '',
        warningWay: '',
        warningPeople: '',
        checkDes: '',
        relationIndex: '',
        approvalProcess: '',
        historyRecord: '',
        startTime: '',
        endTime: '',
        zgTaskParticipantList: [],
        zgTaskCooperationDepartmentList: [],
        cyr: [],
        itemResPeople: []
        // taskDes: '',
        // checkDes: ''
      },
      tableDataThree: [],
      tableData: [],
      currentPage4: 1,
      pagesize: '10',
      departmentNum: 0,
      items: [],
      dialogVisible: false,
      dialogVisibleTwo: false,
      activeName: 'first',
      value1: '',
      value2: '',
      value3: '',
      cyroptions: [{
        value: '王老师',
        label: '王老师'
      }, {
        value: '赵老师',
        label: '赵老师'
      }, {
        value: '邓老师',
        label: '邓老师'
      }, {
        value: '周老师',
        label: '周老师'
      }, {
        value: '李老师',
        label: '李老师'
      }],
      form: {
        name: '',
        type: '',
        zrbm: '',
        shux: '部门内部任务',
        begintime: '',
        endtime: '',
        yxj: '',
        yjsj: '',
        textone: '',
        texttwo: ''
      },
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
      option2: [{
        value: '全部',
        label: '全部'
      }, {
        value: '待提审',
        label: '待提审'
      }, {
        value: '审核中',
        label: '审核中'
      }, {
        value: '审核未通过',
        label: '审核未通过'
      }, {
        value: '未开始',
        label: '未开始'
      }, {
        value: '进行中',
        label: '进行中'
      }, {
        value: '已完成',
        label: '已完成'
      }, {
        value: '逾期未完成',
        label: '逾期未完成'
      }],
      option3: [{
        value: '职能部门',
        label: '职能部门'
      }, {
        value: '教学部门',
        label: '教学部门'
      }],
      option4: [{
        value: '我创建的',
        label: '我创建的'
      }, {
        value: '我审核的',
        label: '我审核的'
      }, {
        value: '我参与的',
        label: '我参与的'
      }, {
        value: '我负责的',
        label: '我负责的'
      }],
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
      multipleSelection: []
    }
  },
  mounted() {
    this.getAllItem()
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log('测试multipleSelection')
      console.log(this.multipleSelection)
      // this.tableDataThree = this.multipleSelection
      // for (let i = 0; i < this.multipleSelection.length; i++) {
      //   this.tableDataThree.push(this.multipleSelection[i])
      // }
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
    handleClick(tab, event) {
      console.log(tab, event)
    },
    newTask: function() {
      this.dialogVisible = true
    },
    getAllTask: function() {

    },
    addDepatment: function() {
      this.departmentNum++
      var obj = {
        phmm: '',
        fzr: '',
        id: this.departmentNum
      }
      this.items.push(obj)
    },
    deleteDepartment: function(item) {
      console.log('测试删除')
      console.log(item.id)
      var key = 0
      if (this.items.length === 1) {
        this.items = []
      } else {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id === item) {
            key = this.items[i].id
          }
        }
        this.items.splice(key + 1, 1)
      }
    },
    addLookPoint: function() {
      this.dialogVisibleTwo = true
    },
    getAllItem: function() {
      getAllIndicatorsItems().then(response => {
        console.log('任务发布测试获取所有的指标')
        console.log(response.data.data)
        this.tableData = response.data.data
      })
    },
    addFinal: function() {
      console.log('测试最后添加')
      console.log(this.multipleSelection)
      for (let i = 0; i < this.multipleSelection.length; i++) {
        this.tableDataThree.push(this.multipleSelection[i])
      }
      console.log(this.tableDataThree)
      this.dialogVisibleTwo = false
    },
    deleteTableItem: function(row) {
      console.log('测试监测点删除')
      console.log(row.id)
      var k = 0
      for (let i = 0; i < this.tableDataThree.length; i++) {
        if (this.tableDataThree[i].id === row.id) {
          k = i
          break
        }
      }
      this.tableDataThree.splice(k, 1)
    },
    newMyTask: function() {
      const prams = {
        taskName: this.newTaskForm.taskName,
        taskType: this.newTaskForm.taskType,
        taskState: this.newTaskForm.taskState,
        taskDes: this.newTaskForm.taskDes,
        taskPriority: this.newTaskForm.taskPriority,
        responseDepartment: this.newTaskForm.responseDepartment,
        responsePeople: this.newTaskForm.responsePeople,
        warningTime: this.newTaskForm.warningTime,
        taskAttribute: this.newTaskForm.taskAttribute,
        warningWay: this.newTaskForm.warningWay,
        warningPeople: this.newTaskForm.warningPeople,
        checkDes: this.newTaskForm.checkDes,
        relationIndex: this.newTaskForm.relationIndex,
        approvalProcess: this.newTaskForm.approvalProcess,
        historyRecord: this.newTaskForm.historyRecord,
        startTime: this.newTaskForm.startTime,
        endTime: this.newTaskForm.endTime,
        zgTaskParticipantList: [],
        zgTaskCooperationDepartmentList: []
      }
      newTask(prams).then(response => {
        console.log('测试新建任务接口')
        console.log(response.data)
        this.dialogVisible = false
        this.$refs.childTableThree.getAllTaskData()
      })
    }
  }
}
</script>

<style scoped>
  .all_container {
    width: 100%;
    height: 625px;
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
    float: right;
    margin-top: 20px;margin-right: 20px;
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
</style>
