<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="整体规划" name="first">
        <div class="content_container">
          <div class="content_function">
            <div class="content_function_first">
              <div class="function_item">
                <span>展示类型:</span>
                <el-select v-model="value1" style="width: 120px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>规划层面:</span>
                <el-select v-model="search.cm" style="width: 120px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>总规划名称:</span>
                <el-select v-model="value3" style="width: 120px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="content_function_second">
              <div class="function_item">
                <span>规划状态：</span>
                <el-select v-model="search.state" style="width: 120px;margin-left: 5px" placeholder="请选择">
                  <el-option
                    v-for="item in option4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>责任部门：</span>
                <el-cascader
                  v-model="search.bumen"
                  :options="optionsone"
                  @change="handleChange"
                />
              </div>
              <div class="function_item">
                <span>规划名称：</span>
                <el-input v-model="search.name" style="width: 200px;margin-left: 5px" placeholder="请输入内容" />
              </div>
              <div class="button-container">
                <el-button type="primary" icon="el-icon-plus" @click="beginPlan">新建规划</el-button>
                <el-button type="primary" @click="beginSearch">搜索</el-button>
              </div>
            </div>
          </div>
          <div class="content_table">
            <planningtableone :table-data-one="tableDataOne" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="个体规划" name="second">
        <div class="content_container">
          <div class="content_function">
            <div class="content_function_first">
              <div class="function_item">
                <span>展示类型:</span>
                <el-select v-model="value1" style="width: 120px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>规划时间:</span>
                <el-select v-model="value8" style="width: 120px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option8"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="content_function_second">
              <div class="function_item">
                <span>规划状态：</span>
                <el-select v-model="value4" style="width: 120px;margin-left: 5px" placeholder="请选择">
                  <el-option
                    v-for="item in option4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>规划名称：</span>
                <el-input v-model="input1" style="width: 200px;margin-left: 5px" placeholder="请输入内容" />
              </div>
              <div class="button-container">
                <el-button type="primary" icon="el-icon-plus" @click="beginPersonalPlan">新建个体规划</el-button>
                <el-button type="primary">搜索</el-button>
              </div>
            </div>
          </div>
          <div class="content_table">
            <planningtabletwo :table-data-two="tableDataTwo" />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="新建规划"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">规划名称：</span>
            </div>
            <div class="content">
              <el-input v-model="form.name" placeholder="请输入内容" />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">规划层面：</span>
            </div>
            <div class="content">
              <el-select v-model="form.cm" style="width: 185px" placeholder="请选择">
                <el-option label="学校" value="学校" />
                <el-option label="专业" value="专业" />
                <el-option label="课程" value="课程" />
                <el-option label="教师" value="教师" />
                <el-option label="学生" value="学生" />
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">责任部门：</span>
            </div>
            <div class="content">
              <!--              <el-input placeholder="请输入内容" v-model="form.name" />-->
              <el-cascader
                v-model="form.zrbm"
                :options="optionsone"
                @change="handleChange"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">责任人:     </span>
            </div>
            <div class="content">
              <el-input v-model="form.zrr" placeholder="请输入内容" />
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
                v-model="form.begintime"
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
                v-model="form.endtime"
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
        <el-col :span="2">
          <div class="">
            <span style="font-weight: bolder">规划描述：</span>
          </div>
        </el-col>
        <el-col :span="22">
          <el-input
            v-model="form.textone"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="2">
          <div class="">
            <span style="font-weight: bolder">部门职责：</span>
          </div>
        </el-col>
        <el-col :span="22">
          <el-input
            v-model="form.texttwo"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitplan">提 交</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="新建个人规划"
      :visible.sync="dialogVisibleTwo"
      width="60%"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="12">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">规划名称：</span>
            </div>
            <div class="content">
              <el-input v-model="myform.name" placeholder="请输入内容" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">规划层面：</span>
            </div>
            <div class="content">
              <el-select v-model="myform.cm" style="width: 185px" placeholder="请选择">
                <el-option label="个人发展规划" value="个人发展规划" />
                <el-option label="专业个体发展规划" value="专业个体发展规划" />
                <el-option label="课程个体发展规划" value="课程个体发展规划" />
              </el-select>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="12">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">开始时间：</span>
            </div>
            <div class="content">
              <el-date-picker
                v-model="myform.begintime"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">结束时间：</span>
            </div>
            <div class="content">
              <el-date-picker
                v-model="myform.endtime"
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
        <el-col :span="2">
          <div class="">
            <span style="font-weight: bolder">规划描述：</span>
          </div>
        </el-col>
        <el-col :span="22">
          <el-input
            v-model="myform.textone"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleTwo = false">取 消</el-button>
        <el-button type="primary" @click="submitPersonalPlan">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import planningtableone from '@/views/myTable/planning_table_one'
