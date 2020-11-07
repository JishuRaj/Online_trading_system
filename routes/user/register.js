const express = require('express')
const bcrypt = require('bcrypt')

const {register} = require('./validate')
const route = express.Router()

const saltRounds = 10;
const user = require('../../models/register_model')


// route.get('/register', (req,res)=>{
//   res.send('ohh fuck')
// })

route.post('/register', async (req, res, next)=>{
  console.log(req.body)
  const {error} = register(req.body)
  if(error) return res.status(400).json({
    error:error.details[0].message
  })

  const verify = await user.findOne({
    username: req.body.username
  })
  if(verify) return res.status(400).json({
    error:"user already exist, choose different username"
  })

  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
  const users = new user({
    username:req.body.username,
    password:hashedPassword,
    email:req.body.email,
  })
  try{
    const usersaved = await users.save()
    res.json(usersaved)
    next()
  }catch(err){
    res.status(400).send(err)
    console.log(err),
    res.json({message:err})
  }
})

module.exports = route;