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
              <el-button type="primary" icon="el-icon-plus">新建任务</el-button>
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="second_container">
            <tasktablethree />
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
                :total="235"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tasktablethree from '@/views/myTable/task_table_three'
import tasktablefour from '@/views/myTable/task_table_four'
export default {
  name: 'TaskRelease',
  components: {
    tasktablethree,
    tasktablefour
  },
  data() {
    return {
      activeName: 'first',
      value1: '',
      value2: '',
      value3: '',
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
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
</style>
