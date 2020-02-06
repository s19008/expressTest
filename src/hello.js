const express = require('express')
const app = express()
const port = 8081


app.get('/users/:users', (req, res) => {
  res.send(`${req.params.users}さん`)
})


app.listen(port)
