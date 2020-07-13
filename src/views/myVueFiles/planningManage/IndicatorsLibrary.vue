<template>
  <div class="app-container">
    <div class="main_container">
      <div class="left">
        <div class="left_content">
          <div class="button_container">
            <el-button-group>
              <el-button type="primary" size="small">新建</el-button>
              <el-button type="primary" size="small" disabled>编辑</el-button>
              <el-button type="primary" size="small" disabled>删除</el-button>
            </el-button-group>
          </div>
          <div class="tree_container">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
          </div>
        </div>
      </div>
      <div class="right">
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
            <el-button type="primary" size="small">新建监测点</el-button>
            <el-button type="primary" size="small">导出检测点</el-button>
            <el-button type="primary" size="small">搜索</el-button>
          </div>
        </div>
        <div class="right_second_container">
          <planningtablethree />
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
  </div>
</template>

<script>
import planningtablethree from '@/views/myTable/planning_table_three'
export default {
  name: 'IndicatorsLibrary',
  components: {
    planningtablethree
  },
  data() {
    return {
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
      // option2: [{
      //   value: '职能部门',
      //   label: '职能部门'
      // }, {
      //   value: '教学部门',
      //   label: '教学部门'
      // }],
      data: [{
        label: '学校',
        children: [{
          label: '基本情况',
          children: [{
            label: '教职工人员数量'
          }, {
            label: '教职工人员性别比例'
          }, {
            label: '学生人数'
          }, {
            label: '开设专业总数'
          }, {
            label: '图书总量'
          }, {
            label: '占地面积'
          }, {
            label: '师生比'
          }, {
            label: '建筑面积'
          }]
        }, {
          label: '管理队伍',
          children: [{
            label: '领导班子人员数量'
          }, {
            label: '领导班子性别比例'
          }, {
            label: '处职干部人员数量'
          }, {
            label: '处职干部性别比例'
          }, {
            label: '科值干部人员数量'
          }, {
            label: '科值干部人员比例'
          }]
        }, {
          label: '党建工作',
          children: [{
            label: '组织机构设置数量'
          }, {
            label: '党员数量'
          }, {
            label: '党员教师比例'
          }, {
            label: '党员学生比例'
          }, {
            label: '党员教师发展人数'
          }, {
            label: '党员学生发展人数'
          }]
        }, {
          label: '师资队伍',
          children: [{
            label: '校内专任教师数量'
          }, {
            label: '校内专任教师比例'
          }]
        }, {
          label: '教学工作',
          children: [{
            label: '教学教材数量'
          }, {
            label: '顶岗实习人数'
          }, {
            label: '质量工程数量'
          }, {
            label: '教学检查次数'
          }]
        }, {
          label: '学生工作',
          children: [{
            label: '学生总数'
          }, {
            label: '毕业率'
          }, {
            label: '社团情况'
          }, {
            label: '贫困生人数'
          }, {
            label: '违纪数量'
          }]
        }, {
          label: '招生情况',
          children: [{
            label: '省内生源数量'
          }, {
            label: '省外生源数量'
          }]
        }, {
          label: '就业情况',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '校企合作',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '科研工作',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '社会服务',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '资产状况',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '师资力量',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '课程',
        children: [{
          label: '基本信息',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '课程资源',
          children: [{
            label: '三级 3-2-1'
          }]
        }, {
          label: '实训教学',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '课堂教学',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '教学评价',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '师资',
        children: [{
          label: '师资概况',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '基础发展能力',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '教学与专业能力',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '科研能力',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '学生管理能力',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '学生',
        children: [{
          label: '基本信息',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '学业发展',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '身心素质',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '综合素质',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '生活状态',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '行为习惯',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
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
</style>
