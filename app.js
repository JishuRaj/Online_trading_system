const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const userroute = require('./routes/admin/user')
const companyroute = require('./routes/admin/companies')

// app.get('/', (req, res)=>{
//   res.send('get lost')
// })
app.use(bodyparser.json())
app.use('/admin',[userroute,companyroute])


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect("mongodb://localhost:27017/mongoTrade",options, ()=>{
  console.log('db connected successfully')
})

app.listen(3000)