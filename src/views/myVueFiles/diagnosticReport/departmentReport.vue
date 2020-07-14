<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="系统报告" name="first">
        <div class="all_container">
          <div class="first_container">
            <div class="function_item">
              <span>学年:</span>
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
              <span>报告名称:</span>
              <el-input v-model="input" style="width: 200px;margin-left: 15px" placeholder="请输入报告名称" />
            </div>
            <div class="function_item">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="second_container">
            <diagnostictableone />
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
      <el-tab-pane label="上传报告" name="second">
        <div class="all_container">
          <div class="first_container">
            <div class="function_item">
              <span>学年:</span>
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
              <span>报告名称:</span>
              <el-input v-model="input" style="width: 200px;margin-left: 15px" placeholder="请输入报告名称" />
            </div>
            <div class="function_item">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="second_container">
            <diagnostictabletwo />
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
  </div>
</template>

<script>
import diagnostictableone from '@/views/myTable/diagnostic_table_one'
import diagnostictabletwo from '@/views/myTable/diagnostic_table_two'
export default {
  name: 'DepartmentReport',
  components: {
    diagnostictableone,
    diagnostictabletwo
  },
  data() {
    return {
      input: '',
      value1: '',
      option1: [{
        value: '全部',
        label: '全部'
      }, {
        value: '2019-2020',
        label: '2019-2020'
      }, {
        value: '2018-2019',
        label: '2018-2019'
      }, {
        value: '2017-2018',
        label: '2017-2018'
      }, {
        value: '2016-2017',
        label: '2016-2017'
      }, {
        value: '2015-2016',
        label: '2015-2016'
      }],
      activeName: 'first',
      currentPage4: '1'
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
  .block {
    text-align: center;
  }
</style>
