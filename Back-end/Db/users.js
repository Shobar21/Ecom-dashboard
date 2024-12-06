const { default: mongoose } = require('mongoose')

mongoose.connect('mongodb://localhost:27017/E-Dashboard')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

module.exports = mongoose.model('users', userSchema)