import planningtabletwo from '@/views/myTable/planning_table_two'
import { getAllWholePlan, newWholePlan, searchPlan } from '@/api/getData'
export default {
  name: 'IntelligentDisplay',
  components: {
    planningtableone,
    planningtabletwo
  },
  data() {
    return {
      search: {
        cm: '',
        name: '',
        state: '',
        bumen: ''
      },
      form: {
        name: '',
        cm: '',
        zrbm: '',
        zrr: '',
        begintime: '',
        endtime: '',
        textone: '',
        texttwo: ''
      },
      myform: {
        name: '',
        cm: '',
        zrr: '',
        begintime: '',
        endtime: '',
        textone: ''
      },
      dialogVisible: false,
      dialogVisibleTwo: false,
      dialogVisibleThree: false,
      option1: [{
        value: '列表视图',
        label: '列表视图'
      }, {
        value: '体系视图',
        label: '体系视图'
      }],
      value5: '',
      option8: [{
        value: '2020',
        label: '2020'
      }, {
        value: '2019',
        label: '2019'
      }, {
        value: '2018',
        label: '2018'
      }, {
        value: '2017',
        label: '2017'
      }],
      option2: [{
        value: '全部',
        label: '全部'
      }, {
        value: '学校',
        label: '学校'
      }, {
        value: '专业',
        label: '专业'
      }, {
        value: '课程',
        label: '课程'
      }, {
        value: '教师',
        label: '教师'
      }, {
        value: '学生',
        label: '学生'
      }],
      option3: [{
        value: '全部',
        label: '全部'
      }],
      option4: [{
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
      option5: [{
        value: '职能部门',
        label: '职能部门'
      }, {
        value: '教学部门',
        label: '教学部门'
      }],
      value: '',
      value2: '',
      value3: '',
      value4: '',
      value8: '',
      input1: '',
      activeName: 'first',
      currentPage4: 1,
      tableDataOne: [],
      tableDataTwo: [],
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
      ]
    }
  },
  mounted() {
    this.getAllPlan()
    this.getAllPersonalPlan()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    getAllPlan: function() {
      getAllWholePlan().then(response => {
        console.log('测试获取所有整体规划')
        console.log(response.data)
        this.tableDataOne = response.data.data
      })
    },
    getAllPersonalPlan: function() {
      const prmas = {
        responsePeople: 'demoData'
      }
      searchPlan(prmas).then(response => {
        console.log('测试获取所有个体规划')
        console.log(response.data)
        this.tableDataTwo = response.data.data
      })
    },
    beginPlan: function() {
      this.dialogVisible = true
    },
    beginPersonalPlan: function() {
      this.dialogVisibleTwo = true
    },
    submitplan: function() {
      const prams = {
        parentId: 1,
        approvalProcess: 'demoData',
        planningName: this.form.name,
        planningLevel: this.form.cm,
        responsePeople: this.form.zrr,
        responseDepartment: this.form.zrbm[this.form.zrbm.length - 1],
        startTime: this.form.begintime,
        endTime: this.form.endtime,
        planningDes: this.form.textone,
        responseDuty: this.form.texttwo
      }
      newWholePlan(prams).then(response => {
        console.log('测试提交新规划')
        console.log(response.data)
        this.dialogVisible = false
        this.getAllPlan()
      })
    },
    submitPersonalPlan: function() {
      const prams = {
        parentId: 1,
        approvalProcess: 'demoData',
        planningName: this.myform.name,
        planningLevel: this.myform.cm,
        responsePeople: 'demoData',
        // responseDepartment: this.form.zrbm[this.form.zrbm.length - 1],
        startTime: this.myform.begintime,
        endTime: this.myform.endtime,
        planningDes: this.myform.textone
        // responseDuty: this.form.texttwo
      }
      newWholePlan(prams).then(response => {
        console.log('测试提交个人规划')
        console.log(response.data)
        this.dialogVisibleTwo = false
        this.getAllPersonalPlan()
      })
    },
    beginSearch: function() {
      const prams = {
        planningName: this.search.name,
        planningLevel: this.search.cm,
        state: this.search.state,
        responseDepartment: this.search.bumen[this.search.bumen.length - 1]
      }
      searchPlan(prams).then(response => {
        console.log('测试搜索')
        console.log(response.data)
        this.tableDataOne = response.data.data
      })
    }
  }
}
</script>

<style scoped>
  .content_container {
    width: 100%;
    /*height: 700px;*/
    background-color: white;
  }
  .content_function {
    width: 100%;
    height: 150px;
    background-color: white;
    border-bottom-style: solid;
    border-bottom-color: #bcbcbc;
    border-bottom-width: 1px;
  }
  .content_function_first {
    width: 100%;
    height: 75px;
  }
  .function_item {
    font-size: 14px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .content_function_second {
    width: 100%;
    height: 75px;
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
