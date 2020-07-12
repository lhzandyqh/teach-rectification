<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div class="all_container">
          <div class="first_container">
            <div class="one_layer">
              <div class="function_item">
                <span>预警状态:</span>
                <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>任务类型:</span>
                <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>责任部门:</span>
                <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>任务类型:</span>
                <el-input v-model="input" style="width: 150px;margin-left: 15px" placeholder="请输入内容" />
              </div>
            </div>
            <div class="two_layer">
              <div class="function_item">
                <span>预警日期:</span>
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </div>
              <div class="function_item">
                <el-button type="primary">搜索</el-button>
              </div>
            </div>
          </div>
          <div class="second_container">
            <tasktablefive />
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
      <el-tab-pane label="个人" name="second">
        <div class="all_container">
          <div class="first_container">
            <div class="one_layer">
              <div class="function_item">
                <span>预警状态:</span>
                <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>任务类型:</span>
                <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>责任部门:</span>
                <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>任务类型:</span>
                <el-input v-model="input" style="width: 150px;margin-left: 15px" placeholder="请输入内容" />
              </div>
            </div>
            <div class="two_layer">
              <div class="function_item">
                <span>预警日期:</span>
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </div>
              <div class="function_item">
                <el-button type="primary">搜索</el-button>
              </div>
            </div>
          </div>
          <div class="second_container">
            <tasktablesix />
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
import tasktablefive from '@/views/myTable/task_table_five'
import tasktablesix from '@/views/myTable/task_table_six'
export default {
  name: 'WarningList',
  components: {
    tasktablefive,
    tasktablesix
  },
  data() {
    return {
      activeName: 'first'
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
    /*height: 625px;*/
    background-color: white;
  }
  .first_container {
    width: 100%;
    height: 140px;
    /*background-color: pink;*/
    border-bottom-style: solid;
    border-bottom-color: #bcbcbc;
    border-bottom-width: 1px;
  }
  .one_layer .two_layer {
    width: 100%;
    height: 50px;
  }
  .function_item {
    font-size: 14px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .block {
    text-align: center;
  }
</style>
