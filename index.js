const express = require('express')
const router = require('./router/index.js')
const fs = require('fs')

const app = new express()
app.use(express.static(__dirname))
app.use('/api', router) // 所有错误路由返回index.html，404页面由前端路由展示
app.use("*", (req, res) => {
  fs.readFile('./index.html', 'utf-8', (err, chunk) => {
    if (err) {
      console.log(err)
      res.end('服务器发生未知错误，请稍后重试！')
    } else {
      res.writeHead(200, {
       'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(chunk)
    }
  })
})
app.listen(3000, () => {
  console.log('LAB app is running at port 3000')
})