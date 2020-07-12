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
            <span>监测点名称:</span>
            <el-select v-model="value" style="width: 150px;margin-left: 15px" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
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
      data: [{
        label: '学校',
        children: [{
          label: '基本情况',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '管理队伍',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '党建工作',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '师资队伍',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '教学工作',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '学生工作',
          children: [{
            label: '三级 1-1-1'
          }]
        }, {
          label: '招生情况',
          children: [{
            label: '三级 1-1-1'
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
