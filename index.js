const express = require('express')
const router = require('./router/index.js')
const app = new express()

app.use(express.static(__dirname))
app.use('/api', router)

app.listen(3000, () => {
  console.log('LAB app is running at port 3000')
})