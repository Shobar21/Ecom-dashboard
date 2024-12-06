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
  resp.send(result)
})

app.listen(5000)
