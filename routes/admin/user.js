const express = require('express')
const route = express.Router()
const user = require('../../models/users_model')


route.get('/users', (req,res)=>{
  res.json('new')
})
route.post('/users', async (req, res , next)=>{
  console.log(req.body)
  try{
    const users = new user({
      username:req.body.username,
      password: req.body.password,
      profile_photo: req.body.profile_photo,
      email: req.body.email,
      age: req.body.age,
      my_companies: [
        {
          id: req.body.id,
          c_name: req.body.my_companies[1].c_name,
          date: req.body.date,
          c_share_prices: {
            current_share_price: req.body.current_share_price,
            previous_prices: [
              {
                day: req.body.day,
                morning_price: req.body.morning_price,
                afternone_price: req.body.afternone_price,
                evening_price: req.body.evening_price,
              },
              {
                day: req.body.day,
                morning_price: req.body.morning_price,
                afternone_price: req.body.afternone_price,
                evening_price: req.body.evening_price,
              },
              {
                day: req.body.day,
                morning_price: req.body.morning_price,
                afternone_price: req.body.afternone_price,
                evening_price: req.body.evening_price,
              },
              {
                day: req.body.day,
                morning_price: req.body.morning_price,
                afternone_price: req.body.afternone_price,
                evening_price: req.body.evening_price,
              },
            ],
          },
          gmt_time: req.body.gmt_time,
          open: req.body.open,
          heigh: req.body.heigh,
          low: req.body.low,
          mkt_cap: req.body.mkt_cap,
          pe_ration: req.body.pe_ration,
          Div_yield: req.body.Div_yield,
          prev_close: req.body.prev_close,
          week_heigh: req.body.week_heigh,
          week_low: req.body.week_low,
        },
      ],
      stocks: [
        {
          id: req.body.id,
          s_name: req.body.s_name,
          buy_price: req.body.buy_price,
          current_price: req.body.current_price,
          number_of_share: req.body.number_of_share,
        },
      ],
      wallet: req.body.wallet,
    })
    const usersaved = await users.save()
    res.json(usersaved)
    next()
  }catch(err){
    console.log(err)
    res.json({
      message:err
    })
  }
})

module.exports=route;