const express = require('express')
const data = require('./data')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send("Installation 00: Hi Mom, look it's express!")
})

app.get('/ring', (req, res) => {
  res.send(data.rings)
})

app.get('/test', (req, res) => {
  res.send(data.test)
})

app.listen(port, () => {
  console.log(`Installation00 is running on port ${port}.`)
})