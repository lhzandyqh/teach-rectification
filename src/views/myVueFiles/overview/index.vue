<template>
  <div class="app-container">
    <div class="plan_overview">
      <div class="first_layer">
        <div class="img_container">
          <img src="../../../assets/icon/guihua.png">
        </div>
        <div class="function_container">
          <h3>规划总览</h3>
          <div class="function_items">
            <span>责任部门：</span>
            <el-select v-model="value1" style="width: 120px" placeholder="请选择">
              <el-option
                v-for="item in option1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-select v-model="value2" style="width: 120px" placeholder="请选择">
              <el-option
                v-for="item in option2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-date-picker
              v-model="value1"
              style="width: 220px"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
        <div class="tongji">
          <h3>规划总数</h3>
          <div>
            <span style="font-size: 15px;color: #4A9FF9"><span style="font-size: 40px;color: #4A9FF9">0</span>个</span>
          </div>
        </div>
      </div>
      <div class="second_layer">
        <div class="second_layer_item">
          <div class="item_content">
            <span>待提审（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>审核中（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>审核未通过（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>未开始（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>进行中（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>已完成（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>逾期未完成（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart_container">
      <echart-one />
    </div>
    <div class="plan_overview two">
      <div class="first_layer">
        <div class="img_container">
          <img src="../../../assets/icon/renwu.png">
        </div>
        <div class="function_container">
          <h3>任务总览</h3>
          <div class="function_items">
            <span>任务类型：</span>
            <el-select v-model="value3" style="width: 120px" placeholder="请选择">
              <el-option
                v-for="item in option3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-select v-model="value4" style="width: 120px" placeholder="请选择">
              <el-option
                v-for="item in option1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-date-picker
              v-model="value1"
              style="width: 220px"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
            <el-button type="primary">搜索</el-button>
          </div>
        </div>
        <div class="tongji">
          <h3>规划总数</h3>
          <div>
            <span style="font-size: 15px;color: #4A9FF9"><span style="font-size: 40px;color: #4A9FF9">0</span>个</span>
          </div>
        </div>
      </div>
      <div class="second_layer">
        <div class="second_layer_item">
          <div class="item_content">
            <span>待提审（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>审核中（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>审核未通过（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>未开始（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>进行中（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>已完成（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="second_layer_item">
          <div class="item_content">
            <span>逾期未完成（个）</span>
            <div class="item_num">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart_container_two">
      <div class="chart_one">
        <echart-two />
      </div>
      <div class="chart_two">
        <div class="chart_two_title">
          <span>任务完成率排名</span>
        </div>
        <table-one />
      </div>
    </div>
  </div>
</template>

<script>
import echartOne from '@/views/myEcharts/overview_chart_one'
import echartTwo from '@/views/myEcharts/overview_chart_two'
import tableOne from '@/views/myTable/overview_table_one'
export default {
  name: 'Index',
  components: {
    echartOne,
    echartTwo,
    tableOne
  },
  data() {
    return {
      option1: [{
        value: '职能部门',
        label: '职能部门'
      }, {
        value: '教学部门',
        label: '教学部门'
      }],
      option2: [{
        value: '开始日期',
        label: '开始日期'
      }, {
        value: '结束日期',
        label: '结束日期'
      }],
      option3: [{
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
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>

<style scoped>
  .plan_overview {
    border-radius: 5px;
    width: 100%;
    height: 260px;
    background-color: white;
  }
  .first_layer {
    background-color: white;
    width: 100%;
    height: 130px;
    border-bottom-style: solid;
    border-bottom-color: #e3e3e3;
    border-right-width: 1px;
  }
  .img_container {
    float: left;
    margin-left: 30px;
    margin-top: 25px;
  }
  .img_container img {
    width: 80px;
    height: 80px;
  }
  .function_container {
    float: left;
    margin-left: 35px;
  }
  .function_container h3 {
    font-weight: normal;
    font-size: 25px;
  }
  .function_items span {
    font-size: 13px;
    color: #7d7d7d;
  }
  .tongji {
    float: right;
    margin-right: 30px;
  }
  .tongji h3 {
    font-weight: normal;
  }
  .second_layer {
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
  }
  .second_layer_item {
    padding-top: 20px;
    margin-top: 10px;
    height: 100px;
    width: 150px;
    /*background-color: #4A9FF9;*/
    border-right-style: solid;
    border-right-width: 2px;
    border-right-color: #e3e3e3;
  }
  .item_content span {
    color: #aaaaaa;
  }
  .item_num {
    margin-top: 10px;
    font-size: 30px;
    color: #6e6e6e;
  }
  .chart_container {
    margin-top: 20px;
    width: 100%;
    height: 300px;
    background-color: white;
    border-radius: 5px;
  }
  .two {
    margin-top: 20px;
  }
  .chart_container_two {
    width: 100%;
    height: 300px;
    background-color: white;
    margin-top: 20px;
  }
  .chart_one {
    width: 60%;
    height: 300px;
    /*background-color: #4A9FF9;*/
    float: left;
  }
  .chart_two {
    width: 40%;
    height: 300px;
    /*background-color: #f92687;*/
    float: left;
  }
  .chart_two_title {
    margin-top: 20px;
    font-size: 18px;
    color: #199dbf;
  }
</style>
