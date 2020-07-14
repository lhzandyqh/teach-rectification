<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div class="all_container">
          <div class="first_container">
            <div class="one">
              <div class="function_item">
                <span>规划类型:</span>
                <el-select v-model="value1" style="width: 200px;margin-left: 15px" placeholder="请选择">
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
                <el-select v-model="value2" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>所属规划:</span>
                <el-select v-model="value3" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="two">
              <div class="function_item">
                <span>上传时间:</span>
                <el-date-picker
                  v-model="value4"
                  style="width: 250px;margin-left: 15px"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </div>
              <div class="function_item">
                <span>文档名称:</span>
                <el-input v-model="input1" style="width: 200px;margin-left: 15px" placeholder="请输入文档名称" />
              </div>
              <div class="function_item">
                <span>上传人:</span>
                <el-input v-model="input2" style="width: 200px;margin-left: 15px" placeholder="请输入姓名/教工号" />
              </div>
              <div class="function_item">
                <el-button type="primary">搜索</el-button>
                <el-button type="primary">重置</el-button>
              </div>
            </div>
          </div>
          <div class="second_container">
            <filetableone />
            <div class="block">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="5"
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
            <div class="one">
              <div class="function_item">
                <span>规划类型:</span>
                <el-select v-model="value1" style="width: 200px;margin-left: 15px" placeholder="请选择">
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
                <el-select v-model="value2" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>所属规划:</span>
                <el-select v-model="value" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="two">
              <div class="function_item">
                <span>上传时间:</span>
                <el-date-picker
                  v-model="value4"
                  style="width: 250px;margin-left: 15px"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </div>
              <div class="function_item">
                <span>文档名称:</span>
                <el-input v-model="input1" style="width: 200px;margin-left: 15px" placeholder="请输入文档名称" />
              </div>
              <div class="function_item">
                <span>上传人:</span>
                <el-input v-model="input2" style="width: 200px;margin-left: 15px" placeholder="请输入姓名/教工号" />
              </div>
              <div class="function_item">
                <el-button type="primary">搜索</el-button>
                <el-button type="primary">重置</el-button>
              </div>
            </div>
          </div>
          <div class="second_container">
            <filetabletwo />
            <div class="block">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="0"
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
import filetableone from '@/views/myTable/file_table_three'
import filetabletwo from '@/views/myTable/file_table_four'
export default {
  name: 'PlanningDocuments',
  components: {
    filetableone,
    filetabletwo
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      input1: '',
      input2: '',
      option1: [{
        value: '个人规划',
        label: '个人规划'
      }, {
        value: '整体规划',
        label: '整体规划'
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
      activeName: 'first',
      currentPage4: 1
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
    height: 150px;
    /*background-color: pink;*/
    border-bottom-style: solid;
    border-bottom-color: #bcbcbc;
    border-bottom-width: 1px;
  }
  .one {
    width: 100%;
    height: 60px;
  }
  .two {
    height: 60px;
    width: 100%;
  }
  .three {
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
