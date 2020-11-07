const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  username: String,
  password: String,
  email:String,
  Date:{
    type:Date,
    default:Date.now,
  }
})

module.exports=mongoose.model('register', schema)