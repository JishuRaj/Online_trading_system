const express = require('express')

const route = express.Router()
const company = require('../../models/companies_model')

route.get('/companies', (req, res)=>{
  res.send("sex me up")
})

route.post('/companies', async (req, res, next)=>{
  console.log(req.body)
  try{
    const companies = new company({
      bse_companies:{
        sensex:req.body.sensex,
        companies_listed:[{
           c_id:req.body.c_id,
        c_name:req.body.c_name,
        date: req.body.date,
        c_share_prices:{
          current_share_price:req.body.current_share_price,
          previous_prices:[{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price:req.body.afternone_price,
            evening_price:req.body.evening_price
          },{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price:req.body.afternone_price,
            evening_price:req.body.evening_price
          },{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price:req.body.afternone_price,
            evening_price:req.body.evening_price
          },{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price:req.body.afternone_price,
            evening_price:req.body.evening_price    
          }
          ]
        },
        gmt_time:[req.body.gmt_time],
        open:req.body.open,
        heigh:req.body.heigh,
        low:req.body.low,
        mkt_cap:req.body.mkt_cap,
        pe_ration:req.body.pe_ration,
        Div_yield:req.body.Div_yield,
        prev_close:req.body.prev_close,
        week_heigh:req.body.week_heigh,
        week_low:req.body.week_low,
        
        }],
        trading_time:req.body.trading_time
      },
      nse_companies:{
        nifty:req.body.nifty,
        companies_listed:[{
           c_id:req.body.c_id,
        c_name:req.body.c_name,
        date: req.body.date,
        c_share_prices:{
          current_share_price:req.body.current_share_price,
          previous_prices:[{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price: req.body.afternone_price,
            evening_price:req.body.evening_price
          },{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price: req.body.afternone_price,
            evening_price:req.body.evening_price
          },{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price: req.body.afternone_price,
            evening_price:req.body.evening_price
          },{
            day:req.body.day,
            morning_price:req.body.morning_price,
            afternone_price: req.body.afternone_price,
            evening_price:req.body.evening_price
          }
          ]
        },
        gmt_time:[req.body.gmt_time],
        open:req.body.open,
        heigh:req.body.heigh,
        low:req.body.low,
        mkt_cap:req.body.mkt_cap,
        pe_ration:req.body.pe_ration,
        Div_yield:req.body.Div_yield,
        prev_close:req.body.prev_close,
        week_heigh:req.body.week_heigh,
        week_low:req.body.week_low
        
        }],
        trading_time:req.body.trading_time
      }
    })
    const companiessaved = await companies.save()
    res.json(companiessaved)
    next() 
  }catch(err){
    console.log(err)
    res.json({
      message:err
    })
  }
})

module.exports= route;