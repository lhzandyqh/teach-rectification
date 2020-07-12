<template>
  <div class="app-container">
    <div class="first_container">
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
        <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择责任部门">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" style="width: 150px" placeholder="起止时间">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-date-picker
          v-model="value1"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
      <div class="button_container">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div class="second_container">
      <div class="second_container_title">
        <span>任务趋势分析</span>
      </div>
      <div class="second_container_chart">
        <taskchartone />
      </div>
    </div>
    <div class="second_container">
      <div class="second_container_title">
        <span>任务预警分析</span>
      </div>
      <div class="second_container_chart">
        <div class="content">
          <div class="main_content">
            <div class="mian_title">
              <span>预警情况</span>
            </div>
            <div style="margin-top: -35px">
              <taskcharttwo />
            </div>
          </div>
        </div>
        <div class="content">
          <div class="main_content">
            <div class="mian_title">
              <span>预警排名</span>
            </div>
            <div style="margin-top: -20px">
              <tasktableone />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second_container">
      <div class="second_container_title">
        <span>任务完成情况分析</span>
      </div>
      <div class="second_container_chart">
        <tasktabletwo />
        <div class="block">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="13"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskchartone from '@/views/myEcharts/task_chart_one'
import taskcharttwo from '@/views/myEcharts/task_chart_two'
import tasktableone from '@/views/myTable/task_table_one'
import tasktabletwo from '@/views/myTable/task_table_two'
export default {
  name: 'QualityMonitoring',
  components: {
    taskchartone,
    taskcharttwo,
    tasktableone,
    tasktabletwo
  },
  data() {
    return {
      currentPage4: 1
    }
  }
}
</script>

<style scoped>
  .first_container {
    width: 100%;
    height: 80px;
    background-color: white;
  }
  .function_item {
    font-size: 14px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .button_container {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
  .second_container {
    margin-top: 20px;
    width: 100%;
    height: 400px;
    background-color: white;
  }
  .second_container_title {
    width: 100%;
    height: 80px;
    border-bottom-style: solid;
    border-bottom-color: #d7d7d7;
    border-bottom-width: 1px;
  }
  .second_container_title span {
    display: block;
    height: 80px;
    line-height: 80px;
    font-size: 15px;
    margin-left: 20px;
    font-weight: bolder;
    color: #707070;
  }
  .content {
    float: left;
    width: 50%;
    height: 320px;
    /*background-color: #999999;*/
    padding: 20px;
  }
  .main_content {
    float: left;
    width: 100%;
    height: 100%;
    background-color: white;
    border-style: solid;
    border-color: #999999;
    border-width: 1px;
  }
  .mian_title {
    height: 60px;
    border-bottom-color: #cbcbcb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    background-color: #f0f0f0;
  }
  .mian_title span {
    height: 60px;
    line-height: 60px;
    font-size: 15px;
    display: block;
    margin-left: 20px;
  }
  .block {
    text-align: center;
  }
</style>
