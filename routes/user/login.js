const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {login} = require('./validate')
const route = express.Router()


const user = require('../../models/register_model')


route.get('/login', (req,res)=>{
  res.send('ohh fuck again')
})

route.post('/login', async (req, res)=>{
  const {error} = login(req.body)
  if(error) return res.status(400).json({
    message:error.details[0].message
  })

  const member = await user.findOne({username: req.body.username})
  if(!member) return res.status(400).json({error:"username does not match"});
  // console.log(member)
  const validpassword = await bcrypt.compare(req.body.password, member.password)
  if(!validpassword) return res.status(400).json({error:"password does not match"})
  
  const token = jwt.sign({_id:member._id}, process.env.TOKEN_SECRET)
  res.header('auth-token', token).json({
    message:token
  })
})

module.exports = route;