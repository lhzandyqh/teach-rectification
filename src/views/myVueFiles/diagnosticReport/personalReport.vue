<template>
  <div class="app-container">
    <div class="first_contaienr">
      <div class="function_item">
        <span>报告对象:</span>
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
        <span>筛选条件:</span>
        <el-select v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请选择">
          <el-option
            v-for="item in option1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="first_contaienr juli">
      <div class="function_item">
        <span>学年:</span>
        <el-select v-model="value3" style="width: 150px;margin-left: 15px" placeholder="请选择">
          <el-option
            v-for="item in option3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="function_item">
        <span>学期:</span>
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
        <span>关键字:</span>
        <el-input v-model="input" style="width: 200px;margin-left: 15px" placeholder="请输关键字" />
      </div>
      <div class="function_item">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div class="main_container juli">
      <div class="item_content">
        <div class="item zi_border">
          <span>专业报告数(个)</span>
          <div class="shuzi">561</div>
        </div>
        <div class="item lan_border">
          <span>课程报告数(个)</span>
          <div class="shuzi">345</div>
        </div>
        <div class="item hong_border">
          <span>教师报告数(个)</span>
          <div class="shuzi">145</div>
        </div>
        <div class="item lv_border">
          <span>学生报告数(个)</span>
          <div class="shuzi">274</div>
        </div>
      </div>
      <div>
        <diagnostictablefive />
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
  </div>
</template>

<script>
import diagnostictablefive from '@/views/myTable/diagnostic_table_five'
export default {
  name: 'PersonalReport',
  components: {
    diagnostictablefive
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      option1: [{
        value: '全部',
        label: '全部'
      }, {
        value: '个人',
        label: '个人'
      }, {
        value: '系部',
        label: '系部'
      }],
      option2: [{
        value: '全部',
        label: '全部'
      }, {
        value: '第一学期',
        label: '第一学期'
      }, {
        value: '第二学期',
        label: '第二学期'
      }],
      option3: [{
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
      input: '',
      currentPage4: 1
    }
  }
}
</script>

<style scoped>
  .juli {
    margin-top: 15px;
  }
  .first_contaienr{
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
  .main_container {
    width: 100%;
    /*height: 650px;*/
    background-color: white;
  }
  .item_content {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom-style: solid;
    border-bottom-color: #bcbcbc;
    border-bottom-width: 1px;
  }
  .item {
    margin-top: 15px;
    /*padding-top: 10px;*/
    height: 100px;
    width: 250px;
    border-style: solid;
    border-width: 1px;
    border-color: #d7d7d7;
  }
  .item span {
    display: block;
    height: 100px;
    line-height: 100px;
    float: left;
    margin-left: 10px;
    font-size: 14px;
  }
  .shuzi {
    display: block;
    height: 100px;
    line-height: 100px;
    float: right;
    margin-right: 25px;
    font-size: 25px;
  }
  .zi_border {
    border-top-width: 2px;
    border-top-color: #d45cf9;
  }
  .lan_border {
    border-top-width: 2px;
    border-top-color: #57d8f9;
  }
  .hong_border {
    border-top-width: 2px;
    border-top-color: #f93f49;
  }
  .lv_border {
    border-top-width: 2px;
    border-top-color: #85ec76;
  }
  .block {
    text-align: center;
  }
</style>
