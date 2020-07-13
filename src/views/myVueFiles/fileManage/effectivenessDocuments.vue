<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div class="all_container">
          <div class="first_container">
            <div class="one">
              <div class="function_item">
                <span>团队/个人:</span>
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
                <span>奖项类型:</span>
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
                <span>级别:</span>
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
                <span>类别:</span>
                <el-select v-model="value4" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>等级:</span>
                <el-select v-model="value5" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>上传时间:</span>
                <el-date-picker
                  v-model="value6"
                  style="width: 250px;margin-left: 15px"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </div>
            </div>
            <div class="three">
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
            <filetablefive />
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
            <div class="one">
              <div class="function_item">
                <span>团队/个人:</span>
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
                <span>奖项类型:</span>
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
                <span>级别:</span>
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
                <span>类别:</span>
                <el-select v-model="value4" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>等级:</span>
                <el-select v-model="value5" style="width: 200px;margin-left: 15px" placeholder="请选择">
                  <el-option
                    v-for="item in option5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="function_item">
                <span>上传时间:</span>
                <el-date-picker
                  v-model="value6"
                  style="width: 250px;margin-left: 15px"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </div>
            </div>
            <div class="three">
              <div class="function_item">
                <span>文档名称:</span>
                <el-input v-model="input7" style="width: 200px;margin-left: 15px" placeholder="请输入文档名称" />
              </div>
              <div class="function_item">
                <el-button type="primary">搜索</el-button>
                <el-button type="primary">重置</el-button>
              </div>
            </div>
          </div>
          <div class="second_container">
            <filetablesix />
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
import filetablefive from '@/views/myTable/file_table_five'
import filetablesix from '@/views/myTable/file_table_six'
export default {
  name: 'EffectivenessDocuments',
  components: {
    filetablefive,
    filetablesix
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      input1: '',
      input2: '',
      option1: [{
        value: '全部',
        label: '全部'
      }, {
        value: '团队',
        label: '团队'
      }, {
        value: '个人',
        label: '个人'
      }],
      option2: [{
        value: '全部',
        label: '全部'
      }, {
        value: '科研成效',
        label: '科研成效'
      }, {
        value: '科研成效',
        label: '科研成效'
      }],
      option3: [{
        value: '全部',
        label: '全部'
      }, {
        value: '国家级',
        label: '国家级'
      }, {
        value: '省部级',
        label: '省部级'
      }, {
        value: '地市级',
        label: '地市级'
      }, {
        value: '院校级',
        label: '院校级'
      }],
      option4: [{
        value: '全部',
        label: '全部'
      }, {
        value: 'A类',
        label: 'A类'
      }, {
        value: 'B类',
        label: 'B类'
      }, {
        value: 'C类',
        label: 'C类'
      }],
      option5: [{
        value: '全部',
        label: '全部'
      }, {
        value: '一等奖',
        label: '一等奖'
      }, {
        value: '二等奖',
        label: '二等奖'
      }, {
        value: '三等奖',
        label: '三等奖'
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
    height: 200px;
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
    width: 100%;
    height: 60px;
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
