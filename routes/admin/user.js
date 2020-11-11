const express = require('express')
const route = express.Router()
const user = require('../../models/users_model')


route.get('/users', (req,res)=>{
 res.send("hello")
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
          c_name: req.body. my_companies[0].c_name,
          date: req.body.my_companies[0].date,
          c_share_prices: {
            current_share_price: req.body.my_companies[0].c_share_prices.current_share_price,
            previous_prices: [
              {
                day: req.body.my_companies[0].c_share_prices.previous_prices[0].day,
                morning_price: req.body.my_companies[0].c_share_prices.previous_prices[0].morning_price,
                afternone_price: req.body.my_companies[0].c_share_prices.previous_prices[0].afternone_price,
                evening_price: req.body.my_companies[0].c_share_prices.previous_prices[0].evening_price,
              },
              {
                day: req.body.my_companies[0].c_share_prices.previous_prices[0].day,
                morning_price: req.body.my_companies[0].c_share_prices.previous_prices[0].morning_price,
                afternone_price: req.body.my_companies[0].c_share_prices.previous_prices[0].afternone_price,
                evening_price: req.body.my_companies[0].c_share_prices.previous_prices[0].evening_price,
              },
              {
                day: req.body.my_companies[0].c_share_prices.previous_prices[0].day,
                morning_price: req.body.my_companies[0].c_share_prices.previous_prices[0].morning_price,
                afternone_price: req.body.my_companies[0].c_share_prices.previous_prices[0].afternone_price,
                evening_price: req.body.my_companies[0].c_share_prices.previous_prices[0].evening_price,
              },
              {
                day: req.body.my_companies[0].c_share_prices.previous_prices[0].day,
                morning_price: req.body.my_companies[0].c_share_prices.previous_prices[0].morning_price,
                afternone_price: req.body.my_companies[0].c_share_prices.previous_prices[0].afternone_price,
                evening_price: req.body.my_companies[0].c_share_prices.previous_prices[0].evening_price,
              },
            ],
          },
          gmt_time: req.body.my_companies[0].gmt_time,
          open: req.body.my_companies[0].open,
          heigh: req.body.my_companies[0].heigh,
          low: req.body.my_companies[0].low,
          mkt_cap: req.body.my_companies[0].mkt_cap,
          pe_ration: req.body.my_companies[0].pe_ration,
          Div_yield: req.body.my_companies[0].Div_yield,
          prev_close: req.body.my_companies[0].prev_close,
          week_heigh: req.body.my_companies[0].week_heigh,
          week_low: req.body.my_companies[0].week_low,
        },
      ],
      stocks: [
        {
          id: req.body.stocks[0].id,
          s_name: req.body.stocks[0].s_name,
          buy_price: req.body.stocks[0].buy_price,
          current_price: req.body.stocks[0].current_price,
          number_of_share: req.body.stocks[0].number_of_share,
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