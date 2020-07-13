<template>
  <div class="app-container">
    <div class="app-container">
      <div class="all_container">
        <div class="first_container">
          <div class="function_item">
            <span>文档名称:</span>
            <el-input v-model="input" style="width: 200px;margin-left: 15px" placeholder="请输入文档名称" />
          </div>
          <div class="function_item ">
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="function_item floatright">
            <el-button type="primary" icon="el-icon-plus">新建备案表</el-button>
          </div>
        </div>
        <div class="second_container">
          <majortableone />
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
    </div>
  </div>
</template>

<script>
import majortableone from '@/views/myTable/major_table_one'
export default {
  name: 'Index',
  components: {
    majortableone
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
  .floatright {
    float: right;
    margin-right: 20px;
  }
</style>
