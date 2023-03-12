const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hi Mom, look it's express!")
})

app.listen(port, () => {
  console.log(`Installation00 is running on port ${port}.`)
})