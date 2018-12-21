const express = require('express')
const router = express.Router()

router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 请求项目数据api
router.get('/projects', (req, res) => {
  const data = [
    {
      title: '基于多域智能宽带机动自组网应急通信系统',
      content: '项目响应我国“一带一路”倡议，为应对跨境地质复杂区重大突发灾害应急通信的需求，建立适合复杂地形，融合多种通信技术快速高效组网的区域机动自组网应急通信系统。项目联合中电 54 所、上 海智格网通信科技有限公司和中国电信集团陕西分公司，并与英国肯特大学合作，共同致力于新型应急通信系统构建及快速高效组网技术研究。'
    }, {
      title: '蓝绿激光对潜光通信技术研究',
      content: '项目致力于研究新型的空间载体与水下平台的蓝绿激光通信传输系统，并解决其关键问题，研制点对点对潜光通信的系统原型样机，构建试验环境，完成对潜通信的测试和评估，对潜通信奠定理论与技术基础。重点研究光通信传输系统的总体方案设计，蓝绿激光的斜程链路，空天载体与水下平台的设备研制，以及试验环境的构建，以完成测试与评估。'
    }, {
      title: '可见光信道特性及APT技术研究',
      content: '海军预研项目“可见光信道特性及APT技术研究”（2011~2015）课题，对可见光波段的大气信道特性及设备进行了系统的研究，并进行了外场试验,达到技术指标的要求。海军预研项目“可见光信道特性及APT技术研究”综合评定为5级，有望进行型号研制。'
    }
  ]
  res.status(200).json(data)
})

// 请求论文会议数据api
router.get('/essays', (req, res) => {
  const data = ['Yue Peng, Li Qian-nan, Yi Xiang et al. “Ultra Linear Modulator with High Output RF Gain  Using A 1*2 MMI Coupler”, IEICE Trans. on electronics, Vol.E95-C,No.12,pp.1883-1886, 2012 (SCI/EI Index )', 'Xiang Yi, Zengji Liu, and Peng Yue, Inner- and outer-scale effects on the scintillation index of an optical wave propagating through moderate-to-strong non-Kolmogorov turbulence, Optics Express, vol. 20, no. 4, pp. 4232-4247, Feb. 2012. (SCI：000301041900088；EI：2012822153746)', 'Xiang Yi, Zengji Liu, and Peng Yue, Average BER of free-space optical systems in turbulent atmosphere with exponentiated Weibull distribution, Optics Letters, vol. 37, no. 24, pp. 5142-5144, Dec. 2012. (SCI/EI Index；EI：20125215831554)', 'Xiang Yi, Zengji Liu, and Peng Yue, Optical scintillations and fade statistics for FSO communications through moderate-to-strong non-Kolmogorov turbulence, Optics & Laser Technology, vol. 47, no. 4, pp. 199-207, Apr. 2013. (SCI Index；EI：20124715685966)', '易湘、岳鹏、刘增基、陈耿，无线光载射频通信系统误码率性能分析，光电子激光，vol. 23, no. 7, pp. 1309-1313, 2012.（EI：2012351581683）', '易湘、岳鹏、刘增基、陈耿，基于分集接收技术相干大气激光通信系统性能分析，光电子激光，vol. 23, no. 9, pp. 1743-1748, 2012.（EI：2012431599555）']
  res.status(200).json(data)
})

// 请求专利数据api
router.get('/rights', (req, res) => {
  const data = ['集成光电探测器的CMOS图像传感器双模通信接收系统 (授权)', '基于LED车灯的双速率可见光通信发信机（授权）', '一种混合光编码方法及装置', '基于人造散射体的红外光散射通信装置及方法', '基于无线射频能量收集装置的可穿戴无源RFID设备', '面向车联网的区域交通流量预测系统及方法', '基于车载可见光通信的发射端LED车灯自动控制装置', '基于激光光强检测的无人机飞控设备', '水下智能无线光通信系统']
  res.status(200).json(data)
})

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