<template>
  <div class="app-container">
    <div class="all_container">
      <div class="first_container">
        <div class="function_item">
          <el-button type="primary" icon="el-icon-plus">创建流程</el-button>
        </div>
      </div>
      <div class="second_container">
        <processtableone />
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
import processtableone from '@/views/myTable/process_table_one'
export default {
  name: 'Index',
  components: {
    processtableone
  },
  data() {
    return {
      currentPage4: 1
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
    float: right;
    margin-right: 30px;
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
