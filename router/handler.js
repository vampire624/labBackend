const sqlite3 = require('sqlite3')
const dbPath = './database/database.sqlite3'

// 抽离query函数 查询数据库
function query(sql, params = [], db) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        reject({err, db})
      } else {
        console.log('查询成功： ', sql)
        resolve({rows, db})
      }
    })
  })
}

// 抽离handle函数 连接数据库
function handle() {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath, err => {
      if (err) {
        console.log('ERR, could not connect to database: ' , err)
        reject(err)
      } else {
        console.log('connected to database successfully!')
        resolve(db)
      }
    })
  })
}

// 项目列表api的处理函数
exports.handleProjectsApi = function handleProjectsApi(req, res) {
  let data = []
  const sql = `SELECT * FROM projects`
  const params = []
  handle()
  .then((db) => {
    return query(sql, params, db)
  })
  .then(({rows, db}) => {
    data = rows
    db.close()
    res.status(200).json(data)
  })
  .catch(({err, db}) => {
    db.close()
    console.log('查询失败：', err)
  })
}

// 文章列表api的处理函数
exports.handleEssaysApi = function handleEssaysApi(req, res) {
  let data = []
  const sql = `SELECT * FROM essays`
  const params = []
  handle()
  .then((db) => {
    return query(sql, params, db)
  })
  .then(({rows, db}) => {
    data = rows
    db.close()
    res.status(200).json(data)
  })
  .catch(({err, db}) => {
    db.close()
    console.log('查询失败：', err)
  })
}

// 专利列表api的处理函数
exports.handleRightsApi = function handleRightsApi(req, res) {
  let data = []
  const sql = `SELECT * FROM rights`
  const params = []
  handle()
  .then((db) => {
    return query(sql, params, db)
  })
  .then(({rows, db}) => {
    data = rows
    db.close()
    res.status(200).json(data)
  })
  .catch(({err, db}) => {
    db.close()
    console.log('查询失败：', err)
  })
}

// 在读硕博列表的api的处理函数
exports.handleStaffWorkingApi = function handleStaffWorkingApi(req, res) {
  let data = []
  const sql = `SELECT * FROM staffs WHERE isGraduation = ?`
  const params = [0]
  handle()
  .then((db) => {
    return query(sql, params, db)
  })
  .then(({rows, db}) => {
    data = rows
    db.close()
    res.status(200).json(data)
  })
  .catch(({err, db}) => {
    db.close()
    console.log('查询失败：', err)
  })
}

// 毕业硕士列表的api的处理函数
exports.handleStaffWorkedApi = function handleStaffWorkedApi(req, res) {
  let data = []
  const sql = `SELECT * FROM staffs WHERE isGraduation = ?`
  const params = [1]
  handle()
  .then((db) => {
    return query(sql, params, db)
  })
  .then(({rows, db}) => {
    data = rows
    db.close()
    res.status(200).json(data)
  })
  .catch(({err, db}) => {
    db.close()
    console.log('查询失败：', err)
  })
}