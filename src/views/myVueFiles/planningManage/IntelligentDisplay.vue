<template>
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
                <el-select v-model="value2" style="width: 120px;margin-left: 15px" placeholder="请选择">
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
                <span>责任部门：</span>
                <el-select v-model="value5" style="width: 120px;margin-left: 5px" placeholder="请选择">
                  <el-option
                    v-for="item in option5"
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
                <el-button type="primary" icon="el-icon-plus">新建规划</el-button>
                <el-button type="primary">搜索</el-button>
              </div>
            </div>
          </div>
          <div class="content_table">
            <planningtableone />
          </div>
          <div class="block">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="235"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
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
                <span>规划层面:</span>
                <el-select v-model="value2" style="width: 120px;margin-left: 15px" placeholder="请选择">
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
                <span>责任部门：</span>
                <el-select v-model="value5" style="width: 120px;margin-left: 5px" placeholder="请选择">
                  <el-option
                    v-for="item in option5"
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
                <el-button type="primary" icon="el-icon-plus">新建规划</el-button>
                <el-button type="primary">搜索</el-button>
              </div>
            </div>
          </div>
          <div class="content_table">
            <planningtabletwo />
          </div>
          <div class="block">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="235"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import planningtableone from '@/views/myTable/planning_table_one'
import planningtabletwo from '@/views/myTable/planning_table_two'
export default {
  name: 'IntelligentDisplay',
  components: {
    planningtableone,
    planningtabletwo
  },
  data() {
    return {
      option1: [{
        value: '列表视图',
        label: '列表视图'
      }, {
        value: '体系视图',
        label: '体系视图'
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
      value5: '',
      input1: '',
      activeName: 'first',
      currentPage4: 1
    }
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
    }
  }
}
</script>

<style scoped>
  .content_container {
    width: 100%;
    height: 700px;
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
</style>
