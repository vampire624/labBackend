const express = require('express')
const router = express.Router()
const handler = require('./handler.js')

router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 请求项目数据api
router.get('/projects', handler.handleProjectsApi)

// 请求论文会议数据api
router.get('/essays', handler.handleEssaysApi)

// 请求专利数据api
router.get('/rights', handler.handleRightsApi)

// 请求在读硕博数据api
router.get('/workingstaff', handler.handleStaffWorkingApi)

// 请求毕业硕士数据api
router.get('/workedstaff', handler.handleStaffWorkedApi)

module.exports = router