import request from '@/utils/request'

// 获取整改指标
export function getRectificationIndicators(parems) {
  return request({
    url: 'functions/index/listByTier',
    method: 'get',
    params: parems
  })
}

// 获取整改指标详情
export function getIndicatorsDetail() {
  return request({
    url: 'functions/index/getZgIndex/',
    method: 'get'
  })
}

// 获取所有的监测点
export function getAllIndicatorsItems() {
  return request({
    url: '/functions/index/getAllIndex',
    method: 'get'
  })
}

// 规划设计获取所有整体规划
export function getAllWholePlan() {
  return request({
    url: '/functions/planning/getPlanningList',
    method: 'get'
  })
}

// 新建规划
export function newWholePlan(parems) {
  return request({
    url: 'functions/planning/addAndUpdatePlanning',
    method: 'post',
    data: parems
  })
}

// 搜索规划
export function searchPlan(parems) {
  return request({
    url: 'functions/planning/getPlanningByCondition',
    method: 'post',
    data: parems
  })
}

// 获取所有的任务
export function getAllTask() {
  return request({
    url: '/functions/task/getTaskList',
    method: 'get'
  })
}

// 查找某一条具体任务的情况
export function getOneTaskInfo(parems) {
  return request({
    url: '/functions/task/getTaskInfo',
    method: 'get',
    data: parems
  })
}

// 新建任务
export function newTask(parems) {
  return request({
    url: '/functions/task/addAndUpdateTask',
    method: 'post',
    data: parems
  })
}
