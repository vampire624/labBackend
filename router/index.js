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
router.get('/workingstuff', (req, res) => {
  const data =  [
    [
    {
      year: '2017级博士研究生',
      name: '崔宗敏',
      sex: '男',
      researchDirection: '海洋湍流下部分相干光闪烁指数的研究'
    } 
    ],
    [
    {
      year: '2016级硕士研究生',
      name: '刘力',
      sex: '男',
      researchDirection: '跨介质蓝绿激光通信研究'
    }, {
      year: '2016级硕士研究生',
      name: '许梦昊',
      sex: '男',
      researchDirection: '异构车联网车间通信研究'
    }, {
      year: '2016级硕士研究生',
      name: '杨祎楠',
      sex: '男',
      researchDirection: '车联网光通信技术研究'
    }
    ], 
    [
    {
      year: '2017级硕士研究生',
      name: '栾晓晖',
      sex: '女',
      researchDirection: '海洋湍流下的光束漂移'
    }, {
      year: '2017级硕士研究生',
      name: '胡嘉宸',
      sex: '男',
      researchDirection: '海洋湍流下的波光仿真'
    }, {
      year: '2017级硕士研究生',
      name: '武梦婕',
      sex: '女',
      researchDirection: '海洋湍流下闪烁指数的研究'
    }, {
      year: '2017级硕士研究生',
      name: '汪雅敏',
      sex: '女',
      researchDirection: '5G C-RAN网络架构下混合RF/FSO系统的研究'
    }, {
      year: '2017级硕士研究生',
      name: '张灿',
      sex: '男',
      researchDirection: '基于CNN通信链路预估的多模自适应网络传输技术研究'
    }
    ], 
    [
    {
      year: '2018级硕士研究生',
      name: '樊云涛',
      sex: '男',
      researchDirection: '基于可见光通信技术的无人船舶智能控制技术研发'
    }, {
      year: '2018级硕士研究生',
      name: '赵鹏',
      sex: '男',
      researchDirection: '5G场景下混合RF/FSO系统蒙特卡洛仿真的研究'
    }, {
      year: '2018级硕士研究生',
      name: '徐东苓',
      sex: '女',
      researchDirection: '海洋湍流波结构函数和空间相干半径的研究'
    }, {
      year: '2018级硕士研究生',
      name: '蔡林',
      sex: '女',
      researchDirection: '基于OAM的光通信中的机器学习方法'
    }
    ]
  ]
  res.status(200).json(data)
})

// 请求毕业硕士数据api
router.get('/workedstuff', (req, res) => {
  const data = [
    [
      {
        year: '2012级硕士研究生',
        name: '毛伯敏',
        sex: '男',
        graduationGoes: '日本东北大学'
      }, 
      {
        name: '高书勤',
        sex: '男',
        graduationGoes: '百钧成'
      },
      {
        name: '何川',
        sex: '男',
        graduationGoes: '中电20所'
      },
      {
        name: '闫瑞青',
        sex: '女',
        graduationGoes: '华为北研所'
      }
    ],  
    [
      {
        year: '2014级硕士研究生',
        name: '卢珊珊',
        sex: '女',
        graduationGoes: '海信'
      }, 
      {
        name: '杨红',
        sex: '女',
        graduationGoes: '中国移动',
      }, 
      {
        name: '姬瑶',
        sex: '女',
        graduationGoes: '中软',
      }, 
      {
        name: '刘聪',
        sex: '男',
        graduationGoes: '中兴'
      }, 
      {
        name: '崔宗敏',
        sex: '男',
        graduationGoes: '西安电子科技大学'
      }
    ],
    [
      {
        year: '2015级硕士研究生',
        name: '吴乐',
        sex: '女',
        graduationGoes: '迈瑞'
      }, 
      {
        name: '毛茜',
        sex: '女',
        graduationGoes: '诺瓦科技'
      }
    ]
  ]
  res.status(200).json(data)
})
module.exports = router