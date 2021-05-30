<template>
  <div class="app-container">
    <div class="main_container">
      <div class="left">
        <div class="left_content">
          <!--          <div class="button_container">-->
          <!--            <el-button-group>-->
          <!--              <el-button type="primary" size="small">新建</el-button>-->
          <!--              <el-button type="primary" size="small" disabled>编辑</el-button>-->
          <!--              <el-button type="primary" size="small" disabled>删除</el-button>-->
          <!--            </el-button-group>-->
          <!--          </div>-->
          <div class="tree_container">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
          </div>
        </div>
      </div>
      <div class="right">
        <div v-if="rightflag" class="right_first">
          <div class="right_first_container">
            <div class="function_item">
              <span>监测点重要级别:</span>
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
              <span>监测点名称:</span>
              <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />
            </div>
            <div class="button-container">
              <!--              <el-button type="primary" size="small" @click="newPoint">新建监测点</el-button>-->
              <el-button type="primary" size="small">导出检测点</el-button>
              <el-button type="primary" size="small">搜索</el-button>
            </div>
          </div>
          <div class="right_second_container">
            <planningtablethree :table-data-one="tableDataOne" />
          </div>
        </div>
        <div v-if="!rightflag" class="right_second">
          <indicators-table :table-data="tableData" :table-style="{ width:'100%' }" />
        </div>
      </div>
    </div>
    <el-dialog
      title="新建监测点"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">监测点名称：</span>
            </div>
            <div class="content">
              <el-input v-model="form.name" placeholder="请输入内容" />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">监测点级别：</span>
            </div>
            <div class="content">
              <el-select v-model="form.jb" style="width: 185px" placeholder="请选择">
                <el-option label="重要" value="重要" />
                <el-option label="一般" value="一般" />
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">责任部门：</span>
            </div>
            <div class="content">
              <!--              <el-input placeholder="请输入内容" v-model="form.name" />-->
              <el-cascader
                v-model="form.zrbm"
                :options="optionsone"
                @change="handleChange"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">责任人:     </span>
            </div>
            <div class="content">
              <el-input v-model="form.zrr" placeholder="请输入内容" />
            </div>
          </div>
        </el-col>
        <el-col :span="8" />
        <el-col :span="8" />
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import planningtablethree from '@/views/myTable/planning_table_three'
import IndicatorsTable from '@/views/myVueFiles/planningManage/IndicatorsTable'
import { getRectificationIndicators, getAllIndicatorsItems } from '@/api/getData.js'
// import { getIndicatorsDetail } from '@/api/getData.js'
import axios from 'axios'
export default {
  name: 'IndicatorsLibrary',
  components: {
    planningtablethree,
    IndicatorsTable
  },
  data() {
    return {
      pagesize: '10',
      currentPage4: '',
      dialogVisible: false,
      tableDataOne: [],
      tableData: [
        { key: '监测点名称', value: '1001' },
        { key: '监测点重要级别', value: '篮球' },
        { key: '责任部门', value: '120.00' },
        { key: '责任人', value: '2017-03-01' },
        { key: '数据类型', value: '在线支付' },
        { key: '计量单位', value: '北京市海淀区西北旺镇' },
        { key: '数据项', value: '1001' },
        { key: '接受方式', value: '篮球' },
        { key: '关联指标', value: '120.00' },
        { key: '目标值', value: '2017-03-01' },
        { key: '标准值', value: '在线支付' },
        { key: '预警值', value: '北京市海淀区西北旺镇' },
        { key: '当前值', value: '在线支付' },
        { key: '预警规则', value: '北京市海淀区西北旺镇' }
      ],
      rightflag: true,
      value1: '',
      value2: '',
      option1: [{
        value: '全部',
        label: '全部'
      }, {
        value: '重要',
        label: '重要'
      }, {
        value: '一般',
        label: '一般'
      }],
      option2: [{
        value: '职能部门',
        label: '职能部门'
      }, {
        value: '教学部门',
        label: '教学部门'
      }],
      data: [],
      defaultProps: {
        children: 'children',
        // label: 'label'
        label: 'levelName'
      },
      form: {
        name: '',
        zrr: '',
        jb: '',
        zrbm: ''
      },
      optionsone: [
        {
          value: '职能部门',
          label: '职能部门',
          children: [{
            value: '党政群管理机构',
            label: '党政群管理机构',
            children: [{
              value: '后勤管理处',
              label: '后勤管理处'
            }, {
              value: '教务处',
              label: '教务处'
            }, {
              value: '教学督导办公室',
              label: '教学督导办公室'
            }, {
              value: '行政督导办公室',
              label: '行政督导办公室'
            }, {
              value: '学工部',
              label: '学工部'
            }, {
              value: '财务处',
              label: '财务处'
            }, {
              value: '工会',
              label: '工会'
            }, {
              value: '招生就业指导中心',
              label: '招生就业指导中心'
            }, {
              value: '院领导',
              label: '院领导'
            }, {
              value: '党委、院长办公室',
              label: '党委、院长办公室'
            }, {
              value: '组宣部',
              label: '组宣部'
            }, {
              value: '安全工作处',
              label: '安全工作处'
            }, {
              value: '纪检处',
              label: '纪检处'
            }, {
              value: '人事处',
              label: '人事处'
            }]
          }, {
            value: '教学辅助机构',
            label: '教学辅助机构',
            children: [{
              value: '信息中心',
              label: '信息中心'
            }, {
              value: '科研处',
              label: '科研处'
            }, {
              value: '国际教育交流中心',
              label: '国际教育交流中心'
            }]
          }, {
            value: '研究机构',
            label: '研究机构',
            children: [{
              value: '高等职业教育研究所',
              label: '高等职业教育研究所'
            }]
          }]
        }, {
          value: '教学部门',
          label: '教学部门'
        }
      ]
    }
  },
  mounted() {
    this.getIndicators()
    this.getAllItem()
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // createObj: function(pre, cur, index, arr) {
    //   var obj = {}
    //   obj[cur] = pre
    //   return obj
    // },
    getIndicators: function() {
      getRectificationIndicators().then(response => {
        console.log('测试接口')
        console.log(response.data.data)
        this.data = response.data.data
      })
    },
    handleNodeClick(data) {
      console.log(data)
      if (data.children.length === 0) {
        console.log('可以显示')
        console.log(data.description)
        console.log(data.id)
        console.log(data.children)
        // getIndicatorsDetail(data.id).then(response => {
        //   console.log('测试指标详情')
        //   console.log(response.data.data)
        //   this.tableData[0].value = response.data.data.jcdmc
        //   this.tableData[1].value = response.data.data.jcdzyjb
        var url = 'https://zhongkeruitong.top/rectification/functions/index/getZgIndex/' + data.id
        axios.get(url).then((res) => {
          console.log('测试指标详情')
          console.log(res.data)
          this.tableData[0].value = res.data.data.jcdmc
          this.tableData[1].value = res.data.data.jcdzyjb
          this.tableData[2].value = res.data.data.zrbm
          this.tableData[3].value = res.data.data.zrr
          this.tableData[4].value = res.data.data.sjlx
          this.tableData[5].value = res.data.data.jldw
          this.tableData[6].value = res.data.data.sjx
          this.tableData[7].value = res.data.data.jsfs
          this.tableData[8].value = res.data.data.glzb
          this.tableData[9].value = res.data.data.mbz
          this.tableData[10].value = res.data.data.bzz
          this.tableData[11].value = res.data.data.yjz
          this.tableData[12].value = res.data.data.dqz
          this.tableData[13].value = res.data.data.yjgz
        })
        // })
        this.rightflag = false
      } else {
        console.log('未到最底层')
        console.log(data.children)
        this.rightflag = true
      }
    },
    newPoint: function() {
      this.dialogVisible = true
    },
    getAllItem: function() {
      getAllIndicatorsItems().then(response => {
        console.log('测试获取所有的指标')
        console.log(response.data.data)
        this.tableDataOne = response.data.data
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    }
  }
}
</script>

<style scoped>
  .left {
    width: 300px;
    height: 700px;
    float: left;
    /*background: rgb(139, 214, 78);*/
    text-align: center;
    /*line-height: 150px;*/
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .right {
    /*height: 650px;*/
    padding-bottom: 10px;
    /*background: rgb(170, 54, 236);*/
    background-color: white;
    /*text-align: center;*/
    /*line-height: 300px;*/
    /*font-size: 40px;*/
    overflow: hidden;
  }
  .right_first_container {
    width: 100%;
    height: 80px;
    background-color: white;
    border-bottom-style: solid;
    border-bottom-color: #bcbcbc;
    border-bottom-width: 1px;
  }
  .left_content {
    width: 100%;
    height: 600px;
    background-color: white;
  }
  .button_container {
    padding-top: 20px;
  }
  .tree_container {
    padding-top: 20px;
    padding-left: 40px;
  }
  .function_item {
    font-size: 14px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .button-container {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
  .block {
    text-align: center;
  }
  .single{
    display: inline-block;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
</style>
