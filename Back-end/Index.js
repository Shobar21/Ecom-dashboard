const express = require('express')
const users = require('./Db/users')
const cors = require('cors')
require('./Db/config')
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.post('/register', async (req, resp) => {
  let user = users(req.body)
  let result = await user.save()
  //not show password
  result = result.toObject()
  delete result.password
  resp.send(result)
})

app.post('/login', async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await users.findOne(req.body).select('-password')
    if (user) {
      resp.send(user)
    } else {
      resp.send({ result: 'No user found' })
    }
  } else {
    resp.send({ result: 'No user found' })
  }
})
app.listen(5000)
